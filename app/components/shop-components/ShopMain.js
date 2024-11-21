"use client"
import ImgSectionLoading from "@/app/fallbackloading/ImgSectionLoading";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";

import dynamic from "next/dynamic";
import BannerLoading from "@/app/fallbackloading/BannerLoading";


function ShopMain(){
    const ImgSection = dynamic(
        () => import("../reused-components/ImgSection"),
        {
          loading: () => <ImgSectionLoading/>,
          ssr: false,
        })

    const Banner=dynamic(
        () => import("../reused-components/Banner"),
        {
            loading: () => <BannerLoading/>,
            ssr:false,
        }
        )
    return(
        <div>
            <ImgSection name="Shop"/>
            <Filter/>
            <ProductGrid/>
            <Banner/>
        </div>
    )
     
}

export default ShopMain;