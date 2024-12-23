import { toast } from "react-toastify";

function SvgComponent(props){
    return(
        <div onClick={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            props.isEmail ? props.addToWishHandler(props.items.img,props.items.name,props.items.desc,props.items.price):toast.error("Log In to access wishlist")
        }} className="flex justify-between items-center gap-1 text-sm ">
            {props.svg}
            <p>{props.name}</p>
        </div>
    )
}

export default SvgComponent;