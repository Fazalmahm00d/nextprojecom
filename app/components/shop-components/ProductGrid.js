"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { dataAction } from "@/app/ReduxStore/dataCart";
import SvgComponent from "../home-components/Svgcomponent";
import { toast } from "react-toastify";

function ProductGrid(){
    const dispatch=useDispatch();
    const isEmail=useSelector((state)=>state.authReducer.isEmail)
    const products=[
        {
            id:1,
            img:"/assets/Images (3).png",
            name:"Syltherine",
            desc:"Stylish cafe chair",
            price:25000
        },
        {   
            id:2,
            img:"/assets/Images.png",
            name:"Leviosa",
            desc:"Stylish cafe chair",
            price:35000
        },
        {
            id:3,
            img:"/assets/image 3.png",
            name:"Loloto",
            desc:"Luxury Sofa Set",
            price:25000
        },
        {
            id:4,
            img:"/assets/image 4.png",
            name:"Respira",
            desc:"Outdoor bar table and stool",
            price:70000
        },
        {
            id:5,
            img:"/assets/Images (1).png",
            name:"Grifo",
            desc:"Night lamp",
            price:15000
        },
        {
            id:6,
            img:"/assets/image 6 (1).png",
            name:"Muggo",
            desc:"Small Mug",
            price:1500
        },
        {
            id:7,
            img:"/assets/Images (2).png",
            name:"Pingky",
            desc:"Cute sofa set",
            price:70000
        },
        {
            id:8,
            img:"/assets/image 8 (1).png",
            name:"Binuyo",
            desc:"Minimalist brown sofa",
            price:250000
        },
        {
            id:9,
            img:"/assets/Images (3).png",
            name:"Syltherine 2",
            desc:"Stylish cafe chair",
            price:25000
        },
        {
            id:10,
            img:"/assets/Images.png",
            name:"Leviosa 2",
            desc:"Stylish cafe chair",
            price:35000
        },
        {   
            id:11,
            img:"/assets/image 3.png",
            name:"Loloto 2",
            desc:"Luxury Sofa Set",
            price:25000
        },
        {
            id:12,
            img:"/assets/image 4.png",
            name:"Respira 2",
            desc:"Outdoor bar table and stool",
            price:70000
        },
        {
            id:13,
            img:"/assets/Images (1).png",
            name:"Grifo 2",
            desc:"Night lamp",
            price:15000
        },
        {
            id:14,
            img:"/assets/image 6 (1).png",
            name:"Muggo 2",
            desc:"Small Mug",
            price:1500
        },
        {
            id:15,
            img:"/assets/Images (2).png",
            name:"Pingky 2",
            desc:"Cute sofa set",
            price:70000
        },
        {
            id:16,
            img:"/assets/image 8 (1).png",
            name:"Binuyo 2",
            desc:"Minimalist brown sofa",
            price:250000
        },
    ]
    const [gridProducts,setGridProducts]=useState(products)
    async function getCartData() {
        try {
            const response = await axios.get(`https://fir-db-7355f-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart.json`)
            const data=response.data
            console.log(data);
            const arr=[]
            for(let key in data){
                arr.push({ id:key ,...data[key]});
            }
            console.log(arr)
            dispatch(dataAction.setCartArr(arr));
        }
        catch (error) {
            console.log(error)
        }
      }
    async function sendToFb(img,name,desc,price){
        const newCartItem={
            img,
            name,
            desc,
            price
        }
        try{
            const response= await axios.post(`https://fir-db-7355f-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart.json`,newCartItem);
            toast.success("Product added to cart")
            getCartData();
        }
        catch(error)
        {
            console.error("err:",error)
        }
    }   
    return(
        <div className="py-10 px-20 flex flex-col items-center">
            <div className="grid grid-cols-4 gap-10 w-full mt-6">
                {   
                    
                    gridProducts.map((items)=>{
                        const productId=items.id;
                        const data={
                            name:items.name,
                            desc:items.desc,
                            img:items.img,
                        }
                        return  <Link href={`products/${productId}`}>
                                           <div className="group relative cursor-pointer h-[28rem]">
                                    <div className="h-[70%]">
                                        <img className="w-full h-full" src={items.img}></img>
                                    </div> 
                                    <div className="h-[30%] bg-[#F4F5F7] p-4">
                                        <div className="font-bold text-xl" >{items.name}</div>
                                        <p className="text-[#898989] text-sm font-light mt-1 tracking-wide">{items.desc}</p>
                                        <p className="font-bold mt-2 text-xl tracking-wide">Rs.{items.price}</p>
                                    </div> 
                                    <div className="bg-opacity-0 absolute z-30 top-0 left-0 hidden group-hover:flex justify-center items-center bg-black group-hover:inset-0 group-hover:bg-opacity-60 ">
                                        <div className="absolute flex flex-col justify-center items-center">
                                        <button onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            isEmail ? sendToFb(items.img,items.name,items.desc,items.price):toast.error("Log In to access cart")
                                        }} className="bg-white text-[#B88E2F] font-bold text-l px-10 py-2 tracking-wide">Add to cart</button>
                                        <div className="flex gap-3 w-full mt-4 justify-between items-center text-white font-bold text-base">
                                            <SvgComponent name="Share" svg={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46666C5.97333 8.31333 6 8.15999 6 7.99999C6 7.83999 5.97333 7.68666 5.94 7.53333L10.64 4.79333C11 5.12666 11.4733 5.33333 12 5.33333C13.1067 5.33333 14 4.43999 14 3.33333C14 2.22666 13.1067 1.33333 12 1.33333C10.8933 1.33333 10 2.22666 10 3.33333C10 3.49333 10.0267 3.64666 10.06 3.79999L5.36 6.53999C5 6.20666 4.52667 5.99999 4 5.99999C2.89333 5.99999 2 6.89333 2 7.99999C2 9.10666 2.89333 9.99999 4 9.99999C4.52667 9.99999 5 9.79333 5.36 9.45999L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white"/>
                                            </svg>}/>
                                            <SvgComponent name="Compare" svg={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0799 7L11.0799 8L14.5199 4.55L10.9999 1L9.99992 2L11.7999 3.8H1.99992V5.2H11.8199L10.0799 7ZM5.85992 9L4.85992 8L1.41992 11.5L4.90992 15L5.90992 14L4.09992 12.2H13.9999V10.8H4.09992L5.85992 9Z" fill="white"/>
                                            </svg>}/>
                                            <SvgComponent name="Like" svg={<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99949 13.0361C-5.33358 5.66667 3.99975 -2.33333 7.99949 2.72538C11.9998 -2.33333 21.3331 5.66667 7.99949 13.0361Z" stroke="white" stroke-width="1.8"/>
                                                </svg>}/>
                                        </div>
                                        </div>
                                    </div>
                                    

                                </div>
                                </Link>     
                    })
                }
            </div>
            <div className="mt-16 flex gap-6">
                <button className="font-bold bg-[#F9F1E7] h-16 w-16 rounded-xl p-2 hover:bg-[#B88E2F] hover:text-white">1</button>
                <button className="font-bold bg-[#F9F1E7] h-16 w-16 rounded-xl p-2 hover:bg-[#B88E2F] hover:text-white">2</button>
                <button className="font-bold bg-[#F9F1E7] h-16 w-16 rounded-xl p-2 hover:bg-[#B88E2F] hover:text-white">3</button>
                <button className="font-bold bg-[#F9F1E7] h-16  rounded-xl py-2 px-8  hover:bg-[#B88E2F] hover:text-white">Next</button>
            </div>
        </div>
    )
}

export default ProductGrid;