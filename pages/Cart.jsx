import Image from 'next/image'
import React from 'react'
import styles from "../styles/Cart.module.css"

function Cart() {
  return (
    <div className='xs:flex-col md:flex
    justify-between sm:space-x-4'>
       <div className='md:w-2/3 w-full'>
       <table className='table-auto shadow-md m-auto rounded border-separate border-spacing-y-4 w-3/4 md:flex md:border-red-400 border-2 mt-4 flex-col'>
            <tr className='w-full hidden md:block'>
                <th className='font-bold text-lg capitalize text-red-400
                text-center '>product</th>
                <th className='font-bold text-lg capitalize text-center text-red-400'
                >name</th>
                <th
                className=' font-bold text-lg capitalize text-red-400 text-center'>extra</th>
                <th className=' text-center font-bold text-lg capitalize text-red-400'>price</th>
                <th className=' text-center font-bold text-lg capitalize text-red-400'>quantity</th>
                <th className=' text-center font-bold text-lg capitalize text-red-400'>total</th>
            </tr>
            <tr className='sm:bg-orange-400 duration-300 my-4 hover:bg-orange-200 myRow'>
                <td className='px-1 text-center'>
                    <Image 
                    src="https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285__340.png"
                    alt='pizza'
                    width={"80px"}
                    height={"50px"}
                    />
                </td>
                <td className='px-1 text-center text-red-600 uppercase font-semibold'>
                    coralzo
                </td>
                <td className='px-2 text-left ' style={{
                    width: "200px"
                }}>
                    Double ingredient, spicy sauce
                </td>
                <td className='px-1 text-center price'>
                    $19.90
                </td>
                <td className='px-1 text-center quantity'>
                    2
                </td>
                <td className='px-1 text-center total '>
                    $39.80
                </td>
            </tr>
            <tr className='border-separate border-spacing-4 sm:bg-orange-400 duration-300 hover:bg-orange-200 myRow '>
                <td className='px-1 text-center'>
                    <Image 
                    src="https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285__340.png"
                    alt='pizza'
                    width={"80px"}
                    height={"50px"}
                    className="pic"
                    />
                </td>
                <td className='px-1 text-center text-red-600 uppercase font-semibold'>
                    coralzo
                </td>
                <td className='px-2 text-left ' style={{
                    width: "200px"
                }}>
                    Double ingredient, spicy sauce
                </td>
                <td className='px-1 text-center price'>
                    $19.90
                </td>
                <td className='px-1 text-center quantity'>
                    2
                </td>
                <td className='px-1 text-center total'>
                    $39.80
                </td>
            </tr>
            
        </table>
       </div>
       <div
       className='md:w-1/3 
       flex justify-center '>
        <div className="bg-gray-900 flex-col space-y-4 justify-center items-center
        p-10 w-max mt-4  h-max  ">
            <h2 className="text-white
            uppercase font-bold text-2xl">
                cart total
            </h2>
            <div className='text-white flex-col space-y-1'>
                <p>
                    <span className='text-white capitalize  font-semibold'>Subtotal:</span> $79.60
                </p>
                <p>
                    <span className='text-white capitalize font-semibold'>discount:</span> $0.00
                </p>
                <p>
                    <span className='text-white capitalize font-semibold'>total:</span> $79.60
                </p>
            </div>

            <button className='bg-white flex items-center justify-center text-red-600 uppercase font-semibold border-0 text-6 px-8 py-2 '>
checkout now!
            </button>

        </div>

       </div>
    </div>
  )
}

export default Cart