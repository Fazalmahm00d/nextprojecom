import Image from "next/image"

function InspirationSection(){
    return(
        <div className="flex justify-center items-center bg-[#FCF8F3] p-10">
            <div className="w-[40%] flex flex-col items-start justify-center p-10">
                <div className="text-5xl font-bold">50+ Beautiful rooms 
                inspiration</div>
                <p className="text-[#616161] text-xl pr-10">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <div className="mt-6">
                    <button className="bg-[#B88E2F] text-white px-12 py-4 font-bold text-xl">Explore More</button>
                </div>
            </div>
            <div className="w-[60%] flex gap-8">
                <div className="relative">
                    <img src="/assets/Rectangle 24.png"></img>
                    <div className="absolute z-10 bottom-10 left-10 flex items-end ">
                        <div className=" bg-[#FFFFFFB8] backdrop-blur-sm p-6 bg-opacity-0 backdrop-opacity-10">
                        <div className="font-light text-xl">01 ---- Bed Room</div>
                        <div className="font-bold text-3xl mt-4">Inner Peace</div>
                        </div>
                        <div className="bg-[#B88E2F] p-3 h-12">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/assets/Rectangle 25.png"></img>
                    <div className="mt-6">
                        <ul className="flex items-center gap-5">
                            <li>
                                <div className="border-2 border-[#B88E2F] rounded-full  p-1">
                                    <div className=" rounded-full">
                                    <div className="bg-[#B88E2F] border-1 m-2 rounded-full border-[#B88E2F] p-3"></div>
                                    </div>
                                </div>
                            </li>
                            <li><div className="bg-[#D8D8D8] m-3 rounded-full  p-3"></div></li>
                            <li><div className="bg-[#D8D8D8] m-3 rounded-full  p-3"></div></li>
                            <li><div className="bg-[#D8D8D8] m-3 rounded-full  p-3"></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InspirationSection