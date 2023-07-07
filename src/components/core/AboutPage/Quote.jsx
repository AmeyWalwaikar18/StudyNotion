import React from 'react'
import "../../../App.css"

const Quote = () => {
  return (
    <div className='text-[#AFB2BF] w-[90%] lg:w-[80%] font-semibold tracking-tight text-[24px] lg:text-[32px] lg:leading-[52px] text-center mx-auto'>
      <q>We are passionate about revolutionizing the way we learn. Our innovative platform
      <span className='hello1'> combines technology</span>
      <span className='text-[#de3838]'>
        {" "}
        expertise
      </span>
      , and community to create an 
      <span  className='text-[#de3838]'>
      {" "}
        unparalleled educational experience.
      </span></q>
    </div>
  )
}

export default Quote
