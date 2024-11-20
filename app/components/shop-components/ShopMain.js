"use client"
import ImgSectionLoading from "@/app/fallbackloading/ImgSectionLoading";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";
import Banner from "../reused-components/Banner";
import dynamic from "next/dynamic";


function ShopMain(){
    const ImgSection = dynamic(
        () => import("../reused-components/ImgSection"),
        {
          loading: () => <ImgSectionLoading/>,
          ssr: false,
        })
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