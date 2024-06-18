import React, { useState } from 'react'
import { data } from '../../../data/data';
import { HighlightText } from './HighlightText';
import {Card} from "../HomePageComponent/Card";

const tabs = [
  "Free",
  "Beginner",
  "Most popular",
  "Essentials",
  "Go through"
]
export const MidSection = () => {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [courses, setCourses] = useState(data[0].courses);
    const [currentCard, setCurrentCard] = useState(data[0].courses[0].heading);

    const  handleClick = (tab) => {
        setCurrentTab(tab);
        const res = data.filter((item) => item.tag === tab);
        setCourses(res[0].courses);
        setCurrentCard(res[0].courses[0].heading);
    }
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-4xl text-center'>
        Unlock Your <HighlightText text={"Potential"}/>
      </div>
      <p className='text-center text-gray-500 text-lg mt-2'>
        Learn to Build You Want...
      </p>

      <div className='flex w- flex-row items-center  gap-2 font-inter bg-[#183548] rounded-full p-1 justify-center mt-6'>
        {
          tabs.map((ele, index) => {
            return(
              <div className={`md:text-[16px] text-[10px] font-inter rounded-full text-white ${currentTab === ele ? " bg-[#012D4D] text-white hover:text-white" : "" } transition-all duration-200
              cursor-pointer hover:font-semibold hover:text-[#618098] px-7 py-3`}
              key={index}
              onClick={() => handleClick(ele)}>
                {ele}
              </div>
            )
          })
        }
      </div>
      
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Cards Group */}
      <div className="lg:absolute gap-10 mt-2 justify-center lg:gap-0 flex lg:justify-around flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <Card
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>



    </div>
  )
}
