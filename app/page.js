import HeroSection from "./components/home-components/HeroSection";
import ProductCategories from "./components/home-components/ProductCategories";
import FeaturedProducts from "./components/home-components/FeaturedProducts";
import InspirationSection from "./components/home-components/InspirationSection";
import FurniroFurniture from "./components/home-components/FurniroFurniture";


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
