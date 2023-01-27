import Image from 'next/image'
import React from 'react'

function Pizza() {
  return (
    <div className='flex-col 
    items-center w-52 mt-4'>
        <Image
        src={"https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285__340.png"}
        width="350px"
        height={"300px"}
        alt="pizza image"
        />
       <h3 className='uppercase text-red-500 font-bold flex justify-center mb-4'>Flurida Di zucca</h3>
       <span className='flex items-center justify-center font-bold'>$199.90</span>
       <span className='flex items-center font-light'>
        Lorem ipsum dolor sit amet consectetur adipisicing.
       </span>

    </div> 
  )
}

export default Pizza