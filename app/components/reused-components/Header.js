"use client"

import { authAction } from "@/app/ReduxStore/Authenticate";
import { dataAction } from "@/app/ReduxStore/dataCart";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";



function Header(){
    const router=useRouter();
    const dispatch=useDispatch();
    const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const wishItems=useSelector((state)=>state.dataReducer.wishItems)
    const isEmail=useSelector((state)=>state.authReducer.isEmail);
    // const shopProducts=useSelector((state)=>state.dataReducer.shopProducts)
    const [totalExpenses, setTotalExpenses] = useState(0);
    console.log(cartItems,"cart items")
    const[cartDisplay,setCartDisplay]=useState(false);
    const[wishDisplay,setWishDisplay]=useState(false);
    const[burgerDisplay,setBurgerDisplay]=useState(false);
    const[isLoading,setIsLoading]=useState(true);
    const[isItems,setIsItems]=useState([]);
    const[isVisible,setIsVisible]=useState(false)
    const[isWishItems,setIsWishItems]=useState([]);
    // const [isSearch,setIsSearch]=useState(false);
    // const [query,setQuery]=useState('');
    // const[debouncedQuery,setDebouncedQuery]=useState('');
    // const showSearch=()=>{
    //     setIsSearch(true);
    //     router.push('/shop')
    // }
    // const closeSearch=()=>{
    //     setIsSearch(false);
    // }
    const showBurger=()=>{
        setBurgerDisplay(true);
        // setIsVisible(true);
        setTimeout(()=>{
         setIsVisible(true);   
        },200)
    }
    const closeBurger=()=>{
        setIsVisible(false);
        setTimeout(()=>{
            setBurgerDisplay(false);  
           },200)
    }
    const showCart=()=>{
        if(isEmail){
            setCartDisplay(true);
            getCartData();
        }else{
            toast.warning("Log In to access Cart")
            router.push('/login');
            setBurgerDisplay(false)
        }
    }
    const closeCart=()=>{
        setCartDisplay(false);
    }
    const showWish=()=>{
        if(isEmail){
            setWishDisplay(true);
            getWishData();
        }else{
            toast.warning("Log In to access Cart")
            router.push('/login');
            setBurgerDisplay(false)
        }
    }
    const closeWish=()=>{
        setWishDisplay(false);
    }
    // const handler=(e)=>{
    //     const search=e.target.value;
    //     console.log(search,"search")
    //     setQuery(search);
    // }
    async function getCartData() {
        try {
            const response = await axios.get(`https://nextecom-db-default-rtdb.firebaseio.com//nextprojecom/${isEmail}/cart.json`)
            const result=response.data;
            
            console.log(result,"result");
            const arr=[]
            for(let key in result){
                arr.push({ id:key ,...result[key]});
            }
            console.log(arr,"cart items data")
            dispatch(dataAction.setCartArr(arr));
            setIsItems(arr);
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
      }
      async function getWishData() {
        try {
            const response2 = await axios.get(`https://nextecom-db-default-rtdb.firebaseio.com//nextprojecom/${isEmail}/wishlist.json`)
            const data2=response2.data
            console.log(data2);
            const arr2=[]
            for(let key in data2){
                arr2.push({ id:key ,...data2[key]});
            }
            console.log(arr2,"wishlist data")
            dispatch(dataAction.setWishArr(arr2));
            setIsWishItems(arr2);
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setIsLoading(false);
        }
      }
    
    // async function updateTotal(){
    //     const totalExpenses = await cartItems.reduce(
    //         (sum, item) => sum + item.price * item.quantity,
    //         0
    //     );
    //     setExpenses(totalExpenses)
    // }
    
    // function delayedUpdateTotal() {
    //     setTimeout(async () => {
    //         await updateTotal();
    //     }, 2000); // 2000 milliseconds = 2 seconds
    // }
    const closeOnTop=()=>{
            closeCart();
            closeBurger();
    }
    const logOutHandler=()=>{
        localStorage.clear();
        dispatch(authAction.changeEmailValue(null));
        dispatch(authAction.changeTokenValue(null));
        toast.success("Logged Out Successfully");
    }
    async function deleteItem(id){
        const response=await axios.delete(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/cart/${id}.json`);
        console.log(response);
        toast.success("Item removed from cart");
        getCartData();
    }
    
    async function deleteWishItem(id){
        const response=await axios.delete(`https://nextecom-db-default-rtdb.firebaseio.com/nextprojecom/${isEmail}/wishlist/${id}.json`);
        console.log(response);
        toast.success("Item removed from wishlist");
        getWishData();
    }
    
    // useEffect(()=>{
    // const id=setInterval(()=>{
    //     setDebouncedQuery(query);
    // },500);
    
    // return ()=>{
    //     clearTimeout(id);
    // }
    // },[query])

    // useEffect(()=>{
    //     const filtered=shopProducts.filter((item)=>
    //     item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    //     ||
    //     item.category.toLowerCase().includes(debouncedQuery.toLowerCase()))
    //     dispatch(dataAction.setFilteredData(filtered))
    // },[debouncedQuery])

    useEffect(()=>{
        if(localStorage.getItem('email')){
            dispatch(authAction.changeEmailValue(localStorage.getItem('email')));
            dispatch(authAction.changeTokenValue(localStorage.getItem('token')))
        }
        getCartData();
        getWishData();
        // delayedUpdateTotal();
    },[])
    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalExpenses(total);
    }, [cartItems]);
    return(
        <div className="relative w-full bg-white">
            {
                burgerDisplay?
                <div className={`absolute top-16  h-screen w-screen bg-white no-doc-scroll z-30 animate-fade-slide-in`}>
                    <div className="flex flex-col items-center justify-center gap-16 mt-10 font-bold">
                    <Link onClick={closeBurger} href="/">Home</Link>
                    <Link onClick={closeBurger} href="/shop">Shop</Link>
                    <Link onClick={closeBurger} href="/about">About</Link>
                    <Link onClick={closeBurger} href="/contact">Contact</Link>  
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-20 ">
            {
                isEmail ? <button onClick={logOutHandler} className="border-2 border-solid border-black lg:py-2 lg:px-4 px-2 text-sm rounded-xl">Log Out</button>:<Link href="/login"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path d="M21.3335 10.0001V4.16675H23.6668V11.1667H21.3335M21.3335 15.8334H23.6668V13.5001H21.3335M9.66683 11.1667C12.7818 11.1667 19.0002 12.7301 19.0002 15.8334V19.3334H0.333496V15.8334C0.333496 12.7301 6.55183 11.1667 9.66683 11.1667ZM9.66683 0.666748C10.9045 0.666748 12.0915 1.15841 12.9667 2.03358C13.8418 2.90875 14.3335 4.09574 14.3335 5.33341C14.3335 6.57109 13.8418 7.75808 12.9667 8.63325C12.0915 9.50842 10.9045 10.0001 9.66683 10.0001C8.42915 10.0001 7.24217 9.50842 6.367 8.63325C5.49183 7.75808 5.00016 6.57109 5.00016 5.33341C5.00016 4.09574 5.49183 2.90875 6.367 2.03358C7.24217 1.15841 8.42915 0.666748 9.66683 0.666748ZM9.66683 13.3834C6.20183 13.3834 2.55016 15.0867 2.55016 15.8334V17.1167H16.7835V15.8334C16.7835 15.0867 13.1318 13.3834 9.66683 13.3834ZM9.66683 2.88341C9.01705 2.88341 8.39388 3.14154 7.93442 3.601C7.47495 4.06047 7.21683 4.68363 7.21683 5.33341C7.21683 5.98319 7.47495 6.60636 7.93442 7.06583C8.39388 7.52529 9.01705 7.78341 9.66683 7.78341C10.3166 7.78341 10.9398 7.52529 11.3992 7.06583C11.8587 6.60636 12.1168 5.98319 12.1168 5.33341C12.1168 4.68363 11.8587 4.06047 11.3992 3.601C10.9398 3.14154 10.3166 2.88341 9.66683 2.88341Z" fill="black"/>
                </svg></button>
                </Link>
            }
            {/* {
                isSearch ? <div className="flex"><input  name="search" className="border-2 border-solid lg:py-2 lg:px-4 px-2" type="text" /><button onClick={closeSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button></div> : <button className="border-2 " onClick={showSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button>
            } */}
            <button onClick={showWish} ><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.16683 3.5C4.94566 3.5 2.3335 6.08533 2.3335 9.275C2.3335 11.8498 3.35433 17.9608 13.4028 24.1383C13.5828 24.2479 13.7895 24.3058 14.0002 24.3058C14.2109 24.3058 14.4175 24.2479 14.5975 24.1383C24.646 17.9608 25.6668 11.8498 25.6668 9.275C25.6668 6.08533 23.0547 3.5 19.8335 3.5C16.6123 3.5 14.0002 7 14.0002 7C14.0002 7 11.388 3.5 8.16683 3.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg></button>
            <button  onClick={showCart}><svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2354 16.1926H7.95225L8.76982 14.5273L22.3542 14.5027C22.8136 14.5027 23.2073 14.1746 23.2894 13.7207L25.1706 3.19062C25.2198 2.91445 25.146 2.63008 24.9655 2.41406C24.8763 2.30775 24.7651 2.22211 24.6395 2.16309C24.5139 2.10407 24.377 2.07308 24.2382 2.07227L6.95693 2.01484L6.80928 1.32031C6.71631 0.877344 6.31709 0.554688 5.86318 0.554688H1.63857C1.38258 0.554688 1.13707 0.656381 0.95605 0.837398C0.775034 1.01841 0.67334 1.26393 0.67334 1.51992C0.67334 1.77592 0.775034 2.02143 0.95605 2.20245C1.13707 2.38346 1.38258 2.48516 1.63857 2.48516H5.08115L5.72646 5.55312L7.31514 13.2449L5.26982 16.5836C5.16361 16.727 5.09963 16.8972 5.08514 17.075C5.07064 17.2528 5.1062 17.4312 5.18779 17.5898C5.35186 17.9152 5.68271 18.1203 6.04912 18.1203H7.76631C7.40023 18.6065 7.20249 19.1988 7.20303 19.8074C7.20303 21.3551 8.46084 22.6129 10.0085 22.6129C11.5562 22.6129 12.814 21.3551 12.814 19.8074C12.814 19.1977 12.6116 18.6043 12.2507 18.1203H16.6558C16.2897 18.6065 16.0919 19.1988 16.0925 19.8074C16.0925 21.3551 17.3503 22.6129 18.8979 22.6129C20.4456 22.6129 21.7034 21.3551 21.7034 19.8074C21.7034 19.1977 21.5011 18.6043 21.1401 18.1203H24.2382C24.7687 18.1203 25.2034 17.6883 25.2034 17.1551C25.2018 16.8994 25.0992 16.6546 24.9178 16.4743C24.7365 16.294 24.4912 16.1927 24.2354 16.1926ZM7.35889 3.91797L23.1034 3.96992L21.5612 12.6051L9.19365 12.627L7.35889 3.91797ZM10.0085 20.6715C9.53271 20.6715 9.14443 20.2832 9.14443 19.8074C9.14443 19.3316 9.53271 18.9434 10.0085 18.9434C10.4843 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7815 20.2564 10.6195 20.4184C10.4574 20.5805 10.2377 20.6715 10.0085 20.6715ZM18.8979 20.6715C18.4222 20.6715 18.0339 20.2832 18.0339 19.8074C18.0339 19.3316 18.4222 18.9434 18.8979 18.9434C19.3737 18.9434 19.762 19.3316 19.762 19.8074C19.762 20.0366 19.671 20.2564 19.5089 20.4184C19.3469 20.5805 19.1271 20.6715 18.8979 20.6715Z" fill="black"/>
            </svg>
            </button>


            </div>
                </div>:""
            }
            {
                cartDisplay ? <div  className="absolute  w-full h-[100vh] z-40 inset-0 bg-black bg-opacity-20 no-doc-scroll ">
                                <div onClick={closeCart} className="absolute z-50 w-full sm:w-2/3   h-screen"></div>
                                <div className="absolute z-50 bg-white w-full sm:w-1/3  h-screen overflow-hidden top-0 right-0  px-10 py-6">
                                    <div className="flex  justify-between items-center mb-6">
                                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                                        <button onClick={closeCart}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-x" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"/>
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="h-[60vh]">
                                    { 
                                    isLoading ? 
                                        [1,2,3].map((item)=>{
                                                return <div key={item} className="flex justify-between text-base mt-3">
                                                            
                                                         <div  className="h-16 w-16 rounded-lg bg-gray-200"></div>
                                                            <div className="flex flex-col items-end gap-2">
                                                            <div className="text-[#B88E2F] w-16 h-4 bg-gray-200"></div>
                                                            <div className="font-bold text-xl w-10 h-4  bg-gray-200"></div> 
                                                            </div>
                                                        </div>
                                                })
                                    
                                       : 
                                       isItems.length===0 ? <div className="text-xl font-bold text-center">You dont have any product in cart.Please continue shopping</div>:
                                        cartItems.map((items)=>{
                                                return <div key={items.id} className="flex justify-between items-center text-base mt-3">
                                                            <img src={items.img} className="h-16 w-16 lg:h-24 lg:w-24 rounded-lg"></img>
                                                            <div className="flex flex-col items-end gap-2">
                                                            <h3 className="font-bold text-xl">{items.name}</h3>
                                                            <p className="">{items.quantity}</p> 
                                                            <p className="text-[#B88E2F] tracking-widest">${items.price}</p>
                                                            </div>
                                                            <button onClick={()=>deleteItem(items.id)}>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z" fill="#9F9F9F"/>
                                                            </svg>
                                                            </button>
                                                </div>
                                            })
                                        
                                    }
                                    </div>
                                    <div className=" w-full mb-6 ">
                                        <div className="flex justify-between mb-6">
                                            <p className="text-2xl">Subtotal</p>
                                            <p className="text-2xl text-[#B88E2F]">Rs.{totalExpenses}</p>
                                        </div>
                                        <hr/>
                                        <div className="flex gap-2  flex-wrap mt-5">
                                            {
                                            isItems.length===0 ?<Link  href="/shop"><button onClick={closeOnTop} className=" px-4 sm:px-6 border-2 border-solid border-black text-sm sm:text-xl  rounded-2xl">Cart</button></Link>:<Link href="/cart"><button onClick={closeOnTop} className=" px-4 sm:px-6 border-2 border-solid border-black text-sm sm:text-xl  rounded-2xl">Cart</button></Link>}
                                            <Link href="/checkout"><button onClick={closeOnTop}  className="px-4 sm:px-6 border-2 border-solid border-black text-sm sm:text-xl rounded-2xl">Checkout</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""
            }
            {
                wishDisplay ? <div  className="absolute  w-full h-[100vh] z-30 inset-0 bg-black bg-opacity-20 no-doc-scroll ">
                                <div onClick={closeWish} className="absolute z-40 w-full sm:w-2/3   h-screen"></div>
                                <div className="absolute z-50 bg-white w-full sm:w-1/3  h-screen overflow-hidden top-0 right-0  px-10 py-6">
                                    <div className="flex  justify-between items-center mb-6">
                                        <h1 className="text-2xl font-bold">Shopping WishList</h1>
                                        <button onClick={closeWish}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-x" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"/>
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="h-[60vh]">
                                    { 
                                    isLoading ? 
                                        [1,2,3].map((item)=>{
                                                return <div key={item} className="flex justify-between text-base mt-3">
                                                            
                                                         <div  className="h-16 w-16 rounded-lg bg-gray-200"></div>
                                                            <div className="flex flex-col items-end gap-2">
                                                            <div className="text-[#B88E2F] w-16 h-4 bg-gray-200"></div>
                                                            <div className="font-bold text-xl w-10 h-4  bg-gray-200"></div> 
                                                            </div>
                                                        </div>
                                                })
                                    
                                       : 
                                        isWishItems.length===0 ? <div className="text-xl font-bold text-center">You dont have any product in cart.Please continue shopping</div>:
                                        wishItems.map((items)=>{
                                                return <div key={items.id} className="flex justify-between items-center text-base mt-3">
                                                            <img src={items.img} className="h-16 w-16 lg:h-24 lg:w-24 rounded-lg"></img>
                                                            <div className="flex flex-col items-end gap-2">
                                                            <h3 className="font-bold text-xl">{items.name}</h3> 
                                                            <p className="text-[#B88E2F] tracking-widest">${items.price}</p>
                                                            </div>
                                                            <button onClick={()=>deleteWishItem(items.id)}>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z" fill="#9F9F9F"/>
                                                            </svg>

                                                            </button>
                                                </div>
                                            })
                                        
                                    }
                                    </div>
                                    <div className=" w-full mb-6 ">
                                        {/* <div className="flex justify-between mb-6">
                                            <p className="text-2xl">Subtotal</p>
                                            <p className="text-2xl text-[#B88E2F]">Rs.{expenses}</p>
                                        </div> */}
                                        <hr/>
                                        <div className="flex gap-2  flex-wrap mt-5">
                                            {
                                            isItems.length===0 ?<Link  href="/shop"><button onClick={closeWish} className=" px-4 sm:px-6 border-2 border-solid border-black text-sm sm:text-xl  rounded-2xl">Cart</button></Link>:<Link href="/cart"><button className=" px-4 sm:px-6 border-2 border-solid border-black text-sm sm:text-xl  rounded-2xl">Cart</button></Link>}
                                            <Link  href="/checkout"><button onClick={closeWish} className="px-4 sm:px-6 border-2 border-solid border-black text-sm sm:text-xl rounded-2xl">Checkout</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""
            }
            <div  className="flex py-4 px-2 lg:gap-4 lg:px-20 lg:py-6 sm:py-4 sm:px-10 sm:gap-6 justify-between items-center w-full">
            <Link href="/">
            <div className="flex gap-2 items-center">
                <img className="sm:h-6 sm:w-8 lg:w-full lg:h-full" src="/assets/Meubel House_Logos-05.png"></img>
                <h1 className="font-bold lg:text-4xl sm:text-xl">Furniro</h1>
            </div>
            </Link>
        
            <div>
                <ul className="hidden sm:flex justify-between items-center lg:text-base lg:gap-16 sm:gap-2 sm:text-sm font-bold tracking-wide">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
           {
            burgerDisplay? <div className="sm:hidden" onClick={closeBurger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
            </div>: <div className="sm:hidden" onClick={showBurger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </div>
           }
            <div className="hidden sm:flex sm:justify-between sm:items-center lg:gap-10 sm:gap-2">
            {
                isEmail ? <button onClick={logOutHandler} className="border-2 border-solid border-black lg:py-2 lg:px-4 sm:px-2 sm:text-sm rounded-xl">Log Out</button>:<Link href="/login"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path d="M21.3335 10.0001V4.16675H23.6668V11.1667H21.3335M21.3335 15.8334H23.6668V13.5001H21.3335M9.66683 11.1667C12.7818 11.1667 19.0002 12.7301 19.0002 15.8334V19.3334H0.333496V15.8334C0.333496 12.7301 6.55183 11.1667 9.66683 11.1667ZM9.66683 0.666748C10.9045 0.666748 12.0915 1.15841 12.9667 2.03358C13.8418 2.90875 14.3335 4.09574 14.3335 5.33341C14.3335 6.57109 13.8418 7.75808 12.9667 8.63325C12.0915 9.50842 10.9045 10.0001 9.66683 10.0001C8.42915 10.0001 7.24217 9.50842 6.367 8.63325C5.49183 7.75808 5.00016 6.57109 5.00016 5.33341C5.00016 4.09574 5.49183 2.90875 6.367 2.03358C7.24217 1.15841 8.42915 0.666748 9.66683 0.666748ZM9.66683 13.3834C6.20183 13.3834 2.55016 15.0867 2.55016 15.8334V17.1167H16.7835V15.8334C16.7835 15.0867 13.1318 13.3834 9.66683 13.3834ZM9.66683 2.88341C9.01705 2.88341 8.39388 3.14154 7.93442 3.601C7.47495 4.06047 7.21683 4.68363 7.21683 5.33341C7.21683 5.98319 7.47495 6.60636 7.93442 7.06583C8.39388 7.52529 9.01705 7.78341 9.66683 7.78341C10.3166 7.78341 10.9398 7.52529 11.3992 7.06583C11.8587 6.60636 12.1168 5.98319 12.1168 5.33341C12.1168 4.68363 11.8587 4.06047 11.3992 3.601C10.9398 3.14154 10.3166 2.88341 9.66683 2.88341Z" fill="black"/>
                </svg></button>
                </Link>
            }
            {/* {
                isSearch ? <div className="flex"><input onChange={(e)=>handler(e)} className="border-2 border-solid" type="text" /><button onClick={closeSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button></div> : <button className="border-2 " onClick={showSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button>
            } */}
            <button onClick={showWish} ><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.16683 3.5C4.94566 3.5 2.3335 6.08533 2.3335 9.275C2.3335 11.8498 3.35433 17.9608 13.4028 24.1383C13.5828 24.2479 13.7895 24.3058 14.0002 24.3058C14.2109 24.3058 14.4175 24.2479 14.5975 24.1383C24.646 17.9608 25.6668 11.8498 25.6668 9.275C25.6668 6.08533 23.0547 3.5 19.8335 3.5C16.6123 3.5 14.0002 7 14.0002 7C14.0002 7 11.388 3.5 8.16683 3.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg></button>
            <button  onClick={showCart}><svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2354 16.1926H7.95225L8.76982 14.5273L22.3542 14.5027C22.8136 14.5027 23.2073 14.1746 23.2894 13.7207L25.1706 3.19062C25.2198 2.91445 25.146 2.63008 24.9655 2.41406C24.8763 2.30775 24.7651 2.22211 24.6395 2.16309C24.5139 2.10407 24.377 2.07308 24.2382 2.07227L6.95693 2.01484L6.80928 1.32031C6.71631 0.877344 6.31709 0.554688 5.86318 0.554688H1.63857C1.38258 0.554688 1.13707 0.656381 0.95605 0.837398C0.775034 1.01841 0.67334 1.26393 0.67334 1.51992C0.67334 1.77592 0.775034 2.02143 0.95605 2.20245C1.13707 2.38346 1.38258 2.48516 1.63857 2.48516H5.08115L5.72646 5.55312L7.31514 13.2449L5.26982 16.5836C5.16361 16.727 5.09963 16.8972 5.08514 17.075C5.07064 17.2528 5.1062 17.4312 5.18779 17.5898C5.35186 17.9152 5.68271 18.1203 6.04912 18.1203H7.76631C7.40023 18.6065 7.20249 19.1988 7.20303 19.8074C7.20303 21.3551 8.46084 22.6129 10.0085 22.6129C11.5562 22.6129 12.814 21.3551 12.814 19.8074C12.814 19.1977 12.6116 18.6043 12.2507 18.1203H16.6558C16.2897 18.6065 16.0919 19.1988 16.0925 19.8074C16.0925 21.3551 17.3503 22.6129 18.8979 22.6129C20.4456 22.6129 21.7034 21.3551 21.7034 19.8074C21.7034 19.1977 21.5011 18.6043 21.1401 18.1203H24.2382C24.7687 18.1203 25.2034 17.6883 25.2034 17.1551C25.2018 16.8994 25.0992 16.6546 24.9178 16.4743C24.7365 16.294 24.4912 16.1927 24.2354 16.1926ZM7.35889 3.91797L23.1034 3.96992L21.5612 12.6051L9.19365 12.627L7.35889 3.91797ZM10.0085 20.6715C9.53271 20.6715 9.14443 20.2832 9.14443 19.8074C9.14443 19.3316 9.53271 18.9434 10.0085 18.9434C10.4843 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7815 20.2564 10.6195 20.4184C10.4574 20.5805 10.2377 20.6715 10.0085 20.6715ZM18.8979 20.6715C18.4222 20.6715 18.0339 20.2832 18.0339 19.8074C18.0339 19.3316 18.4222 18.9434 18.8979 18.9434C19.3737 18.9434 19.762 19.3316 19.762 19.8074C19.762 20.0366 19.671 20.2564 19.5089 20.4184C19.3469 20.5805 19.1271 20.6715 18.8979 20.6715Z" fill="black"/>
            </svg>
            </button>


            </div>
        </div>
        </div>
    )

}

export default Header;
