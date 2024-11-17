function HeroSection(){
    return(
        <div className="relative">
            <img className="w-full h-[100vh]" src="/assets/scandinavian-interior-mockup-wall-decal-background 1.png"></img>
            <div class="absolute top-[70px] right-[100px ] hero-bg w-full flex justify-end items-center lg:py-[250px] h-[85vh] px-8 lg:px-20">
                <div class="w-1/2 p-10 rounded-lg text-dark-text bg-[#FFF3E3]">
                    <p class="font-semibold text-base letter tracking-[3px] pb-2 pt-6">New Arrival</p>
                    <h1 class="font-bold text-6xl text-[#B88E2F] pb-4">Discover Our <br/> New Collection</h1>
                    <p class="text-lg font-medium  pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button class="font-bold uppercase bg-[#B88E2F]
                    border border-[#B88E2F] hover:bg-transparent hover:text-[#B88E2F] duration-300  px-16 py-5 text-white">Buy now</button>
                </div>
            </div>
        </div>

    )
}

export default HeroSection;