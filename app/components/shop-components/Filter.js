import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "@/app/ReduxStore/dataCart";
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
]

function Filter(){
    const [isSearch,setIsSearch]=useState(false);
    const [query,setQuery]=useState('');
    const[debouncedQuery,setDebouncedQuery]=useState('');
    const dispatch=useDispatch();
    const shopProducts=useSelector((state)=>state.dataReducer.shopProducts);
    
    const showSearch=()=>{
        setIsSearch(true);
    }
    const closeSearch=()=>{
        setIsSearch(false);
    }
    const handler=(e)=>{
        const search=e.target.value;
        console.log(search,"search")
        setQuery(search);
    }
    useEffect(()=>{
        const id=setTimeout(()=>{
            setDebouncedQuery(query);
        },500);
        
        return ()=>{
            clearTimeout(id);
        }
        },[query])
    
        useEffect(()=>{
            if(debouncedQuery){
            console.log(query,debouncedQuery,">===");

            const filtered=products.filter((item)=>
            item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
            ||
            item.category.toLowerCase().includes(debouncedQuery.toLowerCase())
            ||
            item.desc.toLowerCase().includes(debouncedQuery.toLowerCase())
            )
            dispatch(dataAction.setFilteredData(filtered))
            }
            else{
                console.log(query,debouncedQuery,">inside else block");
                console.log(shopProducts,"shop products")
                dispatch(dataAction.setFilteredData(products));
            }
        },[debouncedQuery])
    return(
        <div className="bg-[#F9F1E7] flex flex-col gap-5 sm:gap-0 sm:flex-row justify-end items-center px-10 py-4 lg:px-20 lg:py-8 text-sm lg:text-base">
            {
                isSearch ? <div className="flex h-8 gap-3"><input onChange={(e)=>handler(e)} placeholder="Search..." className="focus:outline-none border-2 border-solid border-black rounded-md px-2" type="text" /><button onClick={closeSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button></div> : <button className=" " onClick={showSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button>
            }
          
        </div>
    )
}

export default Filter;