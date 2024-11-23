"use client"
import { useRouter } from "next/navigation";
import Button from "../reused-components/Button";

function HeroSection(){
    const router =useRouter();
    function navigateHandler(){
        router.push('/shop')
    }
    return(
        <div className="relative">
            <img className="object-cover h-[90vh] w-full  lg:h-[100vh] sm:h-[75vh]" src="/assets/scandinavian-interior-mockup-wall-decal-background 1.png"></img>
            <div className="absolute top-0 flex justify-center items-center h-full w-full sm:bottom-[-10px] sm:right-[20px] lg:top-[70px] lg:right-[100px] sm:justify-end sm:items-center lg:py-[250px] sm:h-[85vh] sm:px-8 lg:px-20">
                <div className="w-2/3 sm:w-1/2 lg:p-10 sm:w-2/5 rounded-lg p-4 bg-[#FFF3E3] ">
                    <p className="font-semibold text-base letter tracking-[3px] pb-2 pt-6">New Arrival</p>
                    <h1 className="font-bold lg:text-5xl text-2xl sm:text-3xl text-[#B88E2F] lg:pb-4 pb-2">Discover Our <br/> New Collection</h1>
                    <p className="lg:text-lg sm:text-md font-medium sm:pb-6 lg:pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <Button onClick={navigateHandler} text="Buy Now" className="bg-[#B88E2F]
                     hover:bg-transparent hover:text-[#B88E2F] uppercase text-white"/> 
                </div>
            </div>
        </div>

    )
}

export default HeroSection;