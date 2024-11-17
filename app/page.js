import Image from "next/image";
import Header from "./components/reused-components/Header";
import HeroSection from "./components/home-components/HeroSection";
import ProductCategories from "./components/home-components/ProductCategories";
import FeaturedProducts from "./components/home-components/FeaturedProducts";
import InspirationSection from "./components/home-components/InspirationSection";
import FurniroFurniture from "./components/home-components/FurniroFurniture";
import Footer from "./components/reused-components/Footer";

export const metadata={
  title:"Furniro",
  description:"Furniture Website"
}

export default function Home() {
  return (
    <div>
       <HeroSection/>
       <ProductCategories/>
       <FeaturedProducts/>
       <InspirationSection/>
       <FurniroFurniture/>
    </div>
  );
}
