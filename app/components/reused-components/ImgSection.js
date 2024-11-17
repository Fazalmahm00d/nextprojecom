import Image from "next/image";

function ImgSection(props){
    return(
        <div className="relative">
        <div className="absolute z-20 inset-0 bg-white bg-opacity-[0.3] backdrop-blur-sm"></div>
        <div className="flex flex-col justify-center items-center h-[40vh] w-full bg-center bg-cover bg-[url('/assets/bgimage.jpeg')]">
            <h1 className="z-50 text-5xl font-bold tracking-wide">{props.name}</h1>
            <div className="z-50 mt-2 flex gap-2 items-center text-xl"><span className="font-bold">Home</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
</svg>
{props.name}
            </div>
        </div>
        </div>
    )
}

export default ImgSection;