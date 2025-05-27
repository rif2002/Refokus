import React from 'react'
import Button from './Button'

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-12 text-white px-4 md:px-20 lg:px-28">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between   lg:gap-4"
      >
        {/* Title */}
        <h1 className="text-4xl capitalize font-normal w-full md:w-auto md:text-6xl">
          {val.title}
        </h1>

        {/* Details */}
        <div className="w-full md:w-2/4 lg:w-1/3">
          <p className="mb-6 text-base w-full">{val.description}</p>

          <div className="flex gap-4 flex-col sm:flex-row sm:items-center md:flex-col md:items-start w-full">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
