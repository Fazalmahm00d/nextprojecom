"use client"
import ImgSectionLoading from "@/app/fallbackloading/ImgSectionLoading";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";

import dynamic from "next/dynamic";
import BannerLoading from "@/app/fallbackloading/BannerLoading";
import { useQuery } from "@tanstack/react-query";
import { getCartByIdData } from "@/app/lib/api";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "@/app/ReduxStore/dataCart";


function ShopMain(){
    const isEmail=useSelector((state)=>state.authReducer.isEmail)
    const dispatch=useDispatch();
    const {data,isLoading,isError,error}=useQuery({
        queryKey:["cartdata"],
        queryFn:()=>getCartByIdData(isEmail),
        enabled: !!isEmail,
        onSuccess:(data)=>{ dispatch(dataAction.setCartArr(data.items))}
    })
    // console.log(queryObj)
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
        if(isLoading){
            return <div>
                loading.....
            </div>
        }
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