"use client"
import dynamic from "next/dynamic";
import CartItems from "../components/cart-components/cartItems";
import Banner from "../components/reused-components/Banner";
import ImgSectionLoading from "../fallbackloading/ImgSectionLoading";

function CartMain(){
    const ImgSection = dynamic(
        () => import("../components/reused-components/ImgSection"),
        {
          loading: () => <ImgSectionLoading/>,
          ssr: false,
        })
    return(
        <div>
            <ImgSection name="Cart"/>
            <CartItems/>
            <Banner/>
        </div>
    )
}

export default CartMain;