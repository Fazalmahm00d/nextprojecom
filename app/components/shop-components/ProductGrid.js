"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "@/app/ReduxStore/dataCart";
import FeaturedCompo from "../home-components/FeaturedCompo";

function ProductGrid(){
    const dispatch=useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const filteredData=useSelector((state)=>state.dataReducer.filteredData);
    const products=[
        {
            id:1,
            img:"/assets/Images (3).png",
            name:"Syltherine",
            desc:"Stylish cafe table",
            price:25000,
            category:"Tables"
        },
        {   
            id:2,
            img:"/assets/Images.png",
            name:"Leviosa",
            desc:"Stylish cafe chair",
            price:35000,
            category:"Chairs"
        },
        {
            id:3,
            img:"/assets/image 3.png",
            name:"Loloto",
            desc:"Luxury Sofa Set",
            price:25000,
            category:"Sofas"
        },
        {
            id:4,
            img:"/assets/image 4.png",
            name:"Respira",
            desc:"Outdoor bar table and stool",
            price:70000,
            category:"Tables"
        },
        {
            id:5,
            img:"/assets/Images (1).png",
            name:"Grifo",
            desc:"Night lamp",
            price:15000,
            category:"Lamps"
        },
        {
            id:6,
            img:"/assets/image 6 (1).png",
            name:"Muggo",
            desc:"Small Mug",
            price:1500,
            category:"Tables"
        },
        {
            id:7,
            img:"/assets/Images (2).png",
            name:"Pingky",
            desc:"Cute sofa set",
            price:70000,
            category:"Sofas"
        },
        {
            id:8,
            img:"/assets/image 8 (1).png",
            name:"Binuyo",
            desc:"Minimalist brown sofa",
            price:250000,
            category:"Sofas"
        },
        {
            id:9,
            img:"/assets/Images (3).png",
            name:"Syltherine 2",
            desc:"Stylish cafe table",
            price:25000,
            category:"Tables"
        },
        {
            id:10,
            img:"/assets/Images.png",
            name:"Leviosa 2",
            desc:"Stylish cafe chair",
            price:35000,
            category:"Chairs"
        },
        {   
            id:11,
            img:"/assets/image 3.png",
            name:"Loloto 2",
            desc:"Luxury Sofa Set",
            price:25000,
            category:"Sofas"
        },
        {
            id:12,
            img:"/assets/image 4.png",
            name:"Respira 2",
            desc:"Outdoor bar table and stool",
            price:70000,
            category:"Tables"
        },
        {
            id:13,
            img:"/assets/Images (1).png",
            name:"Grifo 2",
            desc:"Night lamp",
            price:15000,
            category:"Lamps"
        },
        {
            id:14,
            img:"/assets/image 6 (1).png",
            name:"Muggo 2",
            desc:"Small Mug",
            price:1500,
            category:"Tables"
        },
        {
            id:15,
            img:"/assets/Images (2).png",
            name:"Pingky 2",
            desc:"Cute sofa set",
            price:70000,
            category:"Sofas"
        },
        {
            id:16,
            img:"/assets/image 8 (1).png",
            name:"Binuyo 2",
            desc:"Minimalist brown sofa",
            price:250000,
            category:"Sofas"
        },
        {
            id:17,
            img:"/assets/Images (3).png",
            name:"Syltherine 3",
            desc:"Stylish cafe table",
            price:25000,
            category:"Tables"
        },
        {
            id:18,
            img:"/assets/Images.png",
            name:"Leviosa 3",
            desc:"Stylish cafe chair",
            price:35000,
            category:"Chairs"
        },
        {   
            id:19,
            img:"/assets/image 3.png",
            name:"Loloto 3",
            desc:"Luxury Sofa Set",
            price:25000,
            category:"Sofas"
        },
        {
            id:20,
            img:"/assets/image 4.png",
            name:"Respira 3",
            desc:"Outdoor bar table and stool",
            price:70000,
            category:"Tables"
        },
        {
            id:21,
            img:"/assets/Images (1).png",
            name:"Grifo 3",
            desc:"Night lamp",
            price:15000,
            category:"Lamps"
        },
        {
            id:22,
            img:"/assets/image 6 (1).png",
            name:"Muggo 3",
            desc:"Small Mug",
            price:1500,
            category:"Tables"
        },
        {
            id:23,
            img:"/assets/Images (2).png",
            name:"Pingky 3",
            desc:"Cute sofa set",
            price:70000,
            category:"Sofas"
        },
        {
            id:24,
            img:"/assets/image 8 (1).png",
            name:"Binuyo 3",
            desc:"Minimalist brown sofa",
            price:250000,
            category:"Sofas"
        }
    ]
    
    console.log(products.length,"length")
    const totalPages = Math.ceil(products.length / itemsPerPage);
    console.log(totalPages,"total pages")
    // Calculate first and last item indexes
    const firstItemIndex = (currentPage - 1) * itemsPerPage;
    const lastItemIndex = firstItemIndex + itemsPerPage;

    // Slice the products for the current page
    const paginatedProducts = products.slice(firstItemIndex, lastItemIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    useEffect(()=>{
        dispatch(dataAction.setFilteredData(paginatedProducts))
    },[currentPage])
        
       
    return(
        <div className="py-10 px-20 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 lg:grid-cols-4 lg:gap-10 w-full lg:mt-6">
                {  
                    filteredData.length > 0 ?
                    filteredData.map((items)=>{
                        const productId=items.id;
                        return <FeaturedCompo key={items.id} productId={productId} items={items} />  
                    }):<p>No matching product has been found</p>
                }
            </div>
            <div className="mt-16 flex gap-2">
            {(() => {
                const buttons = [];
                for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`font-bold h-8 w-8 lg:h-16 lg:w-16 rounded-md lg:rounded-xl lg:p-2 ${
                        i === currentPage
                        ? "bg-[#B88E2F] text-white"
                        : "bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white"
                    }`}
                    >
                    {i}
                    </button>
                );
                }
                return buttons;
            })()}
            </div>
        </div>
    )
}

export default ProductGrid;