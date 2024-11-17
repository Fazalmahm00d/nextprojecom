import Link from "next/link";

function CartItems(){
    return(
        <div className="p-20 flex gap-8">
            <div className="w-2/3">
                <div className="bg-[#F9F1E7] flex justify-around items-center h-[10vh]">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
            </div>
            <div className="w-1/3 bg-[#F9F1E7] px-10 py-6 h-[40vh]">
                <h2 className="font-bold text-3xl text-center">Cart Totals</h2>
                 <div className=" flex flex-col items-center justify-center h-full px-10">
                 <div className="flex justify-between w-full">
                    <p className="font-bold">SubTotals</p>
                    <p className="text-xl text-[#9F9F9F]">Rs.0</p>
                 </div>
                 <div className="flex justify-between w-full mt-6">
                    <p className="font-bold">Total</p>
                    <p className="text-[#B88E2F] text-2xl">Rs.0</p>
                 </div>
                 <div className="mt-6">
                    <Link href='/checkout'><button className="px-8 py-4 border-2 border-black border-solid rounded-xl">Check Out</button></Link>
                 </div>
                 </div>
            </div>
        </div>
    )
}

export default CartItems;