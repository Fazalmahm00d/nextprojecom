function ProductCategories(){
    return(
        <div className="flex flex-col items-center gap-6 py-16 px-40">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Browse The Range</h1>
                <h3 className="text-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className="flex gap-10 mt-10">
                <div className="text-center ">
                    <img className="h-full" src="/assets/Mask Group (5).png"></img>
                    <div className="mt-4 font-bold text-xl">Dining</div>
                </div>
                <div className="text-center ">
                    <img className="h-full" src="/assets/Image-living room.png"></img>
                    <div className="mt-4 font-bold text-xl">Living</div>
                </div>
                <div className="text-center ">
                    <img className="h-full" src="/assets/Mask Group (6).png"></img>
                    <div className="mt-4 font-bold text-xl">Bedroom</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategories;