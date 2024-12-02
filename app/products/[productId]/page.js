"use client"


import RelatedProducts from "@/app/components/reused-components/RelatedProducts";
import { dataAction } from "@/app/ReduxStore/dataCart";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


function Dynamic({productId}){
    const result=useParams();
    const dispatch=useDispatch();
    const isEmail=useSelector((state)=>state.authReducer.isEmail);
    const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const[isImage,setIsImage]=useState();
    const [isCount,setIsCount]=useState(1);
    console.log(result)
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
            img2:"/assets/pexels-karolina-grabowska-5942482.jpg",
            img3:"/assets/pexels-karolina-grabowska-5942509.jpg",
            img4:"/assets/2149178885.jpg",
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
    ]
    const decreaseCount = () =>{
        if(isCount>1){setIsCount((prevCount) => prevCount - 1);}
    }
     const increaseCount = () =>{
        setIsCount((afterCount)=>afterCount+1);
    }
    function changeImageHandler(img){
        setIsImage(img);
        console.log(isImage);
    }
    const [gridProducts,setGridProducts]=useState(products);
    async function getCartsData(){
        try{
            const response=await fetch(`http://localhost:8000/cart/${isEmail}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
            });
            const res=await response.json()
            console.log(res.items,"from page product id file");
            dispatch(dataAction.setCartArr(res.items));
        }
        catch (error) {
            console.log(error)
        }
    }
      async function sendToMongoDB(img,name,desc,price,quantity){
        const newCartItem={
            email:isEmail,
            img:img,
            name:name,
            desc:desc,
            price:price,
            quantity:quantity,
        }
        try{
            getCartsData();
            console.log(cartItems,"cart items before calling")
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
    // async function sendToFb(img,name,desc,price,quantity){
    //     const newCartItem={
    //         img,
    //         name,
    //         desc,
    //         price,
    //         quantity
    //     }
    //     try{
    //         getCartData();
    //         const similar=cartItems.find((item)=>item.name===name);
    //         console.log(similar,"similar")
    //         if(similar){
    //             const response=await axios.patch(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart/${similar.id}.json`,{quantity:similar.quantity+quantity});
    //             console.log(response);
    //             toast.success("Quantity of the product is increased")
    //         }else{
    //         const response= await axios.post(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart.json`,newCartItem);
    //         toast.success("Product added to cart")
    //     }
            
    //         getCartData();
    //     }
    //     catch(error)
    //     {
    //         console.error("err:",error)
    //     }
    // }   
    const filtereddata=gridProducts.find((item)=>(item.id===result.productId));
    console.log(filtereddata);
    useEffect(()=>{
        changeImageHandler(filtereddata.img);
        getCartsData();
    },[])

    return(
        <div>
            
            <div className="bg-[#F9F1E7] h-[10vh] sm:h-[14vh]  flex items-center lg:gap-6 gap-3 lg:px-20 px-10 lg:text-xl text-sm">
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
            <div className="flex flex-col lg:flex-row items-start justify-center lg:px-20 sm:px-10 py-10">
                <div className="w-full lg:w-1/2 flex px-3 gap-2 lg:gap-16 ">
                <div className=" flex flex-col gap-5 w-1/4">
                    <img onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img)
                                        }} className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" src={filtereddata.img} width={80} height={80}></img>
                    <img  className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img2)
                                        }}  src={filtereddata.img2} width={80} height={80}></img>
                    <img  className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img3)
                                        }} src={filtereddata.img3} width={80} height={80}></img>
                    <img  className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img4)
                                        }} src={filtereddata.img4} width={80} height={80}></img>
                </div>
                <div className="w-3/4 ">
                    {/* <img className="h-[28rem] w-full rounded-xl" src={isImage}></img> */}
                    <ReactImageMagnify 
                                        {...{
                                            smallImage:{
                                                alt:"filtereddataname",
                                                isFluidWidth:true,
                                                src:isImage,
                                                className:"h-[10rem] lg:h-[14rem] w-full  rounded-xl",
                                            }
                                        ,
                                        largeImage: {
                                            src:isImage,
                                            width:800,
                                            height:1200,
                                        },  
                                            // style:"rounded-xl overflow-hidden",
                                            hoverDelayInMs:2,
                                            isActivatedOnTouch:true,
                                            enlargedImageContainerClassName:"sm:absolute lg:relative bottom-100 left-0 lg:top-0 lg:right-0 rounded-xl ",

                        }}/>
                </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0 px-10 lg:px-20 py-2 flex flex-col gap-2 items-start justify-start ">
                    <h1 className="text-3xl lg:text-5xl">{filtereddata.name}</h1>
                    <div className="text-xl lg:text-3xl text-[#9F9F9F] ">Rs. {filtereddata.price}</div>
                    <div className="text-sm lg:text-xl tracking-wide mt-4">
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

                    <div className="text-base lg:text-l tracking wide border-l-[2px] border-black pl-4">
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
                    <div className="flex items-center gap-2 h-[3rem] mt-4 w-full">
                        <div className="flex items-center text-base sm:text-xl h-full gap-2 border-2 border-[#9F9F9F] px-4 rounded-xl">
                            <button onClick={decreaseCount} className={`${isCount<2 ? "cursor-not-allowed":""}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg></button>
                            {isCount}
                            <button onClick={increaseCount} className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg></button>
                        </div>
                        <button onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            isEmail ? sendToMongoDB(filtereddata.img,filtereddata.name,filtereddata.desc,filtereddata.price,isCount):toast.error("Log In to access cart")
                                        }} className="h-full w-full sm:w-1/3 border-2 text-base sm:text-xl border-solid border-black rounded-xl px-2 break-keep ">
                            Add To Cart
                        </button>
                        
                    </div>
                    
                    <div className="flex flex-col gap-5 mt-3 w-full">
                        <hr/>
                        <p>SKU  : SS001</p>
                        <p>Category : Sofa</p>
                        <p>Tags  : Sofa,Chair,Home,Shop</p>
                        <div className="flex items-center gap-6">Share  :   <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
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