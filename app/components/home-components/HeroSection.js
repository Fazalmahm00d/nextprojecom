import Button from "../reused-components/Button";

function HeroSection(){
    return(
        <div className="relative">
            <img className="w-full h-[100vh]" src="/assets/scandinavian-interior-mockup-wall-decal-background 1.png"></img>
            <div className="absolute top-[70px] right-[100px ] hero-bg w-full flex justify-end items-center lg:py-[250px] h-[85vh] px-8 lg:px-20">
                <div className="w-1/2 p-10 rounded-lg text-dark-text bg-[#FFF3E3]">
                    <p className="font-semibold text-base letter tracking-[3px] pb-2 pt-6">New Arrival</p>
                    <h1 className="font-bold text-6xl text-[#B88E2F] pb-4">Discover Our <br/> New Collection</h1>
                    <p className="text-lg font-medium  pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <Button text="Buy Now" bgColor='bg-[#B88E2F]' style="
                     hover:bg-transparent hover:text-[#B88E2F] uppercase text-white"/> 
                </div>
            </div>
        </div>

    )
}

export default HeroSection;