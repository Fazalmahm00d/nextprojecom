import Image from "next/image"

function FurniroFurniture(){
    return(
        <div className="bg-gray-50 flex justify-center items-center ">
        <div class=" w-full py-20  ">
        <h1 class="text-center text-xl font-light ">Share your setup with</h1>
        <h2 className="text-center text-4xl font-bold">#FuniroFurniture</h2>
        
        <div class="grid grid-cols-11 grid-rows-8 gap-4 h-[90vh]">
            <div class="col-start-1 col-span-1 col-end-2 row-span-4 row-start-1 row-end-5 ">
                <img src="/furniroimg/Rectangle 36.png" alt="Image 1" class="w-full h-full object-cover rounded-md shadow"/>
            </div>

            <div class="col-start-2 col-span-4 col-end-6 row-span-3 row-start-2 row-end-5">
                <img src="/furniroimg/Rectangle 38 (1).png" alt="Image 2" class="w-full h-full object-cover rounded-md shadow"/>
            </div>

            <div class="col-start-6 col-span-2 col-end-8 row-span-4 row-start-3 row-end-7">
                <img src="/furniroimg/Rectangle 40.png" alt="Image 3" class="w-full h-full object-cover rounded-md shadow"/>
            </div>

            <div class="col-start-3 col-span-3 col-end-6 row-span-3 row-start-5 row-end-8">
                <img src="/furniroimg/Rectangle 39.png" alt="Image 4" class="w-full h-full object-cover rounded-md shadow"/>
            </div>

            <div class="col-start-8 col-span-1 col-end-9 row-span-3 row-start-6 row-end-9">
                <img src="/furniroimg/Rectangle 41.png" alt="Image 5" class="w-full h-full object-cover rounded-md shadow"/>
            </div>
            <div class="col-start-8 col-span-2 col-end-10 row-span-4 row-start-2 row-end-6">
                <img src="/furniroimg/Rectangle 43.png" alt="Image 6" class="w-full h-full object-cover rounded-md shadow"/>
            </div>
            <div class="col-start-10 col-span-2 col-end-12 row-span-5 row-start-1 row-end-6">
                <img src="/furniroimg/Rectangle 45.png" alt="Image 7" class="w-full h-full object-cover rounded-md shadow"/>
            </div>
            <div class="col-start-1 col-span-2 col-end-3 row-span-4 row-start-5 row-end-9">
                <img src="/furniroimg/Rectangle 37.png" alt="Image 8" class="w-full h-full object-cover rounded-md shadow"/>
            </div>
            <div class="col-start-9 col-span-2 col-end-11 row-span-2 row-start-6 row-end-8">
                <img src="/furniroimg/Rectangle 44.png" alt="Image 9" class="w-full h-full object-cover rounded-md shadow"/>
            </div>
        </div>
    </div>
    </div>
    )
}

export default FurniroFurniture