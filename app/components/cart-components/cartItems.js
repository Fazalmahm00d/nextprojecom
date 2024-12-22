"use client"

import { getCartByIdData } from "@/app/lib/api";
import { dataAction } from "@/app/ReduxStore/dataCart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CartItems(){
    const dispatch=useDispatch();
    const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const isEmail=useSelector((state)=>state.authReducer.isEmail);
    // const[isLoading,setIsLoading]=useState(true);
    const [totalExpenses, setTotalExpenses] = useState(0);
    // console.log(cartItems,"cart items");
    // async function getCartData() {
    //     try {
    //         const response = await axios.get(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart.json`)
    //         const data=response.data
    //         // console.log(data);
    //         const arr=[]
    //         for(let key in data){
    //             arr.push({ id:key ,...data[key]});
    //         }
        
    //         dispatch(dataAction.setCartArr(arr));
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //     finally{
    //         setIsLoading(false)
    //     }
    //   }
    // const [expenses,setExpenses]=useState()
    // async function updateTotal(){
    //     const totalExpenses= await cartItems.reduce(
    //             (sum,ele) => Number(sum)+Number(ele.price)
    //             ,0);
    //     setExpenses(totalExpenses)
    // }
    // updateTotal();
    // async function getCartsData(){
    //     try{
    //         // const response=await fetch(`http://localhost:8000/cart/${isEmail}`, {
    //         //     method: 'GET',
    //         //     headers: {
    //         //         'content-type': 'application/json',
    //         //     },
    //         // });
    //         // const res=await response.json();

    //         const response=await axios.post(`http://localhost:8000/cart/${isEmail}`)
    //         console.log(response.data.items,"setting cart items in cart page")
    //         dispatch(dataAction.setCartArr(response.data.items));
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //     finally{
    //         // setIsLoading(false)
    //     }
    // }
    const {data,isLoading,isError,error}=useQuery({
        queryKey:["cartdata"],
        queryFn:()=>getCartByIdData(isEmail),
        enabled: !!isEmail,
    })
    
    // useEffect(() => {
    //     // setIsLoading(false)
    //     const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    //     setTotalExpenses(total);
    // }, [cartItems]);
    console.log("from items cart data",data)
    return(

        <div className="p-6 lg:px-20 flex flex-col lg:flex-row ">
            <div className="w-full lg:w-2/3">
                <div className="bg-[#F9F1E7]  grid grid-cols-4 items-center gap-6 lg:mr-6  h-[10vh] lg:text-l font-bold">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
                <div className="h-fit pb-10 lg:h-[60vh]">
                    {   
                     isLoading ?   [1,2,3].map((item)=>{
                            return <div key={item} className="grid grid-cols-4 items-center  text-sm lg:text-base mt-3">
                                        <div className="flex gap-4 items-center">
                                            <div  className="h-8 w-8 lg:h-16 lg:w-16 rounded-lg bg-gray-200"></div>
                                            <h3 className="font-bold text-xl w-16 bg-gray-200"></h3> 
                                        </div>
                                        <div className="text-[#B88E2F] w-10 h-4 bg-gray-200"></div>
                                        <div className="font-bold text-xl h-16 w-6 bg-gray-200"></div> 
                                        <div className="text-[#B88E2F]  w-10 h-4 bg-gray-200"></div>
                                    </div>
                            })
                    
                    :
                     data?.items.map((items)=>{
                            return <div key={items._id} className="grid grid-cols-4 gap-10 items-center text-sm   lg:text-base mt-3">
                                        <div className="flex gap-2 lg:gap-4 items-center">
                                        <img src={items.img} className="h-8 w-8 lg:h-16 lg:w-16 rounded-lg"></img>
                                        <h3 className="font-bold text-sm lg:text-xl">{items.name}</h3> 
                                        </div>
                                        <p className="text-[#B88E2F]">${items.price}</p>
                                        <h3 className="font-bold text-sm lg:text-xl">{items.quantity}</h3> 
                                        <p className="text-[#B88E2F]">${(items.price*items.quantity)}</p>
                                    </div>
                            })
                    }

                </div>
            </div>
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