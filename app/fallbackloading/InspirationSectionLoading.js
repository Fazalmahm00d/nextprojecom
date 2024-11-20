import Image from "next/image"


function InspirationSectionLoading(){
    return(
        <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row justify-center items-center bg-gray-200 lg:p-10 p-6">
            <div className="sm:w-[40%] flex flex-col items-start justify-center lg:p-10 sm:p-6">
                <div className="lg:text-5xl bg-gray-400 h-28 w-full  text-2xl font-bold "></div>
                <p className="bg-gray-400 h-8 w-48 lg:mt-3 lg:text-xl text-sm lg:pr-10 sm:pr-5"></p>
                <div className="lg:mt-6 mt-3">
                    <div className="bg-gray-400 h-8 w-24"></div> 
                </div>
            </div>
            <div className="sm:w-[60%] flex flex-col sm:flex-row lg:gap-8 sm:gap-6">
                <div className="relative">
                    <div className="bg-gray-400 h-[80vh] w-[50vh]"></div>
                    
                </div>
                <div  >
                    <div className="bg-gray-400 h-[60vh] w-[50vh]"></div>
                    <div className="lg:mt-6 mt-3">
                        <ul className="flex bg-gray-400 h-24 w-full items-center gap-2 lg:gap-3">
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default InspirationSectionLoading