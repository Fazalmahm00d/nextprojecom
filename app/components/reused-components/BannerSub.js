function BannerSub(props){
    return(
        <div className="flex items-center   sm:flex-row sm:justify-none  flex-col   justify-center gap-10  lg:gap-2">
                <div className="h-8 w-8 lg:h-16 lg:w-16">
                {props.svg}
                </div>
                <div className="h-full w-full text-center sm:text-left">
                    <div className="text-2xl font-bold ">{props.name}</div>
                    <div className="text-xl text-[#898989]">{props.desc}</div>
                </div>
         </div>
    )
}

export default BannerSub;