"use client"
import dynamic from "next/dynamic";

import ImgSectionLoading from "../fallbackloading/ImgSectionLoading";
import ContactFormLoading from "../fallbackloading/ContactFormLoading";
import BannerLoading from "../fallbackloading/BannerLoading";

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
    const Banner=dynamic(
        ()=>import("../components/reused-components/Banner"),
        {
            loading: () => <BannerLoading/>,
            ssr:false,
        } 
    )
    return(
        <div>
            <ImgSection name="Contact"/>
            <ContactForm/>
            <Banner/>
        </div>
    )

}

export default Contact;