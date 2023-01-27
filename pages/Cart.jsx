import Image from 'next/image'
import React from 'react'

function Cart() {
  return (
    <div className='xs:flex-col md:flex
    justify-between'>
       <div className='w-2/3'>
       <table className='m-auto hover:table-fixed
       table-auto' 
       
       >
            <tr className=''>
                <th className='font-bold text-lg text-black capitalize'>product</th>
                <th className='font-bold text-lg text-black capitalize'
                >name</th>
                <th
                className='font-bold text-lg text-black capitalize'>extra</th>
                <th className='font-bold text-lg text-black capitalize'>price</th>
                <th className='font-bold text-lg text-black capitalize'>quantity</th>
                <th className='font-bold text-lg text-black capitalize'>total</th>
            </tr>
            <tr className=''>
                <td className='border-spacing-3'>
                    <Image 
                    src="https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285__340.png"
                    alt='pizza'
                    width={"80px"}
                    height={"80px"}
                    />
                </td>
                <td className='text-red-400 uppercase font-semibold border-spacing-3 '>
                    coralzo
                </td>
                <td className='border-spacing-12 m-3 border-4 w-12'>
                    Double ingredient, spicy sauce
                </td>
                <td className='border-spacing-3'>
                    $19.90
                </td>
                <td className='border-spacing-3'>
                    2
                </td>
                <td className='font-bold text-black
                border-spacing-3'>
                    $39.80
                </td>
            </tr>
        </table>
       </div>
       <div
       className='w-1/3 '

       ></div>
    </div>
  )
}

export default Cart