import Link from "next/link";

function Footer(){


    return(
        <div className="px-20 py-6">
        <div className="flex p-10 justify-between text-l ">
            <div className="w-2/6">
                <h2 className="text-2xl font-bold">Funiro.</h2>
                <p className="text-l text-[#9F9F9F] mt-10 w-[70%]">
                400 University Drive Suite 200 Coral Gables,<br/>
                FL 33134 USA
                </p>
            </div>
            <div className="w-1/6">
                <h3 className="text-[#9F9F9F]">Links</h3>
                <ul className=" mt-10 font-bold flex flex-col gap-10">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li>About</li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="w-1/6">
                <h3 className="text-[#9F9F9F]">Help</h3>
                <ul className="mt-10 font-bold flex flex-col gap-10">
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className="w-2/6">
                <h3 className="text-[#9F9F9F] text-l">Newsletter</h3>
                <div className="flex mt-10 gap-4">
                <input className="border-b-[1px] pb-2 " placeholder="Enter Your Email Address"></input>
                <button className="border-b-[1px] pb-2 uppercase font-bold">Subscribe</button>
                </div>
            </div>
            </div>
            <div className="">
            <hr/>
            <div className="ml-4 mt-4 font-medium">2023 furino. All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer;
