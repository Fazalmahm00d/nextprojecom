"use client"
import dynamic from "next/dynamic";
import Banner from "../components/reused-components/Banner";
import ImgSectionLoading from "../fallbackloading/ImgSectionLoading";
import ContactFormLoading from "../fallbackloading/ContactFormLoading";

function Contact(){
    const ImgSection = dynamic(
        () => import("../components/reused-components/ImgSection"),
        {
          loading: () => <ImgSectionLoading/>,
          ssr: false,
        })
    const ContactForm=dynamic(
        () => import("../components/contact-components/ContactForm"),
        {
          loading: () => <ContactFormLoading/>,
          ssr: false,
        })
    return(
        <div>
            <ImgSection name="Contact"/>
            <ContactForm/>
            <Banner/>
        </div>
    )

}

export default Contact;