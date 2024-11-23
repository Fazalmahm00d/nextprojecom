"use client"
import BannerLoading from "@/app/fallbackloading/BannerLoading";
import ContactFormLoading from "@/app/fallbackloading/ContactFormLoading";
import ImgSectionLoading from "@/app/fallbackloading/ImgSectionLoading";
import dynamic from "next/dynamic";


function ContactMain(){
    const ImgSection = dynamic(
        () => import("../reused-components/ImgSection"),
        {
          loading: () => <ImgSectionLoading/>,
          ssr: false,
        })
    const ContactForm=dynamic(
        () => import("./ContactForm"),
        {
          loading: () => <ContactFormLoading/>,
          ssr: false,
        })
    const Banner=dynamic(
        ()=>import("../reused-components/Banner"),
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

export default ContactMain;