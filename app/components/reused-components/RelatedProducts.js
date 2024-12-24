"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SvgComponent from "../home-components/Svgcomponent";
import Button from "./Button";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { dataAction } from "@/app/ReduxStore/dataCart";
import FeaturedCompo from "../home-components/FeaturedCompo";


function RelatedProducts(){
    const isEmail=useSelector((state)=>state.authReducer.isEmail);
    const dispatch=useDispatch();
    const [isLoading,setIsLoading]=useState(false);
    const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const products=[
        
        {
            id:5,
            img:"/assets/Images (1).png",
            name:"Grifo",
            desc:"Night lamp",
            price:15000
        },
       
        {
            id:7,
            img:"/assets/Images (2).png",
            name:"Pingky",
            desc:"Cute sofa set",
            price:70000
        },
        
        {
            id:9,
            img:"/assets/Images (3).png",
            name:"Syltherine 2",
            desc:"Stylish cafe chair",
            price:25000
        },
        
        
        {
            id:15,
            img:"/assets/Images (2).png",
            name:"Pingky 2",
            desc:"Cute sofa set",
            price:70000
        },
        
    ]
    const [relatedProducts,setRelatedProducts]=useState(products);
    return(
        <div className="py-10 px-20 flex flex-col items-center">\
            <h1 className="text-center text-3xl font-bold">Related Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 lg:grid-cols-4 lg:gap-10 w-full lg:mt-6">
            {
                    relatedProducts.map((items)=>{
                        const productId=items.id;
                        return <FeaturedCompo productId={productId} items={items} />
                    })
            }
            </div>
            <div className="mt-10"><Button text="Show More" className="bg-white
                     hover:bg-[#B88E2F] hover:text-white capitalize text-[#B88E2F]"/></div>
            
        </div>
    )
}

export default RelatedProducts;