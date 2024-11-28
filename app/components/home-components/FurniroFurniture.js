import Image from "next/image"
import SubFurniroFurniture from "./SubFurniroFurniture"
import { useState } from "react";

function FurniroFurniture(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        { id: 2, src: "/furniroimg/Rectangle 38 (1).png", alt: "Image 2",desc: "02 ---- Living Room",desc2:"Inner " },
        { id: 3, src: "/furniroimg/Rectangle 40.png", alt: "Image 3",desc: "03 ---- Kitchen Room",desc2:"Inner " },
        { id: 4, src: "/furniroimg/Rectangle 39.png", alt: "Image 4",desc: "04 ---- Bath Room",desc2:"Inner " },
        { id: 5, src: "/furniroimg/Rectangle 41.png", alt: "Image 4",desc: "04 ---- Bath Room",desc2:"Inner " },
        { id: 6, src: "/furniroimg/Rectangle 43.png", alt: "Image 4",desc: "04 ---- Bath Room",desc2:"Inner " },
        { id: 7, src: "/furniroimg/Rectangle 45.png", alt: "Image 4",desc: "04 ---- Bath Room",desc2:"Inner " },
        { id: 8, src: "/furniroimg/Rectangle 37.png", alt: "Image 4",desc: "04 ---- Bath Room",desc2:"Inner " },
        { id: 9, src: "/furniroimg/Rectangle 44.png", alt: "Image 4",desc: "04 ---- Bath Room",desc2:"Inner " },
    ];
    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    return(
        <div className="bg-gray-50 flex justify-center items-center ">
        <div className=" w-full lg:py-20 py-10 ">
        <h1 className="text-center lg:text-xl text-sm font-light ">Share your setup with</h1>
        <h2 className="text-center lg:text-4xl text-xl font-bold">#FuniroFurniture</h2>
        
        <div className="hidden sm:grid sm:grid-cols-11 sm:grid-rows-8 lg:gap-4 sm:gap-2 lg:h-[90vh] sm:[60vh]">
                    <SubFurniroFurniture 
            className="overflow-hidden  col-start-1 col-span-1 col-end-2 row-span-4 row-start-1 row-end-5" 
            alt="Image 1" 
            img="/furniroimg/Rectangle 36.png"
        />
                    <SubFurniroFurniture 
            className="overflow-hidden col-start-2 col-span-4 col-end-6 row-span-3 row-start-2 row-end-5" 
            alt="Image 2" 
            img="/furniroimg/Rectangle 38 (1).png"
        />
        <SubFurniroFurniture 
            className="overflow-hidden col-start-6 col-span-2 col-end-8 row-span-4 row-start-3 row-end-7" 
            alt="Image 3" 
            img="/furniroimg/Rectangle 40.png"
        />
        <SubFurniroFurniture 
            className="overflow-hidden col-start-3 col-span-3 col-end-6 row-span-3 row-start-5 row-end-8" 
            alt="Image 4" 
            img="/furniroimg/Rectangle 39.png"
        />
        <SubFurniroFurniture 
            className="overflow-hidden col-start-8 col-span-1 col-end-9 row-span-3 row-start-6 row-end-9" 
            alt="Image 5" 
            img="/furniroimg/Rectangle 41.png"
        />
        <SubFurniroFurniture 
            className="overflow-hidden col-start-8 col-span-2 col-end-10 row-span-4 row-start-2 row-end-6" 
            alt="Image 6" 
            img="/furniroimg/Rectangle 43.png"
        />
        <SubFurniroFurniture 
            className="overflow-hidden col-start-10 col-span-2 col-end-12 row-span-5 row-start-1 row-end-6" 
            alt="Image 7" 
            img="/furniroimg/Rectangle 45.png"
        />
        <SubFurniroFurniture 
            className="overflow-hidden col-start-1 col-span-2 col-end-3 row-span-4 row-start-5 row-end-9" 
            alt="Image 8" 
            img="/furniroimg/Rectangle 37.png"
        />
        <SubFurniroFurniture 
            className="overflow-hidden col-start-9 col-span-2 col-end-11 row-span-2 row-start-6 row-end-8" 
            alt="Image 9" 
            img="/furniroimg/Rectangle 44.png"
        />
        </div>
        <div className="relative flex justify-center sm:hidden">
                    {/* <img src="/assets/Rectangle 24.png"></img> */}
                    
                <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="relative h-[20rem] w-[20rem] object-cover rounded-md shadow"
                />
        
                    {/* <div className="absolute z-10  lg:bottom-10 lg:left-10 bottom-5 left-5 flex items-end ">
                        <div className=" bg-[#FFFFFFB8] backdrop-blur-sm lg:p-6 p-2 bg-opacity-0 backdrop-opacity-10">
                        <div className="font-light lg:text-xl sm:text-sm">{images[currentImageIndex].desc}</div>
                        <div className="font-bold lg:text-3xl lg:mt-4 sm:text-xl sm:mt-1">{images[currentImageIndex].desc2}</div>
                        </div>
                        <div className="bg-[#B88E2F] lg:p-3 lg:h-12 p-1 h-8">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                    </div> */}

                </div>

                <div className="sm:hidden lg:mt-6 mt-3 px-10">
                        <ul className="flex items-center  ">
                            {/* <li>
                                <div className="border-2 border-[#B88E2F] rounded-full  lg:p-1 sm:p-0">
                                    <div className=" rounded-full">
                                    <div className="bg-[#B88E2F] border-1 lg:m-2 m-1 rounded-full border-[#B88E2F] lg:p-3 p-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li><div className="bg-[#D8D8D8] lg:m-3 m-1 rounded-full  lg:p-3 p-1"></div></li>
                            <li><div className="bg-[#D8D8D8] lg:m-3 m-1 rounded-full  lg:p-3 p-1"></div></li>
                            <li><div className="bg-[#D8D8D8] lg:m-3 m-1 rounded-full  lg:p-3 p-1"></div></li> */}
                            {
                                images.map((image, index) => (
                                <li key={image.id}>
                                    <div
                                        onClick={() => handleImageChange(index)}
                                        className={`cursor-pointer p-2 rounded focus:outline-none ${
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
    )
}

export default FurniroFurniture