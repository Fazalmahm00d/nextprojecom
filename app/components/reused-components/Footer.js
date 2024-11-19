import Link from "next/link";

function Footer(){

    return(
        <div className="relative text-sm px-4 py-4 sm:w-5/6 lg:w-full lg:px-20 lg:py-6 sm:px-5 sm:py-3 ">
        <div className="grid grid-cols-2  gap-2 sm:flex  sm:flex-nowrap lg:p-10 sm:p-5 justify-between lg:text-l sm:text-sm  ">
            <div className="sm:w-2/6">
                <h2 className="lg:text-2xl font-bold sm:text-xl">Funiro.</h2>
                <p className="lg:text-l sm:text-sm text-[#9F9F9F] lg:mt-10 sm:mt-5 w-[70%]">
                400 University Drive Suite 200 Coral Gables,<br/>
                FL 33134 USA
                </p>
            </div>
            <div className="sm:w-1/6">
                <h3 className="text-[#9F9F9F] sm:mt-1">Links</h3>
                <ul className=" lg:mt-10 sm:mt-6  font-bold flex flex-col lg:gap-10 sm:gap-5">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li>About</li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="sm:w-1/6">
                <h3 className="text-[#9F9F9F] sm:mt-1">Help</h3>
                <ul className="lg:mt-10 sm:mt-6  font-bold flex flex-col lg:gap-10 sm:gap-5">
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className="sm:w-2/6">
                <h3 className="text-[#9F9F9F] text-sm lg:text-l sm:mt-1  sm:text-sm">Newsletter</h3>
                <div className="lg:mt-10 sm:mt-6 text-sm sm:flex lg:text-l">
                <input className="w-full border-b-[1px] pb-2 text-sm lg:text-l " placeholder="Enter Your Email Address"></input>
                <button className="border-b-[1px] pb-2 uppercase font-bold text-sm lg:text-l ">Subscribe</button>
                </div>
            </div>
            </div>
            <div className="">
            <hr/>
            <div className="ml-2 mt-2 sm:ml-4 sm:mt-4 lg:text-xl font-medium sm:ml-2 sm:mt-2 text-sm">2023 furino. All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer;
