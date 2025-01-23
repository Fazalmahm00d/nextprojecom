import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useSelector } from "react-redux";
import { queryClient } from "../redux-components/reduxProvider";
import { toast } from "react-toastify";
import SvgComponent from "../home-components/Svgcomponent";
import { sendToMongoDB, sendToWish } from "@/app/lib/api";

function RelatedCompo(props){

    const isEmail=useSelector((state)=>state.authReducer.isEmail);

    const postCartMutation=useMutation({
        mutationFn:sendToMongoDB,
        onSuccess:() => {
            console.log("Mutation succeeded");
            queryClient.invalidateQueries({ queryKey: ["cartdataheader"] }); // Wait for invalidation
            toast.success('Item has been added to cart successfully')
          }
})
const postWishMutation=useMutation({
    mutationFn:sendToWish,
    onSuccess:  () => {
        console.log("Mutation succeeded");
        queryClient.invalidateQueries({ queryKey: ["wishdataheader"] }); // Wait for invalidation
        toast.success('Item has been added to wishlist successfully')
        
    }
})

function addtoCarthandler(img,name,desc,price){
    const obj={
        email:isEmail,
        img,
        name,
        desc,
        price,
        quantity:1
    }
    console.log("add to cart handler in ")
    if(!postCartMutation.isPending){
        postCartMutation.mutate(obj)
    }
}
function addToWishHandler(img,name,desc,price){
    const obj={
        email:isEmail,
        img:img,
        name:name,
        desc:desc,
        price:price,
        quantity:1
    }
    console.log("add to wish handler in")
    if(!postWishMutation.isPending){
        postWishMutation.mutate(obj)
    }
}
    return(
        <Link key={props.items.id} href={`/products/${props.productId}`}><div key={props.items.id} className="group relative cursor-pointer lg:h-[28rem]  h-[18rem]">
                                    <div className="h-[60%] h-[300px] lg:h-[70%]">
                                        <img className="w-full h-full" src={props.items.img}></img>
                                    </div> 
                                    <div className="sm:relative h-[40%] lg:h-[30%] bg-[#F4F5F7] p-4 ">
                                        <div className="font-bold text-xl " >{props.items.name}</div>
                                        <p className="text-[#898989] text-sm font-light tracking-wide">{props.items.desc}</p>
                                        <p className="font-bold mt-2 lg:text-xl sm:text-sm tracking-wide">Rs.{props.items.price}</p>
                                    </div> 
                                    <div className="bg-opacity-0 sm:absolute z-30 top-0 left-0 hidden group-hover:flex justify-center items-center bg-black group-hover:inset-0 group-hover:bg-opacity-60 ">
                                        <div className="absolute hidden  sm:flex flex-col justify-center items-center">
                                        <button onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            isEmail
                                             ? addtoCarthandler(props.items.img,props.items.name,props.items.desc,props.items.price):toast.error("Log In to access cart")
                                        }} className="bg-white text-[#B88E2F]  text-sm px-2 py-2  font-bold lg:text-l lg:px-10 lg:py-2 tracking-wide">{postCartMutation.isPending ? <div className="flex justify-center items-center gap-2"> Adding to Cart<div
                                            className="animate-spin h-4 w-4 border-[#B88E2F] border-4 border-t-transparent rounded-full "
                                            role="status"
                                            aria-label="Loading"
                                          ></div></div>:"Add to Cart"}</button>
                                        <div className="flex flex-col lg:flex-row gap-2 lg:justify-around w-full lg:mt-4  items-center text-white font-bold text-base">

                                            <SvgComponent name="Share" svg={<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46666C5.97333 8.31333 6 8.15999 6 7.99999C6 7.83999 5.97333 7.68666 5.94 7.53333L10.64 4.79333C11 5.12666 11.4733 5.33333 12 5.33333C13.1067 5.33333 14 4.43999 14 3.33333C14 2.22666 13.1067 1.33333 12 1.33333C10.8933 1.33333 10 2.22666 10 3.33333C10 3.49333 10.0267 3.64666 10.06 3.79999L5.36 6.53999C5 6.20666 4.52667 5.99999 4 5.99999C2.89333 5.99999 2 6.89333 2 7.99999C2 9.10666 2.89333 9.99999 4 9.99999C4.52667 9.99999 5 9.79333 5.36 9.45999L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.363 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2667 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="white"/>
                                            </svg>}/>
                                        
                                            <SvgComponent addToWishHandler={addToWishHandler} items={props.items} isEmail={isEmail} name="Like" svg={<svg width="14" height="14" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99949 13.0361C-5.33358 5.66667 3.99975 -2.33333 7.99949 2.72538C11.9998 -2.33333 21.3331 5.66667 7.99949 13.0361Z" stroke="white" strokeWidth="1.8"/>
                                                </svg>}/>
    
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
    )
}

export default RelatedCompo