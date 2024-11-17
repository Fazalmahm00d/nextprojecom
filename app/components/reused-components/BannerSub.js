function BannerSub(props){
    return(
        <div className="flex items-center gap-2">
                <div className="h-16 w-16">
                {props.svg}
                </div>
                <div className="h-full">
                    <h2 className="text-2xl font-bold">{props.name}</h2>
                    <p className="text-xl text-[#898989]">{props.desc}</p>
                </div>
         </div>
    )
}

export default BannerSub;