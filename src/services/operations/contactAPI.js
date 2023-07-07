import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector"
import { contactusEndpoint } from "../apis"

const {
    CONTACT_US_API
  } = contactusEndpoint;

export async function sendContactUsMessage(formData) {
    const toastId = toast.loading("Sending message..."); // Assuming you are using a toast library for displaying notifications
    let success = false;
    try {
      console.log("BEFORE Calling BACKEND API FOR CONTACT US");
      const response = await apiConnector("POST", CONTACT_US_API, formData);
      console.log("AFTER Calling BACKEND API FOR CONTACT US");
      // console.log("CONTACT_US_API API RESPONSE............", response);
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      success = true;
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("CONTACT_US_API API ERROR............", error);
      toast.error("Failed to send message");
    }
    toast.dismiss(toastId);
    return success;
  }
  