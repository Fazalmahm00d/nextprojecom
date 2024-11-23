function BannerSub(props){
    return(
        <div className="flex items-center gap-2">
                <div className="h-16 w-16">
                {props.svg}
                </div>
                <div className="h-full w-full">
                    <div className="text-2xl font-bold ">{props.name}</div>
                    <div className="text-xl text-[#898989]">{props.desc}</div>
                </div>
         </div>
    )
}

export default BannerSub;