import { useEffect, useState } from "react";
import SvgComponent from "../home-components/Svgcomponent";
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
            {/* <div className="flex  items-center lg:gap-4 gap-2">
                <div className="flex gap-2 items-center">
                <SvgComponent svg={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0237 7.14292H8.92846M6.5475 7.14292H2.97607M22.0237 19.0477H8.92846M6.5475 19.0477H2.97607M16.0713 13.0953H2.97607M22.0237 13.0953H18.4523M7.73798 4.76196C8.05371 4.76196 8.35652 4.88739 8.57977 5.11065C8.80303 5.3339 8.92846 5.63671 8.92846 5.95244V8.33339C8.92846 8.64913 8.80303 8.95193 8.57977 9.17518C8.35652 9.39844 8.05371 9.52387 7.73798 9.52387C7.42225 9.52387 7.11944 9.39844 6.89619 9.17518C6.67293 8.95193 6.5475 8.64913 6.5475 8.33339V5.95244C6.5475 5.63671 6.67293 5.3339 6.89619 5.11065C7.11944 4.88739 7.42225 4.76196 7.73798 4.76196V4.76196ZM7.73798 16.6667C8.05371 16.6667 8.35652 16.7921 8.57977 17.0154C8.80303 17.2387 8.92846 17.5415 8.92846 17.8572V20.2382C8.92846 20.5539 8.80303 20.8567 8.57977 21.0799C8.35652 21.3032 8.05371 21.4286 7.73798 21.4286C7.42225 21.4286 7.11944 21.3032 6.89619 21.0799C6.67293 20.8567 6.5475 20.5539 6.5475 20.2382V17.8572C6.5475 17.5415 6.67293 17.2387 6.89619 17.0154C7.11944 16.7921 7.42225 16.6667 7.73798 16.6667ZM17.2618 10.7143C17.5775 10.7143 17.8803 10.8398 18.1036 11.063C18.3268 11.2863 18.4523 11.5891 18.4523 11.9048V14.2858C18.4523 14.6015 18.3268 14.9043 18.1036 15.1276C17.8803 15.3508 17.5775 15.4762 17.2618 15.4762C16.9461 15.4762 16.6433 15.3508 16.42 15.1276C16.1967 14.9043 16.0713 14.6015 16.0713 14.2858V11.9048C16.0713 11.5891 16.1967 11.2863 16.42 11.063C16.6433 10.8398 16.9461 10.7143 17.2618 10.7143V10.7143Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}/>
                <p>Filter</p>
                </div>
                <SvgComponent svg={<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6668 22.1667C17.7386 22.1667 16.8483 21.798 16.192 21.1416C15.5356 20.4852 15.1668 19.595 15.1668 18.6667C15.1668 17.7385 15.5356 16.8482 16.192 16.1918C16.8483 15.5355 17.7386 15.1667 18.6668 15.1667C19.5951 15.1667 20.4853 15.5355 21.1417 16.1918C21.7981 16.8482 22.1668 17.7385 22.1668 18.6667C22.1668 19.595 21.7981 20.4852 21.1417 21.1416C20.4853 21.798 19.5951 22.1667 18.6668 22.1667ZM9.3335 22.1667C8.40524 22.1667 7.515 21.798 6.85862 21.1416C6.20225 20.4852 5.8335 19.595 5.8335 18.6667C5.8335 17.7385 6.20225 16.8482 6.85862 16.1918C7.515 15.5355 8.40524 15.1667 9.3335 15.1667C10.2618 15.1667 11.152 15.5355 11.8084 16.1918C12.4647 16.8482 12.8335 17.7385 12.8335 18.6667C12.8335 19.595 12.4647 20.4852 11.8084 21.1416C11.152 21.798 10.2618 22.1667 9.3335 22.1667ZM18.6668 12.8334C17.7386 12.8334 16.8483 12.4646 16.192 11.8082C15.5356 11.1519 15.1668 10.2616 15.1668 9.33337C15.1668 8.40512 15.5356 7.51488 16.192 6.8585C16.8483 6.20212 17.7386 5.83337 18.6668 5.83337C19.5951 5.83337 20.4853 6.20212 21.1417 6.8585C21.7981 7.51488 22.1668 8.40512 22.1668 9.33337C22.1668 10.2616 21.7981 11.1519 21.1417 11.8082C20.4853 12.4646 19.5951 12.8334 18.6668 12.8334ZM9.3335 12.8334C8.40524 12.8334 7.515 12.4646 6.85862 11.8082C6.20225 11.1519 5.8335 10.2616 5.8335 9.33337C5.8335 8.40512 6.20225 7.51488 6.85862 6.8585C7.515 6.20212 8.40524 5.83337 9.3335 5.83337C10.2618 5.83337 11.152 6.20212 11.8084 6.8585C12.4647 7.51488 12.8335 8.40512 12.8335 9.33337C12.8335 10.2616 12.4647 11.1519 11.8084 11.8082C11.152 12.4646 10.2618 12.8334 9.3335 12.8334Z" fill="black"/>
                    </svg>}/>
                <SvgComponent svg={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black"/>
                    </svg>}/>
                
                <div className="sm:border-l-[2px]  lg:border-l-[2px] border-black lg:pl-8 pl-4">
                    Showing 1–16 of 32 results
                </div>
            </div> */}
            {
                isSearch ? <div className="flex h-8 gap-3"><input onChange={(e)=>handler(e)} placeholder="Search..." className="focus:outline-none border-2 border-solid border-black rounded-md px-2" type="text" /><button onClick={closeSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button></div> : <button className=" " onClick={showSearch}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.5002 24.4999L19.2665 19.2569M22.1668 12.2499C22.1668 14.88 21.122 17.4023 19.2623 19.2621C17.4026 21.1218 14.8802 22.1666 12.2502 22.1666C9.6201 22.1666 7.09776 21.1218 5.23802 19.2621C3.37828 17.4023 2.3335 14.88 2.3335 12.2499C2.3335 9.61985 3.37828 7.09751 5.23802 5.23778C7.09776 3.37804 9.6201 2.33325 12.2502 2.33325C14.8802 2.33325 17.4026 3.37804 19.2623 5.23778C21.122 7.09751 22.1668 9.61985 22.1668 12.2499V12.2499Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg></button>
            }
            {/* <div className="flex w-full sm:w-fit justify-between sm:justify-none gap-6 ">
                <div className="flex items-center gap-2"><p>Show</p> <input className="focus:outline-none w-6 h-6 lg:h-10 lg:w-10 text-center bg-white font-light" placeholder="16"/></div>
                <div className="flex items-center gap-2"><p>Sort By</p> <input className="focus:outline-none h-6 w-14 px-1 lg:h-10 lg:w-28 lg:px-2 bg-white font-light" placeholder="Default"/></div>
            </div> */}
        </div>
    )
}

export default Filter;