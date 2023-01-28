import Image from "next/image";
import React, { useState } from "react";

function Product() {
  const [amountIndex, setAmountIndex] = useState(0);
  const pizza = [
    {
      id: 1,
      type: "Campagola",
      amount: [23.9, 28.01, 33.34],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error repellendus veritatis! Autem excepturi maxime hic facere commodi sed quos beatae? Dolore atque sed excepturi dolorum totam, aspernatur sequi aliquam?",
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285__340.png",
    },
  ];
  return (
    <div className="flex-col justify-around w-full">
      {pizza.map((i) => (
        <div key={i.id} className=" xs:flex-col sm:flex w-full mt-12">
          <div
            className="flex items-center justify-center  sm:w-1/2 xs:w-full
           "
          >
            <div className="w-full  h-72 relative">
              <Image
                src={i.imgUrl}
                alt="pizza"
                layout="fill"
                objectFit="stretch"
              />
            </div>
          </div>
          <div className="  sm:w-1/2 xs:w-full  flex-col ">
            <h2 className="text-black font-bold uppercase text-4xl xs:p-4 sm:p-0">
              {i.type}
            </h2>

            <span className="text-red-500 underline underline-red-300 text-lg font-bold ">
              $ {i.amount[amountIndex]}
            </span>
            <p className="text-black-300">{i.description}</p>

            <h3 className="text-black-400 font-bold text-lg">
              Choose the size
            </h3>

            <div
              className="flex justify-between items-start w-1/2 mt-8
                "
            >
              <div
                className="relative w-16 h-16 cursor-pointer"
                onClick={() => {
                  setAmountIndex(0);
                }}
              >
                <Image
                  src={i.imgUrl}
                  layout="fill"
                  alt="pizza"
                  objectFit="stretch"
                />
                <span className="bg-green-800  text-white rounded-sm p-1 flex items-center justify-center absolute -top-2 -right-4">
                  small
                </span>
              </div>

              <div
                className="relative  h-20 w-20 cursor-pointer"
                onClick={() => {
                  setAmountIndex(1);
                }}
              >
                <Image
                  src={i.imgUrl}
                  layout="fill"
                  alt="pizza"
                  objectFit="stretch"
                />
                <span className="bg-green-800  text-white rounded-sm p-1 flex items-center justify-center absolute -top-1 -right-7">
                  Medium
                </span>
              </div>

              <div
                className="relative w-24 h-24  cursor-pointer"
                onClick={() => {
                  setAmountIndex(2);
                }}
              >
                <Image
                  src={i.imgUrl}
                  layout="fill"
                  alt="pizza"
                  objectFit="stretch"
                />
                <span className="bg-green-800  text-white rounded-sm p-1 flex items-center justify-center absolute -top-1 -right-1">
                  Large
                </span>
              </div>
            </div>
            <div className="flex-col mt-4">
              <h2 className="font-bold text-xl text-black">
                Choose additional incredients
              </h2>
              <div className="flex space-x-8 mt-4">
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    name="ingredients"
                    id="ingredients"
                  />
                  <label htmlFor="ingredients">Double Ingredients</label>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    name="extra"
                    id="extra"
                  />
                  <label htmlFor="extra" className="capitalize font-light">
                    extra cheese
                  </label>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    name="spicy"
                    id="spicy"
                  />
                  <label htmlFor="spicy" className="capitalize font-light">
                    spicy sauce
                  </label>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    name="gallic"
                    id="gallic"
                  />
                  <label htmlFor="gallic" className="capitalize font-light">
                    gallic sauce
                  </label>
                </div>
              </div>
            </div>
            <div className="flex mt-4 space-x-2 items-center ">
                <input
                className="w-16 border-solid border-2 border-black p-2 h-10 rounded"
                type="number"
                defaultValue={1} />
                <button className="bg-red-500 rounded-md capitalize p-2 border-0 text-white">
                    add cart
                </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
