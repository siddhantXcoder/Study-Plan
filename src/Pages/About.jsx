import React from "react"
import { HighlightText } from "../Components/core/HomePageComponent/HighlightText"
import banner1 from "../assets/banner1.png"
import img1 from "../assets/studyingImg.jpg"
import { Button } from "../Components/core/HomePageComponent/Button"
import Footer from "../Components/ForAll/Footer"


const About = () => {

    const Stats = [
        { count: "7K", label: "Enthusiastic Learners" },
        { count: "15+", label: "Expert Instructors" },
        { count: "250+", label: "Diverse Courses" },
        { count: "70+", label: "Accolades" },
      ];

      const LearningGridArray = [
        {
          order: -1,
          heading: "World-Class Learning for",
          highliteText: "Anyone, Anywhere",
          description:
            "StudyPlan partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
          BtnText: "Learn More",
          BtnLink: "/",
        },
        {
          order: 1,
          heading: "Curriculum Based on Industry Needs",
          description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
        },
        {
          order: 2,
          heading: "Our Learning Methods",
          description:
            "StudyPlan partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 3,
          heading: "Certification",
          description:
            "StudyPlan partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 4,
          heading: `Rating "Auto-grading"`,
          description:
            "StudyPlan partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 5,
          heading: "Ready to Work",
          description:
            "StudyPlan partners with more than 275+ leading universities and companies to bring",
        },
      ];
      

  return (
    <div className="">
        <div className="">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center  text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-[#9BA2A8] lg:w-[95%]">
              StudyPlan is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="">
            <img src={banner1}/>
          </div> 

            <div className=" text-[1.5rem] md:text-[2.7rem] mt-5 ">
        We are passionate about revolutionizing the way we learn.
      Our innovative platform combines<span className=" text-yellow-400"> technology</span>, <span className=" text-orange-400"> experties</span>, 
      and<span className=" text-red-500"> community</span> to create an unparalleled educational experience.
        </div>  
    
          </div>


        </div>

        <hr/>
        
        <div className=" bg-[#001F35]">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-around">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#a08ee0] via-[#2acee7] to-[#3a3ace] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Goal & Motivation
              </h1>
              <p className="text-base font-medium text-[#9BA2A8]  lg:w-[95%]">
              Our e-learning platform sprang from a united vision and a fervent zeal to reshape education. It was ignited by
               a coalition of forward-thinking educators, pioneering technologists, and ardent lifelong learners who were galvanized 
               by a profound insight:
               in the ever-shifting digital realm, there exists an urgent call for accessible, adaptable, and superior learning pathways.
              </p>
              <p className="text-base font-medium text-[#9BA2A8]  lg:w-[95%]">
              Drawing from our own extensive experience in education, we intimately observed the constraints and hurdles inherent in
               traditional educational models. Firmly convinced that learning ought not to be constrained within classroom walls or hindered
                by geographical barriers, we set out to envisage a platform capable of transcending these limitations. Our vision was to craft a
               medium that could seamlessly bridge these divides and embolden individuals from diverse backgrounds to unleash their innate potential.
              </p>
            </div>

            <div>
              <img
              src={img1}
                alt=""
                className=" h-[15rem] md:h-[20rem] shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-around">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#dde65f] to-[#d0ec14] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-[#9BA2A8]  lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#e67676] via-[#e71d1d] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-[#9BA2A8]  lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12  text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10" key={index}>
                <h1 className="text-[30px] font-bold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    
   
    <div className=" bg-[#001F35] p-2">
    <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
    <div className="grid mx-auto  w-[350px] xl:w-fit  grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? " bg-blue-600 h-[294px]"
                : card.order % 2 === 0
                ? "  h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl text-white font-semibold ">
                  {card.heading} <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <Button active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-8  flex flex-col gap-8">
                <h1 className=" text-white text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
      </div>
    </div>

    <Footer/>
   

      </div>

  )
}

export default About