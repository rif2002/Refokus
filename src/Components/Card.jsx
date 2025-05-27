import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width, start,para}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:bg-violet-600 ${width} min-h-[20rem] flex flex-col justify-between` }>
        <div className=' w-full'>
        <div className=' w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <IoIosArrowRoundForward />
        </div>
        <h1 className='text-2xl font-medium mt-2'>Who we are</h1>
        </div>

        <div className='down w-full '>
            {
                start===true && (
                    <>
                     <h1 className=" text-3xl font-semibold tracking-tight leading-none">Start a Project </h1>
                     <button className="rounded-full py-2 px-5 mt-5 text-xs border border-zinc-50">Contact Us</button>

                    </>
                ) 
            }
            {
                para===true && (
                    <>
                            <p className="text-xs text-zinc-500 font-light">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </>
                )
                     
            }
       
        
        </div>
    </div>
  )
}

export default Card
