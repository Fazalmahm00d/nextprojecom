function ContactSub(props){
    return <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left justify-center py-10 sm:py-0 px-5 sm:px-0 sm:gap-8 lg:gap-4">
        <div className="flex  items-center justify-center h-[2rem] h-8 w-8 sm:px-1 lg:h-16 lg:w-16 lg:px-2 ">
            {props.svg}
        </div>
        <div className="h-[8rem] sm:w-1/2 lg:w-1/3">
            <h2 className="text-sm lg:text-2xl font-bold">{props.name}</h2>
            <p className="text-sm mt-3 lg:text-l">{props.p1}</p>
            <p> {props.p2}</p>
        </div>
    </div>
}

export default ContactSub;