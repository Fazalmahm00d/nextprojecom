function SubFurniroFurniture(props){
    return <div className={`${props.className} rounded-md overflow-hidden `}>
        <img src={props.img} alt={props.alt} className="w-full h-full object-cover  shadow hover:scale-[1.2]  duration-300 "/>
    </div>

}

export default SubFurniroFurniture