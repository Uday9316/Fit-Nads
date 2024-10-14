import React from 'react'
import img from "../assets/img-11.jpg"

const Contact = () => {
  return (
    <section id='contact' className=' w-full'>
      <div className='max-w-[1500px] m-auto grid grid-cols-2 items-center gap-10 py-0 max-xl:pt-[100px] max-lg:pt-[0px] max-lg:pb-[60px] max-md:pt-[0px]max-md:pb-[70px] max-lg:grid-cols-1 max-lg:gap-6 padding-x'>
        <div className=' h-[80%] max-lg:max-w-[50%] max-md:max-w-[70%] max-sm:max-w-[100%] max-md:h-[100%]'>
          <img src={img} alt="ContactImg" className=' object-cover w-full h-full'/>
        </div>

        <div className=' px-5 max-lg:px-0'>
          <p className='w-fit text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] '>CONTACT</p>

        <div className='text-5xl font-semibold leading-[70px] mt-5 mb-20 max-xl:leading-[50px] max-xl:mb-10 max-sm:text-3xl'>
          <h1>Discord</h1>
          <h1> @sergen.13 & @uday_04 !</h1>
        </div>

    
        </div>
      </div>
    </section>
  )
}

export default Contact