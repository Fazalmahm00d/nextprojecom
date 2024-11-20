"use client"
import dynamic from "next/dynamic";
import FeaturedProducts from "./FeaturedProducts";
import ProductCategoriesLoading from "@/app/fallbackloading/ProductCategoriesLoading";
import HeroSectionLoading from "@/app/fallbackloading/HeroSectionLoading";
import InspirationSectionLoading from "@/app/fallbackloading/InspirationSectionLoading";
import FurniroFurnitureLoading from "@/app/fallbackloading/FurniroFurnitureLoading";

function LandingPage(){
    const ProductCategories=dynamic(
        () => import("./ProductCategories"),
        {
          loading: () => <ProductCategoriesLoading/>,
          ssr: false,
        });

    const HeroSection=dynamic(
        ()=>import("./HeroSection"),
        {
            loading: () => <HeroSectionLoading/>,
            ssr: false,
        });
    const InspirationSection=dynamic(
        ()=>import("./InspirationSection"),
        {
            loading: () => <InspirationSectionLoading/>,
            ssr: false,
        })
        const FurniroFurniture=dynamic(
            ()=>import("./FurniroFurniture"),
            {
                loading: () => <FurniroFurnitureLoading/>,
                ssr: false,
            })
    return(
        <div>
       <HeroSection/>
       <ProductCategories/>
       <FeaturedProducts/>
       <InspirationSection/>
       <FurniroFurniture/>
        </div>
    )
}

export default LandingPage;