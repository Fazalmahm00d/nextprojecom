import ContactForm from "../components/contact-components/ContactForm";
import Banner from "../components/reused-components/Banner";
import Footer from "../components/reused-components/Footer";
import Header from "../components/reused-components/Header";
import ImgSection from "../components/reused-components/ImgSection";

function Contact(){
    return(
        <div>
            <ImgSection name="Contact"/>
            <ContactForm/>
            <Banner/>
        </div>
    )

}

export default Contact;