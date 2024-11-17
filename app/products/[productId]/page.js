"use client"

import Footer from "@/app/components/reused-components/Footer";
import Header from "@/app/components/reused-components/Header";
import RelatedProducts from "@/app/components/reused-components/RelatedProducts";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";


function Dynamic({productId}){
    const result=useParams();
    console.log(result)
    const [gridProducts,setGridProducts]=useState([
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
            price:250000
        },
        {
            id:'9',
            img:"/assets/Images (3).png",
            name:"Syltherine 2",
            desc:"Stylish cafe chair",
            price:25000
        },
        {
            id:'10',
            img:"/assets/Images.png",
            name:"Leviosa 2",
            desc:"Stylish cafe chair",
            price:35000
        },
        {   
            id:'11',
            img:"/assets/image 3.png",
            name:"Loloto 2",
            desc:"Luxury Sofa Set",
            price:25000
        },
        {
            id:'12',
            img:"/assets/image 4.png",
            name:"Respira 2",
            desc:"Outdoor bar table and stool",
            price:70000
        },
        {
            id:'13',
            img:"/assets/Images (1).png",
            name:"Grifo 2",
            desc:"Night lamp",
            price:15000
        },
        {
            id:'14',
            img:"/assets/image 6 (1).png",
            name:"Muggo 2",
            desc:"Small Mug",
            price:1500
        },
        {
            id:'15',
            img:"/assets/Images (2).png",
            name:"Pingky 2",
            desc:"Cute sofa set",
            price:70000
        },
        {
            id:'16',
            img:"/assets/image 8 (1).png",
            name:"Binuyo 2",
            desc:"Minimalist brown sofa",
            price:250000
        },
    ]);

    const filtereddata=gridProducts.find((item)=>(item.id===result.productId));
    console.log(filtereddata);
    return(
        <div>
            
            <div className="bg-[#F9F1E7] h-[14vh] flex items-center gap-6 px-20 text-xl">
                <div className="flex gap-8 items-center">
                    <Link href="/"><p className="text-[#9F9F9F]">Home</p></Link>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
                    </svg>
                </div>
                <div className="flex gap-8 items-center">
                    <Link href="/shop"><p className="text-[#9F9F9F]">Shop</p></Link>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
                    </svg>
                </div>
                <div className="border-l-[2px] pl-8 border-solid border-gray-400">
                    {filtereddata.name}
                </div>
            </div>
            <div className="flex items-start justify-center px-20 py-10">
                <div className="w-1/2 flex  gap-16 ">
                <div className=" flex flex-col gap-5">
                    <img className="rounded-lg" src={filtereddata.img} width={80} height={80}></img>
                    <img className="rounded-lg" src={filtereddata.img} width={80} height={80}></img>
                    <img className="rounded-lg" src={filtereddata.img} width={80} height={80}></img>
                    <img className="rounded-lg" src={filtereddata.img} width={80} height={80}></img>
                </div>
                <div className=" ">
                    <img className="h-[28rem] w-full rounded-xl" src={filtereddata.img}></img>
                </div>
                </div>
                <div className="w-1/2 px-20 py-2 flex flex-col gap-2 items-start justify-start ">
                    <h1 className="text-5xl">{filtereddata.name}</h1>
                    <div className="text-3xl text-[#9F9F9F] ">Rs. {filtereddata.price}</div>
                    <div className="text-xl tracking-wide mt-4">
                        {filtereddata.desc}
                    </div>
                    <div className="flex mt-2 gap-4">
                    <div className="flex gap-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z" fill="#FFC700"/>
                    </svg>
                    </div>

                    <div className="text-l tracking wide border-l-[2px] border-black pl-4">
                        5 Customer Review
                    </div>

                    </div>
                    
                    <div>
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </div>
                    <div>
                        <p>Size</p>
                        <div className="flex gap-4 mt-2">
                        <button className="font-bold  text-sm h-8 w-8 rounded-sm p-2 bg-[#B88E2F] text-white">S</button>
                        <button className="font-bold bg-[#F9F1E7] text-sm h-8 w-8 rounded-sm p-2 hover:bg-[#B88E2F] hover:text-white">M</button>
                        <button className="font-bold bg-[#F9F1E7] text-sm h-8 w-8 rounded-sm p-2 hover:bg-[#B88E2F] hover:text-white">L</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 h-[3rem] mt-4">
                        <div className="flex items-center text-xl h-full gap-2 border-2 border-[#9F9F9F] px-4 rounded-xl">
                            <button className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg></button>
                            1
                            <button className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg></button>
                        </div>
                        <button className="h-full w-[12rem] border-2 text-xl border-solid border-black rounded-xl px-4 ">
                            Add To Cart
                        </button>
                        <button className="flex w-[12rem] items-center gap-2 h-full w-full border-2 text-xl border-solid border-black rounded-xl px-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                            Compare
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-5 mt-3 w-full">
                    <hr/>
                    <p>SKU  : SS001</p>
                    <p>Category : Sofa</p>
                    <p>Tags  : Sofa,Chair,Home,Shop</p>
                    <div className="flex items-center gap-6">Share  :   <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>

                    </div>
                    </div>
                    </div>
                </div>
            </div> 
            <RelatedProducts/>
            
        </div>
    )
}

export default Dynamic;