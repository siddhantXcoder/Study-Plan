import React from 'react';
import { Button } from './Button';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { HighlightText } from './HighlightText';

export const CodeDiv = ({ heading, subheading, btn1, btn2, position, codeColor, codeblock, backgroundGradient }) => {
  return (
    <div className={`flex ${position} my-20 justify-center  flex-col lg:flex-row lg:gap-10 gap-10 font-inter`}>
      {/* Section 1 */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {heading}
        <div className='text-[#9BA2A8] text-base font-bold lg:w-3/4'>
          {subheading}
        </div>

        {/* Button Group */}
        <div className='flex flex-row lg:gap-7 gap-7'>
          <Button active={btn1.active} linkTo={btn1.linkTo}>
            <div className="flex items-center gap-2">
              {btn1.btnText}
              <FaArrowRight />
            </div>
          </Button>

          <Button active={btn2.active} linkTo={btn2.linkTo}>
            {btn2.btnText}
          </Button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-auto code-border flex flex-row lg:flex-row lg:py-3 text-sm leading-6 relative w-11/12 lg:w-[470px] ">
      <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
        <div className="text-center flex flex-col w-1/12 select-none text-richblack-400 font-bold">
          {Array.from({ length: 11 }, (_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>

        <div className={`w-11/12 flex flex-col gap-2 font-bold font-inter ${codeColor} pr-2`}>
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};
