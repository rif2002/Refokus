import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl px-6  py-10 flex gap:10 md:gap-32 sm:px-10 md:px-20 py-10 flex flex-col gap-10 sm:flex-col md:flex-row md:gap-32 ' >
        <div className='basis-1/2 text-[4rem] md:text-[4rem]  lg:text-[7rem]   font-semibold leading-none tracking-tight'>
        <h1>refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4 '>
        <div className='basis-1/3 text-xs md:text-sm'>
            <h4 className='mb-4 text-zinc-500 capitalize'>Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
        </div>

        <div className='basis-1/3 text-xs md:text-sm'>
            <h4 className='mb-4 text-zinc-500 capitalize'>Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a  key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
        </div>

        <div className="basis-1/2 flex flex-col items-end text-xs md:text-sm">
            <p className="text-right">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
