import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="shadow-[0px_1px_4px_0px_#718096] group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 ">
            <div className="group-hover:bg-richblack-900 flex flex-row items-center gap-2 rounded-full px-10 py-[5px]">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="mt-9 gradient font-semibold text-center text-3xl lg:text-4xl">
          Empower Your Future with{" "}
          <span className="font-semibold">Coding Skills</span>
        </div>

        <div className="mt-4 text-center w-[70%] text-md font-medium text-richblack-300 leading-[24px] text-[14px] lg:text-[16px]">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

<div className="md:block hidden">
<div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
</div>

<div className="md:hidden block">
<div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Signup
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Login
          </CTAButton>
        </div>
</div>


        
      </div>
      

      <div className="boxShadow my-14 w-[80%] md:w-[75%] mx-auto ">
        <video muted loop autoPlay  className="video">
          <source src={Banner} type="video/mp4" />
        </video>
      </div>

      {/* code section 1 */}
      <div className="mx-auto my-[100px] w-[90%] md:w-[80%]">
        <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className="text-[33px] text-white font-semibold">
              Unlock Your <span className="hello1">coding potential</span> with
              our online courses
            </div>
          }
          subHeading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            btnText: "Try it Yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
          }}
          codeblock={`<!DOCTYPE html>
                       <html>
                       head><title>Example</title><linkrel="stylesheet"href="styles.css">
                       /head>
                       body>
                       h1><ahref="/">Header</a>
                       /h1>
                       nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
                       /nav>`}
          codeColor={"text-yellow-25"}
          backgroundGradient={<div className="blur-semicircle"></div>}
        />
      </div>

      {/* code section 2 */}
      <div className="mx-auto my-[100px] w-[90%] md:w-[80%] mb-[920px] md:mb-[520px]">
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-[33px] text-white font-semibold w-[80%] md:w-[45%]">
              Start<span className="hello1"> coding in seconds</span>
            </div>
          }
          subHeading={`Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.`}
          ctabtn1={{
            btnText: "Continue Lesson",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
          }}
          codeblock={`<!DOCTYPE html>
                       <html>
                       head><title>Example</title><linkrel="stylesheet"href="styles.css">
                       /head>
                       body>
                       h1><ahref="/">Header</a>
                       /h1>
                       nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
                       /nav>`}
          codeColor={"text-white"}
          backgroundGradient={<div className="blur-semicircle1"></div>}
        />
        <div className="relative md:translate-y-[15rem] ">
          <ExploreMore />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px] w-full">
          <div className="w-11/12 max-w-maxContent h-full flex  gap-5 mx-auto">
            <div className="flex flex-row mx-auto gap-7 items-center text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex mt-[120px] gap-5 w-[94%] flex-col md:flex-row">
            <div className="text-3xl  font-semibold w-[100%] md:w-[45%]">
              Get the skills you need for a
              <span className="hello1"> job that is in demand</span>
            </div>
            <div className="flex-col w-[100%] md:w-[45%] font-medium text-[16px] space-y-[45px]">
              <div className="flex font-inter ">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div className="w-fit">
                <CTAButton active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-3">
                    Learn More
                    <FaArrowRight />
                  </div>
                </CTAButton>
              </div>
            </div>
          </div>
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />

        <div className="w-full px-4 lg:block hidden">
          <span className="text-white flex justify-center font-bold text-4xl mb-10">Reviews from other learners</span>
          <ReviewSlider />
        </div>
      </div>

      {/* Section 4 */}
      <Footer />
    </div>
  );
};

export default Home;
