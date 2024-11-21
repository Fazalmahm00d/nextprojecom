function ContactFormLoading(){
    return(
        <div className="py-20">
            <div className="flex flex-col items-center ">
                <h1 className=" bg-gray-200 h-8 w-32"></h1>
                <div className=" text-center bg-gray-200 text-xl w-1/2 text-[#9F9F9F] w-128 h-24 mt-10"></div>
            </div>
            <div className="flex px-40 py-10 mt-10">
                <div className="w-1/2 flex flex-col gap-6">
                    <div className="bg-gray-200 h-20 w-40"></div>
                    <div className="bg-gray-200 h-20 w-40"></div>
                    <div className="bg-gray-200 h-20 w-40"></div>
                </div>
                <div className="w-1/2">
                    <form className="flex flex-col gap-8 text-[#9F9F9F]">
                        <label className=" bg-gray-200 w-32 h-8"></label>
                        <input   className="focus:outline-none w-full p-4 bg-gray-200  h-8 rounded-xl "/>
                        <label className="bg-gray-200 w-32 h-8"></label>
                        <input  className="focus:outline-none w-full p-4 bg-gray-200  h-8 rounded-xl "/>
                        <label className="bg-gray-200 w-32 h-8"></label>
                        <input  className="focus:outline-none w-full bg-gray-200 w-32 h-8 p-4 rounded-xl "/>
                        <label className="bg-gray-200 w-32 h-8"></label>
                        <textarea  className="focus:outline-none w-full h-[8rem] bg-gray-200  p-4 rounded-xl "/>
                        <div className="w-full"><button className="w-1/2 bg-[#B88E2F] text-white px-16 py-4" type="submit">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactFormLoading;