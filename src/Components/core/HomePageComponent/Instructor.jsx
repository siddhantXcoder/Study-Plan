import React from 'react'
import instructor from "../../../assets/instructor.gif"
import { HighlightText } from './HighlightText'
import { Button } from './Button'
import { FaArrowRight } from 'react-icons/fa'

export const Instructor = () => {
  return (
    <div className='mt-16 '>
      <div className='flex md:flex-row flex-col gap-10 items-center justify-center'>
          <div className='md:w-[40%] w-[50%]'>
              <img className=' rounded-2xl shadow-black shadow-lg' src={instructor}/>
          </div>

          <div className='md:w-[50%] flex md:gap-10 gap-5 flex-col'>
              <div className='text-4xl md:w-[30%] font-inter font-semibold'>
                  Become an <HighlightText text={"Intructor."}/>
              </div>

              <p className=" text-gray-500 font-inter w-[90%]">
                Instructor  is a role that allows you to share your knowledge and skills with others by teaching them about web development
                Join our community of passionate learners and teachers alike. As developers and become a part of the coding ecosystem that we have built here at CodeForces.
              </p>

             <div className='flex items-center justify-center'>
              <Button active={true} linkTo={"signup"}>
                Start learning today
                <FaArrowRight/>
              </Button>
             </div>
          </div>
      </div>
    </div>
  )
}
