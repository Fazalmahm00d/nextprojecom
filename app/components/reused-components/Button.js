function Button(props){

    return(

        <button onClick={props.onClick} className={`${props.bgColor} ${props.style} font-bold  border border-[#B88E2F] duration-300  px-16 py-5`}> 
            {props.text}

        </button>
    )
}

export default Button;