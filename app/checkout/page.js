import Billing from "../components/checkout-components/Billing";
import Banner from "../components/reused-components/Banner";
import Footer from "../components/reused-components/Footer";
import Header from "../components/reused-components/Header";
import ImgSection from "../components/reused-components/ImgSection";

function CheckOut(){
    return(
        <div>
            <Header/>
            <ImgSection name="CheckOut"/>
            <Billing/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default CheckOut;