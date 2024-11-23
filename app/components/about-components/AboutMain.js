"use client"

import Banner from "../reused-components/Banner";
import ImgSection from "../reused-components/ImgSection";
import Story from "./Story";
import TestimonialsSection from "./TestimonialsSection";

function AboutMain(){
    return(
        <div>
            <ImgSection name="About"/>
            <Story/>
            <TestimonialsSection/>
            <Banner/>
        </div>
    )
}

export default AboutMain;