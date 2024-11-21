function ProductCategories(){
    return(
        <div className="flex flex-col items-center py-8 px-4 sm:gap-3 sm:py-8 sm:px-20 lg:gap-6 lg:py-16 lg:px-40">
            <div className="text-center">
                <h1 className="lg:text-3xl text-xl font-bold">Browse The Range</h1>
                <h3 className="lg:text-xl text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className="grid grid-cols-1 px-4 gap-10 sm:flex lg:gap-10 lg:mt-10 sm:gap-5 mt-5">
                <div className="text-center ">
                    <div className="overflow-hidden rounded-xl">
                        <img className="h-full hover:scale-[1.2] duration-300" src="/assets/Mask Group (5).png"></img>
                    </div>
                    <div className="lg:mt-4 sm:mt-2 font-bold lg:text-xl sm:text-sm">Dining</div>
                </div>
                <div className="text-center ">
                    <div className="overflow-hidden rounded-xl">
                    <img className="h-full hover:scale-[1.2] duration-300" src="/assets/Image-living room.png"></img>
                    </div>
                    <div className="lg:mt-4 sm:mt-2 font-bold lg:text-xl sm:text-sm">Living</div>
                </div>

                <div className="text-center ">
                    <div className="overflow-hidden rounded-xl">
                    <img className="h-full hover:scale-[1.2] duration-300" src="/assets/Mask Group (6).png"></img>
                    </div>
                    <div className="lg:mt-4 sm:mt-2 font-bold lg:text-xl sm:text-sm">Bedroom</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategories;