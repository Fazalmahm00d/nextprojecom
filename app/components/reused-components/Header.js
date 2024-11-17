"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function Header(){
    const[cartDisplay,setCartDisplay]=useState(false)
    const showCart=()=>{
        setCartDisplay(true);
    }
    const closeCart=()=>{
        setCartDisplay(false);
    }
    return(
        <div className="relative w-full">
            {
                cartDisplay ? <div className="absolute h-[100vh] w-full  z-20 inset-0 bg-black bg-opacity-20 ">
                                <div className="absolute z-40 bg-white w-1/3  h-full top-0 right-0  px-10 py-6">
                                    <div className="relative flex  justify-between items-center mb-6">
                                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                                        <button onClick={closeCart}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-x" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"/>
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="h-[60vh]">

                                    </div>
                                    <div className=" w-full mb-6 ">
                                        <div className="flex justify-between mb-6">
                                            <p className="text-2xl">Subtotal</p>
                                            <p className="text-2xl text-[#B88E2F]">Rs.0</p>
                                        </div>
                                        <hr/>
                                        <div className="flex gap-2 px-4 py-10 w-full">
                                            
                                            <Link href="/cart"><button className="px-6 border-2 border-solid border-black text-xl rounded-2xl">Cart</button></Link>
                                            <Link href="/checkout"><button className="px-6 border-2 border-solid border-black  text-xl rounded-2xl">Checkout</button></Link>
                                            <button className="px-6 border-2 border-solid border-black  text-xl rounded-2xl">Comparison</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""
            }
            <div  className="flex px-20 py-6 justify-between items-center w-full">
            <Link href="/">
            <div className="flex gap-2 items-center">
                <img src="/assets/Meubel House_Logos-05.png"></img>
                <h1 className="font-bold text-4xl">Furniro</h1>
            </div>
            </Link>
            <div>
                <ul className="flex justify-between items-center gap-16 font-bold tracking-wide">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li>About</li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="flex justify-between items-center gap-10">
            <Link href="/login"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
            <path d="M21.3335 10.0001V4.16675H23.6668V11.1667H21.3335M21.3335 15.8334H23.6668V13.5001H21.3335M9.66683 11.1667C12.7818 11.1667 19.0002 12.7301 19.0002 15.8334V19.3334H0.333496V15.8334C0.333496 12.7301 6.55183 11.1667 9.66683 11.1667ZM9.66683 0.666748C10.9045 0.666748 12.0915 1.15841 12.9667 2.03358C13.8418 2.90875 14.3335 4.09574 14.3335 5.33341C14.3335 6.57109 13.8418 7.75808 12.9667 8.63325C12.0915 9.50842 10.9045 10.0001 9.66683 10.0001C8.42915 10.0001 7.24217 9.50842 6.367 8.63325C5.49183 7.75808 5.00016 6.57109 5.00016 5.33341C5.00016 4.09574 5.49183 2.90875 6.367 2.03358C7.24217 1.15841 8.42915 0.666748 9.66683 0.666748ZM9.66683 13.3834C6.20183 13.3834 2.55016 15.0867 2.55016 15.8334V17.1167H16.7835V15.8334C16.7835 15.0867 13.1318 13.3834 9.66683 13.3834ZM9.66683 2.88341C9.01705 2.88341 8.39388 3.14154 7.93442 3.601C7.47495 4.06047 7.21683 4.68363 7.21683 5.33341C7.21683 5.98319 7.47495 6.60636 7.93442 7.06583C8.39388 7.52529 9.01705 7.78341 9.66683 7.78341C10.3166 7.78341 10.9398 7.52529 11.3992 7.06583C11.8587 6.60636 12.1168 5.98319 12.1168 5.33341C12.1168 4.68363 11.8587 4.06047 11.3992 3.601C10.9398 3.14154 10.3166 2.88341 9.66683 2.88341Z" fill="black"/>
            </svg></button>
            </Link>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg></button>
            <button><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.16683 3.5C4.94566 3.5 2.3335 6.08533 2.3335 9.275C2.3335 11.8498 3.35433 17.9608 13.4028 24.1383C13.5828 24.2479 13.7895 24.3058 14.0002 24.3058C14.2109 24.3058 14.4175 24.2479 14.5975 24.1383C24.646 17.9608 25.6668 11.8498 25.6668 9.275C25.6668 6.08533 23.0547 3.5 19.8335 3.5C16.6123 3.5 14.0002 7 14.0002 7C14.0002 7 11.388 3.5 8.16683 3.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            <button onClick={showCart}><svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2354 16.1926H7.95225L8.76982 14.5273L22.3542 14.5027C22.8136 14.5027 23.2073 14.1746 23.2894 13.7207L25.1706 3.19062C25.2198 2.91445 25.146 2.63008 24.9655 2.41406C24.8763 2.30775 24.7651 2.22211 24.6395 2.16309C24.5139 2.10407 24.377 2.07308 24.2382 2.07227L6.95693 2.01484L6.80928 1.32031C6.71631 0.877344 6.31709 0.554688 5.86318 0.554688H1.63857C1.38258 0.554688 1.13707 0.656381 0.95605 0.837398C0.775034 1.01841 0.67334 1.26393 0.67334 1.51992C0.67334 1.77592 0.775034 2.02143 0.95605 2.20245C1.13707 2.38346 1.38258 2.48516 1.63857 2.48516H5.08115L5.72646 5.55312L7.31514 13.2449L5.26982 16.5836C5.16361 16.727 5.09963 16.8972 5.08514 17.075C5.07064 17.2528 5.1062 17.4312 5.18779 17.5898C5.35186 17.9152 5.68271 18.1203 6.04912 18.1203H7.76631C7.40023 18.6065 7.20249 19.1988 7.20303 19.8074C7.20303 21.3551 8.46084 22.6129 10.0085 22.6129C11.5562 22.6129 12.814 21.3551 12.814 19.8074C12.814 19.1977 12.6116 18.6043 12.2507 18.1203H16.6558C16.2897 18.6065 16.0919 19.1988 16.0925 19.8074C16.0925 21.3551 17.3503 22.6129 18.8979 22.6129C20.4456 22.6129 21.7034 21.3551 21.7034 19.8074C21.7034 19.1977 21.5011 18.6043 21.1401 18.1203H24.2382C24.7687 18.1203 25.2034 17.6883 25.2034 17.1551C25.2018 16.8994 25.0992 16.6546 24.9178 16.4743C24.7365 16.294 24.4912 16.1927 24.2354 16.1926ZM7.35889 3.91797L23.1034 3.96992L21.5612 12.6051L9.19365 12.627L7.35889 3.91797ZM10.0085 20.6715C9.53271 20.6715 9.14443 20.2832 9.14443 19.8074C9.14443 19.3316 9.53271 18.9434 10.0085 18.9434C10.4843 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7815 20.2564 10.6195 20.4184C10.4574 20.5805 10.2377 20.6715 10.0085 20.6715ZM18.8979 20.6715C18.4222 20.6715 18.0339 20.2832 18.0339 19.8074C18.0339 19.3316 18.4222 18.9434 18.8979 18.9434C19.3737 18.9434 19.762 19.3316 19.762 19.8074C19.762 20.0366 19.671 20.2564 19.5089 20.4184C19.3469 20.5805 19.1271 20.6715 18.8979 20.6715Z" fill="black"/>
            </svg>
            </button>


            </div>
        </div>
        </div>
    )

}

export default Header;
