function ContactSub(props){
    return <div className="flex gap-4">
        <div className="h-8 w-8 px-2 ">
            {props.svg}
        </div>
        <div className="w-1/3">
            <h2 className="text-2xl font-bold">{props.name}</h2>
            <p className="text-l">{props.p1}</p>
            <p> {props.p2}</p>
        </div>
    </div>
}

export default ContactSub;