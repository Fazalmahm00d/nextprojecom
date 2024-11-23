function Testimonials(props){
    return(
        
            <div className=" text-[#B88E2F]  h-[40rem] shadow-xl rounded-md border-2 border-[#B88E2F] overflow-hidden">
            <div className="relative flex justify-center h-[50%]">
            <img className='w-full h-full' src={props.data.img} alt=""></img>
            <div className="border-2 border-[#B88E2F] w-[20%]  absolute bottom-[-30px] text-center rounded-full p-5 bg-white text-xl z-50">{props.data.avtext}</div>
            </div>
            <div className="relative bg-[#F9F1E7] text-black h-[50%]  flex flex-col items-center justify-center  px-10  ">
                <div className=" text-xl font-bold mt-2">{props.data.name}</div>
                <div className="text-sm font-medium ">{props.data.date}</div>
                <div className="text-base font-light mt-2 text-center h-[50%]">{props.data.testimonial}
                </div>
            </div>
        </div>
    
    )
}

export default Testimonials;