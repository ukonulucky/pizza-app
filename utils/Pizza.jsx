import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Pizza({pizza}) {
  console.log("best pizza "+ pizza)
  return (
    <div className='flex-col 
    items-center w-52 mt-4' key={pizza._id}>
       <Link href={`api/product/${pizza._id}`} >
       <Image
        src={pizza.img}
        width="350px"
        height={"300px"}
        alt="pizza image"
        className="cursor-pointer"
        />
     
       <h3 className='uppercase text-red-500 font-bold flex justify-center mb-4'>Flurida Di zucca</h3>
       <span className='flex items-center justify-center font-bold'>${pizza.prices[0]}</span>
       <span className='flex items-center font-light'>
       {pizza.desc}
       </span>
       </Link>
    </div> 
  )
}

export default Pizza