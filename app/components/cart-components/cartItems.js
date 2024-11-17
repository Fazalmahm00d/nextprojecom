"use client"

import { dataAction } from "@/app/ReduxStore/dataCart";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CartItems(){
    const dispatch=useDispatch();
    const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const isEmail=useSelector((state)=>state.authReducer.isEmail)
    console.log(cartItems,"cart items");
    async function getCartData() {
        try {
            const response = await axios.get(`https://fir-db-7355f-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart.json`)
            const data=response.data
            console.log(data);
            const arr=[]
            for(let key in data){
                arr.push({ id:key ,...data[key]});
            }
            console.log(arr,"data arrray")
            dispatch(dataAction.setCartArr(arr));
        }
        catch (error) {
            console.log(error)
        }
      }
    const [expenses,setExpenses]=useState()
    async function updateTotal(){
        const totalExpenses= await cartItems.reduce(
                (sum,ele) => Number(sum)+Number(ele.price)
                ,0);
        setExpenses(totalExpenses)
    }
    updateTotal();
    useEffect(
        ()=>{
            getCartData()    
            },[]
    )   
    return(
        <div className="p-20 flex gap-8">
            <div className="w-2/3">
                <div className="bg-[#F9F1E7] flex justify-around items-center h-[10vh]">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
                <div className="h-[60vh]">
                    {
                        cartItems.map((items)=>{
                            return <div className="flex justify-between text-base mt-3">
                                        <div className="flex">
                                        <img src={items.img} className="h-16 w-16 rounded-lg"></img>
                                        <h3 className="font-bold text-xl">{items.name}</h3> 
                                        </div>
                                        <p className="text-[#B88E2F]">${items.price}</p>
                                        <h3 className="font-bold text-xl">0</h3> 
                                        <p className="text-[#B88E2F]">${items.price}</p>
                                    </div>
                            })
                    }

                </div>
            </div>
            <div className="w-1/3 bg-[#F9F1E7] px-10 py-6 h-[40vh]">
                <h2 className="font-bold text-3xl text-center">Cart Totals</h2>
                 <div className=" flex flex-col items-center justify-center h-full px-10">
                 <div className="flex justify-between w-full">
                    <p className="font-bold">SubTotals</p>
                    <p className="text-xl text-[#9F9F9F]">Rs.{expenses}</p>
                 </div>
                 <div className="flex justify-between w-full mt-6">
                    <p className="font-bold">Total</p>
                    <p className="text-[#B88E2F] text-2xl">Rs.{expenses}</p>
                 </div>
                 <div className="mt-6">
                    <Link href='/checkout'><button className="px-8 py-4 border-2 border-black border-solid rounded-xl">Check Out</button></Link>
                 </div>
                 </div>
            </div>
        </div>
    )
}

export default CartItems;