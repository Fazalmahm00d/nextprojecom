"use client"

import { getCartByIdData } from "@/app/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";

function CartItems(){
    const isEmail=useSelector((state)=>state.authReducer.isEmail);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const {data,isLoading,isError,error}=useQuery({
        queryKey:["cartdata"],
        queryFn:()=>getCartByIdData(isEmail),
        enabled: !!isEmail,
    })
    
    useEffect(() => {
        if(data){
        const total = data?.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalExpenses(total);
        }
    }, [data]);
    console.log("from items cart data",data)
    return(

        <div className="p-6 lg:px-20 flex flex-col lg:flex-row gap-6">
  {/* Cart Items Section */}
  <div className="w-full lg:w-2/3">
    {/* Table Header for Large Screens */}
    <div className="hidden sm:grid bg-[#F9F1E7] grid-cols-4 items-center gap-6 lg:mr-6 h-[10vh] text-lg font-bold">
      <div>Product</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Subtotal</div>
    </div>

    <div className="h-fit pb-10 lg:h-[60vh] overflow-auto">
      {isLoading
        ? [1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex lg:grid lg:grid-cols-4 items-center bg-white p-4 rounded-md shadow-md mb-3 gap-4 text-sm lg:text-base"
            >
              {/* Product Placeholder */}
              <div className="flex gap-4 items-center w-full lg:w-auto">
                <div className="h-16 w-16 lg:h-24 lg:w-24 rounded-lg bg-gray-200"></div>
                <div className="font-bold text-sm w-20 bg-gray-200"></div>
              </div>

              {/* Price Placeholder */}
              <div className="text-[#B88E2F] w-16 h-4 bg-gray-200"></div>

              {/* Quantity Placeholder */}
              <div className="font-bold h-4 w-10 bg-gray-200"></div>

              {/* Subtotal Placeholder */}
              <div className="text-[#B88E2F] w-16 h-4 bg-gray-200"></div>
            </div>
          ))
        : data?.items.map((item) => (
            <div
              key={item._id}
              className="flex justify-around items-center  sm:grid grid-cols-4 items-center bg-white p-4 rounded-md shadow-md mb-3 gap-4 text-sm lg:text-base"
            >
              {/* Product Information */}
              <div className="flex gap-4 items-center justify-around sm:justify-start w-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-16 w-16 lg:h-24 lg:w-24 rounded-lg"
                />
                
              </div>
              <h3 className="hidden sm:block font-bold text-sm lg:text-lg">{item.name}</h3>
              {/* Price */}

              {/* Quantity */}
              <h3 className="hidden sm:block font-bold"><span className="sm:hidden">Quantity:</span>{item.quantity}</h3>

                  {/* Subtotal */}
              <p className="hidden sm:block text-[#B88E2F]">${(item.price * item.quantity).toFixed(2)}</p>
              <div className="sm:hidden flex flex-col ">
                <h3 className="sm:hidden font-bold text-sm lg:text-lg">{item.name}</h3>
                {/* Price */}

                  {/* Quantity */}
                  <h3 className="sm:hidden font-bold"><span className="sm:hidden">Quantity:</span>{item.quantity}</h3>

                  {/* Subtotal */}
                  <p className="sm:hidden text-[#B88E2F]">${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              
            </div>
          ))}
    </div>
  </div>

  {/* Cart Totals Section */}
  <div className="w-full lg:w-1/3 bg-[#F9F1E7] px-6 py-2 sm:px-10 sm:py-6 h-[40vh]">
                <h2 className="font-bold text-xl lg:text-3xl text-center">Cart Totals</h2>
                 <div className=" flex flex-col items-center justify-center h-full px-6 sm:px-10">
                 <div className="flex justify-between w-full">
                    <p className="font-bold">SubTotals</p>
                    <p className="text-sm sm:text-xl text-[#9F9F9F]">Rs.{totalExpenses}</p>
                 </div>
                 <div className="flex justify-between w-full  mt-3 sm:mt-6">
                    <p className="font-bold">Total</p>
                    <p className="text-[#B88E2F] text-base sm:text-2xl">Rs.{totalExpenses}</p>
                 </div>
                 <div className="mt-3 sm:mt-6">
                    <Link href='/checkout'><button className="px-8 py-4 border-2 border-black border-solid rounded-xl">Check Out</button></Link>
                 </div>
                 </div>
            </div>
</div>

    )
}

export default CartItems;