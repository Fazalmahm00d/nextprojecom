function Testimonials(props){
    return(
        
            <div className=" text-[#B88E2F] h-[24rem] lg:h-[40rem] shadow-xl rounded-md border-2 border-[#B88E2F] overflow-hidden">
            <div className="relative flex justify-center h-[50%]">
            <img className='w-full h-full' src={props.data.img} alt=""></img>
            <div className="border-2 border-[#B88E2F] w-[4rem]  absolute bottom-[-30px] text-center rounded-[80%] lg:rounded-full p-3 lg:p-5 bg-white text-xl z-30">{props.data.avtext}</div>
            </div>
            <div className="bg-[#F9F1E7] w-full text-black h-[50%]  flex flex-col items-center justify-center px-2  ">
                <div className="text-base lg:text-xl font-bold mt-4 lg:mt-2">{props.data.name}</div>
                <div className="text-sm font-medium ">{props.data.date}</div>
                <div className="text-[10px] lg:text-base font-light mt-2 text-center h-[50%]">{props.data.testimonial}
                </div>
            </div>
        </div>
    
    )
}

export default Testimonials;