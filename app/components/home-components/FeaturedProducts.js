"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import SvgComponent from "./Svgcomponent";
import Button from "../reused-components/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { dataAction } from "@/app/ReduxStore/dataCart";
import { useMutation } from "@tanstack/react-query";
import { sendToMongoDB, sendToWish } from "@/app/lib/api";
import { queryClient } from "../redux-components/reduxProvider";
import FeaturedCompo from "./FeaturedCompo";

function FeaturedProducts(){
    const dispatch=useDispatch();
    const router =useRouter();
    // const[isLoading,setIsLoading]=useState();
    const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const isEmail=useSelector((state)=>state.authReducer.isEmail)
    const products=[
        {   
            id:'1',
            img:"/assets/Images (3).png",
            name:"Syltherine",
            desc:"Stylish cafe chair",
            price:25000
        },
        {   
            id:'2',
            img:"/assets/Images.png",
            name:"Leviosa",
            desc:"Stylish cafe chair",
            price:35000
        },
        {
            id:'3',
            img:"/assets/image 3.png",
            name:"Loloto",
            desc:"Luxury Sofa Set",
            price:25000
        },
        {
            id:'4',
            img:"/assets/image 4.png",
            name:"Respira",
            desc:"Outdoor bar table and stool",
            price:70000
        },
        {
            id:'5',
            img:"/assets/Images (1).png",
            name:"Grifo",
            desc:"Night lamp",
            price:15000
        },
        {
            id:'6',
            img:"/assets/image 6 (1).png",
            name:"Muggo",
            desc:"Small Mug",
            price:1500
        },
        {
            id:'7',
            img:"/assets/Images (2).png",
            name:"Pingky",
            desc:"Cute sofa set",
            price:70000
        },
        {
            id:'8',
            img:"/assets/image 8 (1).png",
            name:"Binuyo",
            desc:"Minimalist brown sofa",
            price:250000,
        },
    ]
    function navigateHandler(){
        router.push('/shop')
    }
    const [featuredproducts,setFeaturedProducts]=useState(products)
   
   
    
    // async function sendToFbWish(img,name,desc,price){
    //     const newWishItem={
    //         email:isEmail,
    //         img:img,
    //         name:name,
    //         desc:desc,
    //         price:price,
    //         quantity:1
    //     }
    //     try{
    //         getWishsData();
    //         const response= await axios.post("http://localhost:8000/wishlist/new",newWishItem);
    //         if(response.status===201){
    //             toast.success("Product already exists in wishlist")
    //         }else if(response.status===200){
    //             toast.success("Product added to wishlist")
    //         }
    //         getWishsData();
    //     }
    //     catch(error)
    //     {
    //         console.error("err:",error)
    //     }
    // } 
    
    return(
        <div className="lg:py-10 lg:px-20 py-5 px-10 flex flex-col items-center">
            <h1 className="lg:text-3xl font-bold text-xl">Our Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-20 sm:gap-10 w-full lg:mt-6 sm:mt-3">
                {
                    featuredproducts.map((items)=>{
                        const productId=items.id;
                        return <FeaturedCompo productId={productId} items={items} />
                    })
                }
            </div>
            <div className="mt-10"><Button onClick={navigateHandler} text="Show More" className="bg-white
                     hover:bg-[#B88E2F] hover:text-white capitalize text-[#B88E2F]"/></div>
        </div>
    )
}

export default FeaturedProducts;