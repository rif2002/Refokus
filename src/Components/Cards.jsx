import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className=' w-full px-4 md:px-12 lg:px-50 '>
        <div className='max-w-screen-xl mx-auto flex py-10 md:py-20 gap-3'>
           <Card width={"basis-1/3" } start={false} para={true} />
           <Card  width={"basis-2/3"} start={true} para={false} />
        </div>
    </div>
   
  )
}

export default Cards
