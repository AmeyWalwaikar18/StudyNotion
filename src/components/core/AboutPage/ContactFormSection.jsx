import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";
import { HiChatAlt2 } from "react-icons/hi";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import Footer from "../../common/Footer";

const ContactFormSection = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto gap-x-10 flex flex-col pt-[50px] md:pt-[100px] mb-10 ">
        <div className="flex gap-x-10 pb-9">
          {/* left part */}
          <div className="w-[40%] hidden md:block h-fit space-y-10 bg-[#161D29] pl-[25px] pr-[35px] rounded-md py-[30px]">
            <div className="flex flex-row gap-2">
              <div className="text-[#AFB2BF] text-[20px]">
                <HiChatAlt2 />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-[18px] leading-[26px] text-[#F1F2FF]">
                  Chat on us
                </div>
                <div className="font-normal text-[14px] leading-[22px] text-[#999DAA]">
                  Our friendly team is here to help.
                </div>
                <div className="font-normal text-[14px] leading-[22px] text-[#999DAA]">
                  studyNotion@gmail.com
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="text-[#AFB2BF] text-[20px]">
                <BsGlobeEuropeAfrica />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-[18px] leading-[26px] text-[#F1F2FF]">
                  Visit us
                </div>
                <div className="font-normal text-[14px] leading-[22px] text-[#999DAA]">
                  Come and say hello at our office HQ.
                </div>
                <div className="font-normal text-[14px] leading-[22px] text-[#999DAA]">
                  Here is the location/ address
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="text-[#AFB2BF] text-[20px]">
                <IoIosCall />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-[18px] leading-[26px] text-[#F1F2FF]">
                  Call us
                </div>
                <div className="font-normal text-[14px] leading-[22px] text-[#999DAA]">
                  Mon - Fri From 8am to 5pm
                </div>
                <div className="font-normal text-[14px] leading-[22px] text-[#999DAA]">
                  +123 456 7890
                </div>
              </div>
            </div>
          </div>
          
          {/* right part */}
          <div className="border-[#999DAA] px-9 py-9 w-[100%] md:w-[60%] border-[0.1px] rounded-md">
            <h1 className="font-semibold tracking-tight pb-2 text-[30px] md:text-[36px] leading-[44px] w-[90%] text-[#F1F2FF] ">
              Got a Idea? We’ve got the skills. Let’s team up
            </h1>
            <p className="font-normal pb-7 text-base text-[#838894]">
              Tall us more about yourself and what you’re got in mind.
            </p>
            <div>
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactFormSection;
