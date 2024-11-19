function SvgComponent(props){
    return(
        <div className="flex justify-between items-center gap-1 text-sm ">
            {props.svg}
            <p>{props.name}</p>
        </div>
    )
}

export default SvgComponent;