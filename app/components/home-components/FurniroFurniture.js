import Image from "next/image"
import SubFurniroFurniture from "./SubFurniroFurniture"

function FurniroFurniture(){
    return(
        <div className="bg-gray-50 flex justify-center items-center ">
        <div className=" w-full lg:py-20 py-10 ">
        <h1 className="text-center lg:text-xl text-sm font-light ">Share your setup with</h1>
        <h2 className="text-center lg:text-4xl text-xl font-bold">#FuniroFurniture</h2>
        
        <div className="grid sm:grid-cols-11 sm:grid-rows-8 lg:gap-4 sm:gap-2 lg:h-[90vh] sm:[60vh]">
            <SubFurniroFurniture style="overflow-hidden  col-start-1 col-span-1 col-end-2 row-span-4 row-start-1 row-end-5 " alt="Image 1" img="/furniroimg/Rectangle 36.png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-2 col-span-4 col-end-6 row-span-3 row-start-2 row-end-5" alt="Image 2" img="/furniroimg/Rectangle 38 (1).png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-6 col-span-2 col-end-8 row-span-4 row-start-3 row-end-7" alt="Image 3" img="/furniroimg/Rectangle 40.png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-3 col-span-3 col-end-6 row-span-3 row-start-5 row-end-8" alt="Image 4" img="/furniroimg/Rectangle 39.png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-8 col-span-1 col-end-9 row-span-3 row-start-6 row-end-9" alt="Image 5" img="/furniroimg/Rectangle 41.png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-8 col-span-2 col-end-10 row-span-4 row-start-2 row-end-6" alt="Image 6" img="/furniroimg/Rectangle 43.png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-10 col-span-2 col-end-12 row-span-5 row-start-1 row-end-6" alt="Image 7" img="/furniroimg/Rectangle 45.png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-1 col-span-2 col-end-3 row-span-4 row-start-5 row-end-9" alt="Image 8" img="/furniroimg/Rectangle 37.png"/>
            <SubFurniroFurniture style="overflow-hidden  col-start-9 col-span-2 col-end-11 row-span-2 row-start-6 row-end-8" alt="Image 9" img="/furniroimg/Rectangle 44.png"/>
        </div>
    </div>
    </div>
    )
}

export default FurniroFurniture