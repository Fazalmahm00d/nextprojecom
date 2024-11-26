import Button from "../reused-components/Button";

function Story(){
    return(
        <div className="px-6 py-10 sm:px-20 sm:py-6 lg:px-40 lg:py-10  text-xl text-[#B88E2F] ">
            <h1 className="text-black text-2xl font-bold">
                About the Brand
            </h1>
            <p className="italic mt-3">
            &#34;<span className="font-bold text-2xl"> Welcome to Furniro! </span>We are passionate about transforming your living spaces into something truly extraordinary. Our mission is to offer high-quality, stylish, and affordable furniture that complements your lifestyle and enhances your home.&#34;
            </p>
            <h1 className="text-black lg:text-2xl text-l font-bold mt-5">
            Our Story
            </h1>
            <p className="italic mt-3">
            &#34; Founded in 2012, Furniro started as a small workshop with a big dream—bringing craftsmanship and creativity to every home. Over the years, we've grown into a trusted name, serving <span className="font-bold text-2xl"> thousands of happy customers</span>.&#34;
            </p>
            <h1 className="text-black lg:text-2xl text-l font-bold mt-5">Core Values</h1>
            <p className="italic mt-3">
            &#34; At Furniro, we prioritize <span className="font-bold text-2xl">sustainability, innovation, and exceptional craftsmanship</span>. Each piece of furniture is designed with care, ensuring that it’s not just a product but a story you can cherish for years.&#34;
            </p>
            <h1 className="text-black lg:text-2xl text-l font-bold mt-5">What We Offer</h1>
            <p className="italic mt-3">
            &#34; We specialize in a wide range of furniture, from cozy sofas and elegant dining tables to chic office setups. <span className="font-bold text-2xl">With customization options and free delivery</span>, we aim to make your shopping experience seamless.&#34;
            </p>
            <div className="flex mt-6 sm:mt-10 justify-center">
            <button className="text-sm lg:text-l w-1/2 py-2 lg:w-1/4 py-2 lg:text-xl bg-[#B88E2F] text-white  lg:py-4 border-[1px] border-[#B88E2F] rounded-xl px-2 lg:px-4 hover:bg-transparent hover:text-[#B88E2F]" >Explore our Products</button>
            </div>
        </div>
    )
}

export default Story;