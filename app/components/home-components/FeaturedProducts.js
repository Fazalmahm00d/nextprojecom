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

function FeaturedProducts(){
    const dispatch=useDispatch();
    const router =useRouter();
    const[isLoading,setIsLoading]=useState();
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
    // async function getCartData() {
    //     try {
    //         const response = await axios.get(`https://nextecom-db-default-rtdb.firebaseio.com//nextprojecom/${isEmail}/cart.json`)
    //         const data=response.data
    //         console.log(data);
    //         const arr=[]
    //         for(let key in data){
    //             arr.push({ id:key ,...data[key]});
    //         }
    //         console.log(arr)
    //         dispatch(dataAction.setCartArr(arr));
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //     finally{
    //         setIsLoading(false);
    //     }
    //   }
    //   async function getWishData() {
    //     try {
    //         const response2 = await axios.get(`https://nextecom-db-default-rtdb.firebaseio.com//nextprojecom/${isEmail}/wishlist.json`)
    //         const data2=response2.data
    //         console.log(data2);
    //         const arr2=[]
    //         for(let key in data2){
    //             arr2.push({ id:key ,...data2[key]});
    //         }
    //         console.log(arr2)
    //         dispatch(dataAction.setWishArr(arr2));
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //     finally{
    //         setIsLoading(false);
    //     }
    //   }
    // async function getCartData() {
    //     try {
    //         const response = await axios.get(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart.json`)
    //         const data=response.data
    //         console.log(data);
    //         const arr=[]
    //         for(let key in data){
    //             arr.push({ id:key ,...data[key]});
    //         }
    //         console.log(arr)
    //         dispatch(dataAction.setCartArr(arr));
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //   }
      async function getCartsData(){
        try{
            const response=await fetch(`http://localhost:8000/cart/${isEmail}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            });
            const res=await response.json()
            console.log(res.items);
            dispatch(dataAction.setCartArr(res.items));
        }
        catch (error) {
            console.log(error)
        }
    }
    async function getWishsData() {
        try{
            const response=await axios.get(`http://localhost:8000/wishlist/${isEmail}`);
            console.log(response,"wish response")
            
            dispatch(dataAction.setWishArr(response.data.items))
            if(response.data.message==="WishList not found"){
                console.log("inside 404")
                return
            }
            setIsWishItems(response.data.items)
        }
        catch(error){
            console.log(error)
        }
    }
      async function sendToMongoDB(img,name,desc,price){
        const newCartItem={
            email:isEmail,
            img:img,
            name:name,
            desc:desc,
            price:price,
            quantity:1,
        }
        try{
            getCartsData();
            const response= await axios.post(`http://localhost:8000/cart/new`,newCartItem);
            if(response.status===201){
                toast.success("Quantity of the item has been increased")
            }else if(response.status===200){
                toast.success("Product added to cart")
            }
        
            getCartsData()    
        }
        catch(error)
        {
            console.error("err:",error)
        }
    } 
    // async function sendToFb(img,name,desc,price){
    //     const newCartItem={
    //         img:img,
    //         name:name,
    //         desc:desc,
    //         price:price,
    //         quantity:1,
    //     }
    //     try{
    //         getCartData();
    //         console.log(cartItems,"cart items before calling")
    //         const similar=cartItems.find((item)=>item.name===name);
    //         console.log(similar,"similar")
    //         if(similar){
    //             const response=await axios.patch(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart/${similar.id}.json`,{quantity:similar.quantity+1});
    //             console.log(response);
    //             toast.success("Quantity of the product is increased")
    //         }else{
    //         const response= await axios.post(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart.json`,newCartItem);
    //         toast.success("Product added to cart")
    //     }
    //         getCartData()    
    //     }
    //     catch(error)
    //     {
    //         console.error("err:",error)
    //     }
    // } 
    async function sendToFbWish(img,name,desc,price){
        const newWishItem={
            email:isEmail,
            img:img,
            name:name,
            desc:desc,
            price:price,
        }
        try{
            getWishsData();
            const response= await axios.post("http://localhost:8000/wishlist/new",newWishItem);
            if(response.status===201){
                toast.success("Product already exists in wishlist")
            }else if(response.status===200){
                toast.success("Product added to wishlist")
            }
            getWishsData();
        }
        catch(error)
        {
            console.error("err:",error)
        }
    } 
    // useEffect(()=>{
    //     getCartData();
    //     getWishData();
    // },[])
    
    return(
        <div className="lg:py-10 lg:px-20 py-5 px-10 flex flex-col items-center">
            <h1 className="lg:text-3xl font-bold text-xl">Our Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-20 sm:gap-10 w-full lg:mt-6 sm:mt-3">
                {
                    isLoading ?
                    [1,2,3,4,5,6,7].map((item)=>{
                        return <div key={item} className="h-[28rem] bg-gray-200">

                        </div>
                    })
                    :
                    featuredproducts.map((items)=>{
                        const productId=items.id;
                        return <Link key={items.id} href={`products/${productId}`}><div key={items.id} className="group relative cursor-pointer lg:h-[28rem] sm:h-[18rem]">
                                    <div className="h-[60%] lg:h-[70%]">
                                        <img className="w-full h-full" src={items.img}></img>
                                    </div> 
                                    <div className="relative h-[40%] lg:h-[30%] bg-[#F4F5F7] lg:p-4 p-2">
                                        <div className="font-bold lg:text-xl sm:text-l" >{items.name}</div>
                                        <p className="text-[#898989] text-sm font-light mt-1 tracking-wide">{items.desc}</p>
                                        <p className="relative sm:absolute sm:pl-2 sm:bottom-2  sm:left-0 font-bold lg:mt-2  sm:mt-1 lg:text-xl sm:text-sm tracking-wide">Rs.{items.price}</p>
                                    </div> 
                                    <div className="bg-opacity-0 absolute z-30 top-0 left-0 hidden group-hover:flex justify-center items-center bg-black group-hover:inset-0 group-hover:bg-opacity-60 ">
                                        <div className="absolute flex flex-col justify-center items-center">
                                        <button onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            isEmail ? sendToMongoDB(items.img,items.name,items.desc,items.price):toast.error("Log In to access cart")
                                        }} className="bg-white text-[#B88E2F]  text-sm px-2 py-2  font-bold lg:text-l lg:px-10 lg:py-2 tracking-wide">Add to cart</button>
                                        <div className="flex flex-col lg:flex-row gap-2 w-full lg:mt-4  items-center text-white font-bold text-base">

                                            <SvgComponent name="Share" svg={<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46666C5.97333 8.31333 6 8.15999 6 7.99999C6 7.83999 5.97333 7.68666 5.94 7.53333L10.64 4.79333C11 5.12666 11.4733 5.33333 12 5.33333C13.1067 5.33333 14 4.43999 14 3.33333C14 2.22666 13.1067 1.33333 12 1.33333C10.8933 1.33333 10 2.22666 10 3.33333C10 3.49333 10.0267 3.64666 10.06 3.79999L5.36 6.53999C5 6.20666 4.52667 5.99999 4 5.99999C2.89333 5.99999 2 6.89333 2 7.99999C2 9.10666 2.89333 9.99999 4 9.99999C4.52667 9.99999 5 9.79333 5.36 9.45999L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white"/>
                                            </svg>}/>
                                        
                                            <SvgComponent sendToFbWish={sendToFbWish} items={items} isEmail={isEmail} name="Like" svg={<svg width="14" height="14" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99949 13.0361C-5.33358 5.66667 3.99975 -2.33333 7.99949 2.72538C11.9998 -2.33333 21.3331 5.66667 7.99949 13.0361Z" stroke="white" strokeWidth="1.8"/>
                                                </svg>}/>
    
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                    })
                }
            </div>
            <div className="mt-10"><Button onClick={navigateHandler} text="Show More" className="bg-white
                     hover:bg-[#B88E2F] hover:text-white capitalize text-[#B88E2F]"/></div>
        </div>
    )
}

export default FeaturedProducts;