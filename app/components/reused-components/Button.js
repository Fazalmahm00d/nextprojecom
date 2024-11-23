function Button(props){

    return(

        <button onClick={props.onClick} className={`${props.className} font-bold text-sm sm:text-l lg:text-xl border border-[#B88E2F] duration-300 px-4 sm:px-8 py-2  lg:px-16 lg:py-5`}> 
            {props.text}

        </button>
    )
}

export default Button;