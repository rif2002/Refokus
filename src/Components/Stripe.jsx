import React from 'react'

function Stripe({val}) {
  return (
    <div>
        <div className="w[16.66%] px-2 py-2  md:px-8 md:py-6   border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between ">
        <img className='w-[80%] '  src={val.url} alt="" />
        <span className="font-semibold text-sm md:text-lg">{val.number}</span>
        </div>
    </div>
  )
}

export default Stripe
