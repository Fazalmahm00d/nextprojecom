"use client";

import dynamic from "next/dynamic";
import Billing from "../components/checkout-components/Billing";
import Banner from "../components/reused-components/Banner";
import ImgSectionLoading from "../fallbackloading/ImgSectionLoading";



function CheckOut(){
    const ImgSection = dynamic(
        () => import("../components/reused-components/ImgSection"),
        {
          loading: () => <ImgSectionLoading/>,
          ssr: false,
        }
      );
    return(
        <div>

            <ImgSection name="CheckOut"/>
            <Billing/>
            <Banner/>
            
        </div>
    )
}

export default CheckOut;





