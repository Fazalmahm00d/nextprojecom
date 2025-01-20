"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function CheckOutForm(){
    const isEmail=useSelector((state)=>state.authReducer.isEmail);
    // const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const [totalExpenses, setTotalExpenses] = useState(0);

    // async function getCartData() {
    //     try {
    //         const response = await axios.get(`https://nextecom-db-default-rtdb.firebaseio.com//nextprojecom/${isEmail}/cart.json`)
    //         const data=response.data
           
    //         const arr=[]
    //         for(let key in data){
    //             arr.push({ id:key ,...data[key]});
    //         }
            
    //         // const totalExpenses= await arr.reduce(
    //         //     (sum,ele) => Number(sum)+Number(ele.price)
    //         //     ,0);
    //         //     setExpenses(totalExpenses)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //     finally{
    //         setIsLoading(false)
    //     }
    //   }

     const {data:cartdata,isLoading,isError,error}=useQuery({
            queryKey:["cartdataheader"],
            queryFn:()=>getCartByIdData(isEmail),
            enabled: !!isEmail,
              
        })
      
    
    useEffect(() => {
        if(cartdata){
        const total = cartdata?.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalExpenses(total);
        }
    }, [cartdata]);
    return(
        <form className="flex flex-col w-full lg:flex-row">
        <div className="px-6 lg:px-20">
            <h3 className="font-semibold text-4xl mb-10">Billing details</h3>
            <div className="flex flex-col gap-6">
                <div className="flex gap-8 flex-col sm:flex-row justify-between">
                    <div className="flex flex-col gap-4">
                    <label className="font-medium" for="firstname">First Name</label>
                    <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="firstname" type="text" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-medium" for="lastname">Last Name</label>
                        <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="lastname" type="text"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="company">Company Name (Optional)</label>
                    <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="company" type="text" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="region">Country / Region</label>
                    <select className="border rounded-lg p-4 border-[#9F9F9F]" id="region">
                    <option value="india" selected="">India</option>
                    <option value="us">US</option>
                    <option value="uk">UK</option>
                </select>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="street">Street address</label>
                    <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="street" type="text" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="city">Town / City</label>
                    <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="city" type="text" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="province">Province</label>
                    <select className="border rounded-lg p-4 border-[#9F9F9F]" id="province">
                    <option value="india" selected="">India</option>
                    <option value="us">US</option>
                    <option value="uk">UK</option>
                    </select>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="zip">ZIP code</label>
                    <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="zip" type="text" />
                 </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="phone">Phone</label>
                    <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="phone" type="text" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium" for="email">Email address</label>
                    <input className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" placeholder={isEmail} value={isEmail || ""} id="email" type="text" />
                </div>
                <div className="flex flex-col gap-4 mt-6">
                    <input placeholder="Additional information" className="border focus:outline-none rounded-lg p-4 border-[#9F9F9F]" id="additional" type="text" />
                </div>
            </div>
        </div>
        <div className="px-10 mt-12">
            <div className="w-full flex flex-col gap-6 border-b-[#D9D9D9] border-b pb-10">
                <div className="text-2xl font-medium flex justify-between">
                    <p>Product</p>
                    <p>Subtotal</p>
                </div>
                <div className="max-h-[40vh] overflow-y-auto flex flex-col gap-6"></div>
                
                {
                    isLoading ?
                <div>
                    <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p className="font-light bg-gray-200 h-4 w-16 rounded-xl"></p>
                </div>
                <div className="flex justify-between">
                    <p>Total</p>
                    <p className="font-bold text-2xl text-[#B88E2F] bg-gray-200 h-8 w-32 rounded-xl"></p>
                </div></div>
                : <div>
                    <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p className="font-light">Rs.{totalExpenses}</p>
                </div>
                <div className="flex justify-between">
                    <p>Total</p>
                    <p className="font-bold text-2xl text-[#B88E2F]">Rs. {totalExpenses}</p>
                </div> </div>
                }
            </div>
            <div className="text-[#9F9F9F] py-4">
                <div className="group mb-3">
                    <label className="inline-flex cursor-pointer items-center gap-3 mb-3 duration-300 " for="bank">
                        <input className="peer " type="radio" name="payment" id="bank"/>
                        <span className="w-3 h-3 border border-[#9F9F9F] rounded-full "></span>Direct Bank Transfer</label>
                        <p className="hidden">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
                <div className="group">
                    <label className="inline-flex cursor-pointer items-center gap-3 mb-3 duration-300 " for="cash">
                        <input className="peer " type="radio" name="payment" id="cash"/>
                        <span className="w-3 h-3 border border-[#9F9F9F] rounded-full "></span>Cash On Delivery</label>
                        <p className="hidden">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
            </div>
            <p className="mb-8">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
            <div className="w-full text-center">
                <button className="text-xl border border-black hover:bg-black hover:text-white duration-300 rounded-lg py-3 w-1/2 lg:px-20" >Place order</button>
            </div>
        </div>
    </form>
    )
}

export default CheckOutForm;