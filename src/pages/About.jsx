import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import ReviewSlider from "../components/common/ReviewSlider";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";
import "../App.css";
import ContactUsForm from "../components/ContactPage/ContactUsForm";

const About = () => {
  return (
    <div className="w-full mx-auto ">
      {/* section 1 */}
      <section className="w-full bg-[#161D29]">
        <div className="w-full pt-[100px] relative">
          <header className=" text-[#F1F2FF] font-semibold text-[32px] leading-[44px] text-center w-[90%] md:w-[60%] mb-[100px] lg:mb-[245px] mx-auto">
            Driving Innovation in Online Education for a
            <span className="hello1"> Brighter Future</span>
            <p className="w-[100%] mx-auto pt-7 text-[#838894] font-medium text-base">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="flex lg:gap-x-3 justify-center w-full mt-[50px]">
            <div className="flex justify-center">
              <div className="mx-auto flex flex-col lg:flex-row gap-y-3 lg:gap-x-5 lg:absolute  lg:left-[11%] top-[330px]">
                <img src={BannerImage1} className="w-[320px] h-[270px]" />
                <img src={BannerImage2} className="w-[320px] h-[270px]" />
                <img src={BannerImage3} className="w-[320px] h-[270px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section className="w-full">
        <div className="mt-[125px] lg:mt-[150px]  w-full mx-auto">
          <Quote />
        </div>
      </section>

      {/* section 3 */}

      <section className="border-t-[1px] mt-[50px] md:mt-[80px] pt-[80px] border-richblack-600 w-full">
        <div className="flex flex-col w-full">
          {/* founding story wala div */}
          <div className="flex flex-col mx-auto space-y-6 md:space-y-0 md:flex-row w-11/12 items-center ">
            {/* founding story left box */}
            <div className="w-[90%] md:w-[40%] space-y-6 mx-auto">
              <h1 className="gradient font-semibold text-[32px] leading-[44px] tracking-tight">
                Our Founding Story
              </h1>

              <p className="text-base text-[#838894] font-medium">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>

              <p className="text-base text-[#838894] font-medium">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* foudning story right box */}
            <div className="mx-auto">
              <img src={FoundingStory} />
            </div>
          </div>

          {/* vision and mission wala parent div */}
          <div className="flex md:flex-row flex-col w-11/12 mx-auto mt-[175px]">
            {/* left box */}
            <div className="w-[90%] md:w-[40%] pb-10 md:pb-0 space-y-6 mx-auto">
              <h1 className="vision font-semibold text-[32px] leading-[44px] tracking-tight">
                Our Vision
              </h1>
              <p className="text-base text-[#838894] font-medium">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* right box */}
            <div className="w-[90%] md:w-[35%] mx-auto">
              <h1 className="mission font-semibold text-[32px] leading-[44px] tracking-tight">
                Our Mission
              </h1>
              <p className="text-base text-[#838894] font-medium">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <div className="bg-[#161D29] mx-auto w-full px-28 py-16 mt-[80px] mb-[60px]">
        <StatsComponent />
      </div>

      {/* section 5 */}
      <section className="mx-auto w-11/12 flex flex-col items-center justify-between gap-5 mb-[140px]">
        <LearningGrid />
        <div className="w-[80%] md:w-[50%]">
          <h1 className="font-semibold pb-5 lg:pb-0 text-center tracking-tighter text-[32px] text-[#F1F2FF] leading-[44px]">
            Get in Touch
          </h1>
          <p className="font-medium pb-[50px] text-base text-center text-[#838894]">
            We’d love to here for you, Please fill out this form.
          </p>

          <ContactUsForm />
        </div>
      </section>

      <section className="w-full">
        <div className="w-full px-4 lg:block hidden">
          <span className="text-white flex justify-center font-bold text-4xl mb-10">Reviews from other learners</span>
          <ReviewSlider />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default About;
