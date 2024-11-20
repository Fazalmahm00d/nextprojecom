function ProductCategoriesLoading(){
    return(
        <div className="flex flex-col items-center py-8 px-4 sm:gap-3 sm:py-8 sm:px-20 lg:gap-6 lg:py-16 lg:px-40">
        <div className="flex flex-col items-center text-center w-full">
            <h1 className="w-32 h-4 bg-gray-200"></h1>
            <h3 className="w-1/2 h-8 bg-gray-200 mt-4"></h3>
        </div>
        <div className="grid grid-cols-1 px-4 gap-10 sm:flex lg:gap-10 lg:mt-10 sm:gap-5 mt-5">
            <div className="text-center flex flex-col items-center">
                <div className="h-[24rem] w-[18rem] bg-gray-200"></div>
                <div className="mt-3 w-16 h-4 bg-gray-200"></div>
            </div>
            <div className="text-center  flex flex-col items-center ">
                 <div className="h-[24rem] w-[18rem] bg-gray-200"></div>
                <div className="mt-3 w-16 h-4 bg-gray-200"></div>
            </div>
            <div className="text-center  flex flex-col items-center">
                <div className="h-[24rem] w-[18rem] bg-gray-200"></div>
                <div className="mt-3 w-16 h-4 bg-gray-200"></div>
            </div>
        </div>
    </div>
    )
}

export default ProductCategoriesLoading