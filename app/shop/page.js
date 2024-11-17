import Banner from "../components/reused-components/Banner";
import Footer from "../components/reused-components/Footer";
import Header from "../components/reused-components/Header";
import ImgSection from "../components/reused-components/ImgSection";
import Filter from "../components/shop-components/Filter";
import ProductGrid from "../components/shop-components/ProductGrid";


export const metadata={
    title:"Shop Page",
    description:"shop page"
}


const Shop=()=>{
    return(
        <div>
            <ImgSection name="Shop"/>
            <Filter/>
            <ProductGrid/>
            <Banner/>
        </div>
    )
}

export default Shop;