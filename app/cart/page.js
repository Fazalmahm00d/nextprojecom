import CartItems from "../components/cart-components/cartItems";
import Banner from "../components/reused-components/Banner";
import Footer from "../components/reused-components/Footer";
import Header from "../components/reused-components/Header";
import ImgSection from "../components/reused-components/ImgSection";

function Cart(){

    return(
        <div>
            <Header/>
            <ImgSection name="Cart"/>
            <CartItems/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Cart;