import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { HighlightText } from '../Components/core/HomePageComponent/HighlightText';
import { Button } from '../Components/core/HomePageComponent/Button';
import videoHome from "../assets/videoHome.mp4"
import { CodeDiv } from '../Components/core/HomePageComponent/CodeDiv';
import {Instructor }from "../Components/core/HomePageComponent/Instructor";
import { FaArrowRight } from 'react-icons/fa';
import l1 from "../logo/leadership.png";
import l2 from "../logo/responsibilty.png";
import l3 from "../logo/flexible.png";
import l4 from "../logo/problem-solving.png";
import studyImg from "../assets/studyingImg.jpg"
import programming from "../assets/Programming.gif"
import competition from "../assets/competition.gif"
import progress from "../assets/progress.gif"
import Footer from '../Components/ForAll/Footer';
import { MidSection } from '../Components/core/HomePageComponent/MidSection';



const dummy = [
  {
    logo : l1,
    heading: "Leadership",
    Description :"Fully comitted to the comittment",
  },
  {
    logo : l2,
    heading: "Responsibilty",
    Description :"Student is the first priority",
  },
  {
    logo : l3,
    heading: "Flexible",
    Description :"Flexible  with your timetable and learning style",
  },
  {
    logo : l4,
    heading: "Responsibilty",
    Description :"Responsibilty for every step taken",
  },
]

export const Home = () => {
  return (
    <div className="mx-auto w-full">
      {/* First section */}
      <div className="relative mx-auto flex flex-col items-center justify-center text-white w-11/12 md:w-full">
        <Link to="/signup">
          <div className="mt-16 p-1 mx-auto rounded-full bg-black text-yellow-200 font-Bebas transition-all duration-200 hover:scale-95 hover:bg-gray-800 w-fit">
            <div className="flex items-center gap-2 rounded-full px-10 py-[5px] border-white transition-all duration-200">
              <p className="">Follow Your Passion Join Now</p>
              <HiOutlineArrowSmRight />
            </div>
          </div>
        </Link>

        <div className="text-lg md:text-4xl font-inter font-semibold flex flex-col mt-4 items-center">
          Illuminate Your Path to Success with Essential{' '}
          <HighlightText className=" text-[28px] md:text-[48px]" text="Coding Skills!" />
        </div>

        <div className="md:w-[70%] w-[90%] text-center  font-inter font-semibold text-[#9BA2A8] text-sm md:text-lg mt-2">
          Unlock Coding Mastery Anywhere, Anytime! Dive into our online
          courses—learn at your pace with hands-on projects, quizzes, and
          personalized feedback!
        </div>

        <div className="flex flex-row gap-7 mt-4">
          <Button  active={true} linkTo="/signup">
            Learn More <HiOutlineArrowSmRight/>
          </Button>

          <Button active={false} linkTo="/signup">
            Demo
          </Button>
        </div>

        <div className=' mx-auto m-4 md:my-10 shadow-lg shadow-blue-200 md:shadow-blue-200 w-[80%] md:w-[70%] '>
            <video muted loop autoPlay className="w-full h-auto">
                <source src={videoHome}/>
            </video>
        </div>
        
        <div>
         <CodeDiv
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Showcase your  <HighlightText  text={"coding potential"} /> with our online 
                courses.
              </div>
            }

            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }

            btn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}

            btn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}

            codeColor={"text-[#EED70B]"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
         />

          <CodeDiv
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                 Start <HighlightText  text={"upgrade yourself."} />
              </div>
            }

            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }

            btn1={{
              btnText: "Continue",
              link: "/signup",
              active: true,
            }}

            btn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}

            codeColor={" text-[#0094FF]"}
            codeblock={`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family\n=Oswald&display=swap');\n  h1{margin:0;padding:20px 0;}\n html, body{ overflow-x: hidden;}\n`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
         />
        </div>

            <MidSection/>

      </div>

       {/* dusra section */}
       <div className=' bg-[#fffffffa] text-black'>
           <div className='homeBG h-[310px]'>
              <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between  gap-5 mx-auto'>
              <div className='h-[150px]'></div>
                  <div className='flex flex-row gap-7 text-white'>
                    <Button active={true} linkTo={"/signup"}>
                        <div className='flex items-center gap-3'>
                          Explore More
                          <FaArrowRight/>
                        </div>
                    </Button>

                    <Button active={false} linkTo={"/signup"}>
                        <div className='flex items-center gap-3'>
                            Learn More
                        </div>
                    </Button>
                  </div>
              </div>
           </div>

           <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7'>
              <div className='flex flex-col  md:flex-row gap-2 mb-10 mt-[95px]'>
                  <div className='text-4xl font-Bebas text-gray-500 md:w-[45%]'>
                    Acquire the aptitudes necessary for a <HighlightText text={"promising future."}/>
                  </div>

                  <div className='flex flex-col gap-10 md:w-[40%] items-start'>
                  <div className='text-[16px] text-gray-500 font-semibold font-inter'>
                      Contemporary FocusON establishes its own benchmarks. Flourishing as a competitive 
                  specialist in the present era necessitates more than just professional skills, it mandates perpetual refinement and augmentation.
                  </div>
                  <Button active={false} linkTo={"/signup"}>
                      <div>
                        Learn More
                      </div>
                    </Button>
              </div>
              </div>

              <div className='flex md:flex-row flex-col  items-center p-5 justify-center gap-5'>
              <div className='flex md:w-[45%] flex-col gap-5'>
                {
                  dummy.map((ele, index) => {
                    return(
                      <div className='flex flex-row gap-5 space-y-5 items-center justify-start' key={index}>
                        <div className='w-[50px] h-[50px] bg-white rounded-full flex items-center'>
                            <img className=' rounded-full' src={ele.logo}/>
                        </div>

                        <div>
                          <h2 className='text-[20px] text-blue-600'>{ele.heading}</h2>
                          <p className=' text-[15px]'>{ele.Description}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div className='relative shadow-black'>
                  <img className=' shadow-black hidden md:flex object-cover rounded-xl md:h-[480px]' src={studyImg}/>

                  <div className='md:absolute  bg-green-700 flex flex-row items-center justify-center text-center text-white rounded-lg uppercase py-2 md:py-5 bottom-[-2rem] left-[5rem]'>
                      <div className='gap-5 items-center p-2 flex text md:w-[10rem]  border-r-2 border-green-300'>
                        <p className=' text-white md:text-3xl text-[1rem]'>Years of experience</p>
                      </div>

                      <div className='flex gap-5 items-center px-7'>
                      <p className=' text-white md:text-3xl text-[1rem]'>Courses from every field</p>
                      </div>
                  </div>
              </div>
            </div>

            <div className='mt-[130px]'>
                <div className='flex flex-col gap-5 items-center'>
                  <div className='text-4xl font-semibold text-center'>
                      Your  Skills and Interests are <HighlightText text={"important to us!"}/>
                  </div>
                  <div className='text-center md:w-[50%] text-gray-600 mx-auto font-medium'>
                  Experience the transformative power of Spin, making language acquisition effortless. With comprehensive progress tracking, customizable schedules,
                   and much more, mastering multiple languages has never been easier.
                  </div>

                  <div className='md:flex flex-col hidden md:flex-row items-center gap-5 justify-center mt-5 p-5'>
                  <img className='object-cover -rotate-12 w-[20rem] h-[20rem] shadow-2xl' src={programming} alt="Programming"/>
                  <img className='object-cover rotate-12 w-[20rem] h-[20rem] shadow-2xl' src={competition} alt="Competition"/>
                  <img className='object-cover -rotate-12 w-[20rem] h-[20rem] shadow-2xl' src={progress} alt="Progress"/>
                  </div>

                  <div className='w-fit m-5'>
                    <Button active={true} linkTo={"/signup"}>
                      <div> Learn More</div>
                    </Button>
                  </div>
                </div>
            </div>
           </div>

    
            
      </div>

      {/* 3rd section */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-blue-950 text-white'>
           <Instructor/>     
          
          <h2 className='text-center text-4xl font-semibold mt-10'>Review from other learner</h2>
      </div>

      <Footer/>
    </div>
  );
};
