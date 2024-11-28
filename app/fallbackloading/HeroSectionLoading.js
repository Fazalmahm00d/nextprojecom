function HeroSectionLoading(){
    return(
        <div className="relative">
            <div className="object-cover h-[90vh] w-full bg-gray-200  lg:h-[100vh] sm:h-[75vh]" src="/assets/scandinavian-interior-mockup-wall-decal-background 1.png"></div>
            <div className="absolute top-0 flex justify-center items-center h-full w-full sm:bottom-[-10px] sm:right-[20px] lg:top-[70px] lg:right-[100px] sm:justify-end sm:items-center lg:py-[250px] sm:h-[85vh] sm:px-8 lg:px-20">
                <div className="w-2/3 sm:w-1/2 lg:p-10 sm:w-2/5 rounded-lg p-4 bg-gray-300 z-30">
                    <p className="font-semibold animate-pulse text-base mt-2 letter bg-gray-500 tracking-[3px] pb-2 pt-6"></p>
                    <h1 className="animate-pulse font-bold lg:text-5xl mt-2 bg-gray-500 text-2xl sm:text-3xl h-[20vh] text-[#B88E2F] lg:pb-4 pb-2"></h1>
                    <p className="lg:text-lg sm:text-md bg-gray-500 mt-2 font-medium sm:pb-6 lg:pb-12 animate-pulse"></p>
                    <div className="bg-gray-200 w-24 h-8 bg-gray-500 z-30 mt-2"></div> 
                </div>
            </div>
        </div>
    )
}

export default HeroSectionLoading;