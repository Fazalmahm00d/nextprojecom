import SubFurniroFurniture from "../components/home-components/SubFurniroFurniture";


function FurniroFurnitureLoading(){
    return(
        <div className="bg-gray-50 flex justify-center items-center ">
        <div className=" w-full lg:py-20 py-10 ">
        <div className="flex flex-col items-center">
        <div className="text-center w-32 h-10 bg-gray-200 "></div>
        <div className="text-center mt-4 w-64 h-10 bg-gray-200 lg:text-4xl text-xl font-bold"></div>
        </div>
        
        <div className="grid grid-cols-11 lg:grid-rows-8 lg:gap-4 gap-2 lg:h-[90vh] h-60vh">
            <SubFurniroFurniture className="animate-pulse col-start-1 col-span-1 col-end-2 row-span-4 row-start-1 row-end-5 bg-gray-200 "  />
            <SubFurniroFurniture className="animate-pulse col-start-2 col-span-4 col-end-6 row-span-3 row-start-2 row-end-5 bg-gray-200"  />
            <SubFurniroFurniture className="animate-pulse col-start-6 col-span-2 col-end-8 row-span-4 row-start-3 row-end-7 bg-gray-200"  />
            <SubFurniroFurniture className="animate-pulse col-start-3 col-span-3 col-end-6 row-span-3 row-start-5 row-end-8 bg-gray-200" />
            <SubFurniroFurniture className="animate-pulse col-start-8 col-span-1 col-end-9 row-span-3 row-start-6 row-end-9 bg-gray-200" />
            <SubFurniroFurniture className="animate-pulse col-start-8 col-span-2 col-end-10 row-span-4 row-start-2 row-end-6 bg-gray-200" />
            <SubFurniroFurniture className="animate-pulse col-start-10 col-span-2 col-end-12 row-span-5 row-start-1 row-end-6 bg-gray-200" />
            <SubFurniroFurniture className="animate-pulse col-start-1 col-span-2 col-end-3 row-span-4 row-start-5 row-end-9 bg-gray-200" />
            <SubFurniroFurniture className="animate-pulse col-start-9 col-span-2 col-end-11 row-span-2 row-start-6 row-end-8 bg-gray-200" />
        </div>
    </div>
    </div>
    )
}

export default FurniroFurnitureLoading;