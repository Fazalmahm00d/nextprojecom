"use client"
import Image from "next/image"
import Button from "../reused-components/Button"
import { useState } from "react";
import { useRouter } from "next/navigation";

function InspirationSection(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate=useRouter();
    // Helper to get the next image index, looping back to the start if at the end
    const getNextImageIndex = (currentIndex) => (currentIndex + 1) % images.length;

    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    // Array of image data
    const images = [
        { id: 1, src: "/assets/Rectangle 24.png", alt: "Image 1",desc: "01 ---- Bed Room",desc2:"Inner Peace" },
        { id: 2, src: "/assets/Rectangle 25.png", alt: "Image 2",desc: "02 ---- Living Room",desc2:"Inner " },
        { id: 3, src: "/assets/Rectangle 26.png", alt: "Image 3",desc: "03 ---- Kitchen Room",desc2:"Inner " },
        { id: 4, src: "/assets/Rectangle 25.png", alt: "Image 4",desc: "04 ---- Bath Room",desc2:"Inner " },
    ];
    return(
        <div className="bg-[#FCF8F3]">
        <div className="flex flex-col container max-w-7xl mx-auto gap-10 sm:gap-0 sm:flex-row justify-between items-center  lg:p-10 p-6">
            <div className=" flex flex-col items-start justify-between lg:p-10 sm:p-6">
                <div className="lg:text-5xl text-2xl font-bold ">50+ Beautiful rooms 
                inspiration</div>
                <p className="text-[#616161] lg:text-xl text-sm lg:pr-10 sm:pr-5">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <div className="lg:mt-6 mt-3">
                    <Button onClick={()=>{navigate.push('/shop')}} text="Buy Now" className="bg-[#B88E2F]
                     hover:bg-transparent hover:text-[#B88E2F] capitalize text-white"/> 
                </div>
            </div>
            <div className="sm:w-[60%] flex flex-col sm:flex-row lg:gap-8 sm:gap-6">
                <div className="relative">
                    
                <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="relative h-96  lg:h-[40rem] lg:min-w-[28rem] lg:w-[32rem] object-cover rounded-md shadow"
                />
        
                    <div className="absolute z-10  lg:bottom-10 lg:left-10 bottom-5 left-5 flex items-end ">
                        <div className=" bg-[#FFFFFFB8] backdrop-blur-sm lg:p-6 p-2 bg-opacity-0 backdrop-opacity-10">
                        <div className="font-light lg:text-xl sm:text-sm">{images[currentImageIndex].desc}</div>
                        <div className="font-bold lg:text-3xl lg:mt-4 sm:text-xl sm:mt-1">{images[currentImageIndex].desc2}</div>
                        </div>
                        <div className="bg-[#B88E2F] lg:p-3 lg:h-12 p-1 h-8">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div >
                    <img
                        src={images[getNextImageIndex(currentImageIndex)].src}
                        alt={images[getNextImageIndex(currentImageIndex)].alt}
                        className="hidden sm:block w-[22rem] lg:w-[28rem] h-[30rem]"
                    />
                    <div className="lg:mt-6 mt-3">
                        <ul className="flex items-center gap-2 lg:gap-3">
                            {images.map((image, index) => (
                                <li key={image.id}>
                                    <div
                                        onClick={() => handleImageChange(index)}
                                        className={`cursor-pointer px-2  py-2 rounded focus:outline-none ${
                                            index === currentImageIndex
                                                ? 
                                                "bg-[#B88E2F] border-[1px]  m-1 rounded-full border-[#B88E2F] lg:p-2 p-1"
                                                : ""
                                        }`}
                                        aria-label={`Show Image ${image.id}`}
                                    >
                                        <div className="bg-[#D8D8D8] lg:m-3 m-1 rounded-full  lg:p-3 p-1"></div>
                                    </div>
                                </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default InspirationSection
