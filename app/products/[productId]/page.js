"use client"


import RelatedProducts from "@/app/components/reused-components/RelatedProducts";
import { dataAction } from "@/app/ReduxStore/dataCart";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/components/redux-components/reduxProvider";
import { sendToMongoDB } from "@/app/lib/api";

function Dynamic({productId}){
    const result=useParams();
    const dispatch=useDispatch();
    const isEmail=useSelector((state)=>state.authReducer.isEmail);
    const cartItems=useSelector((state)=>state.dataReducer.cartItems);
    const[isImage,setIsImage]=useState();
    const [isCount,setIsCount]=useState(1);
    console.log(result)
    const products=[
        {
            id:'1',
            img:"/assets/Images (3).png",
            img2:"https://images.unsplash.com/photo-1510877073473-6d4545e9c2af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1627999057957-f91b63eea54c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Syltherine",
            desc:"Stylish cafe chair",
            price:25000
        },
        {   
            id:'2',
            img:"/assets/Images.png",
            img2:"https://images.unsplash.com/photo-1627999057957-f91b63eea54c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://plus.unsplash.com/premium_photo-1706559879916-e40844098a80?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1628532532457-d02b8209288e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Leviosa",
            desc:"Stylish cafe chair",
            price:35000
        },
        {
            id:'3',
            img:"/assets/image 3.png",
            img2:"https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://plus.unsplash.com/premium_photo-1661310048986-a5ce0ede1f83?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://media.istockphoto.com/id/1459013604/photo/empty-nostalgic-retro-living-room-with-beige-sofa-colored-cushions-marble-coffee-tables-and.jpg?s=2048x2048&w=is&k=20&c=8mVrXU6eddwOP5QbdnyG9Oq1e_bZQcP8ZRFz51eE2xo=",
            name:"Loloto",
            desc:"Luxury Sofa Set",
            price:25000
        },
        {
            id:'4',
            img:"/assets/image 4.png",
            img2:"https://plus.unsplash.com/premium_photo-1705937171534-def8d344cf6b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://plus.unsplash.com/premium_photo-1679685565901-757ef3acfd77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1695412087801-43209e251c5e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Respira",
            desc:"Outdoor bar table and stool",
            price:70000
        },
        {
            id:'5',
            img:"/assets/Images (1).png",
            img2:"https://plus.unsplash.com/premium_photo-1681822621402-1e5243447c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://images.unsplash.com/photo-1677593040114-42da5c510595?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1560752323-bb0a9680945f?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Grifo",
            desc:"Night lamp",
            price:15000
        },
        {
            id:'6',
            img:"/assets/image 6 (1).png",
            img2:"https://media.istockphoto.com/id/954121580/photo/comfortable-studio-apartment-design.jpg?s=2048x2048&w=is&k=20&c=gocRJCMiNmSgK3goXBdbTafw7dR_CIB8DFU7tmZ0rtk=",
            img3:"https://media.istockphoto.com/id/450606613/photo/modern-living-room.jpg?s=2048x2048&w=is&k=20&c=g_09ny8RPvtLsLcjXIbHfni40SI13A0vJgoF1JTA8eY=",
            img4:"https://media.istockphoto.com/id/532355559/photo/elegant-small-living-room.jpg?s=2048x2048&w=is&k=20&c=RYzVMPd6fFaUWscb2n0pQSq8xhuN0CNP6yVagV9_ZX0=",
            name:"Muggo",
            desc:"Small Mug",
            price:1500
        },
        {
            id:'7',
            img:"/assets/Images (2).png",
            img2:"https://media.istockphoto.com/id/1310722032/photo/interior-scene-with-50cm-x-70-cm-blank-frames.jpg?s=2048x2048&w=is&k=20&c=FKwigVgh1aNHzNWFcLo5ByuQ7uJQrHYIyMCq23Yu_VI=",
            img3:"https://media.istockphoto.com/id/504697708/photo/living-room-with-orange-sofa.jpg?s=2048x2048&w=is&k=20&c=obBN0s8uR6vK_0K3GIHHf3omtjXY3QEPHkgtV27xZo4=",
            img4:"https://media.istockphoto.com/id/522395594/photo/sofa.jpg?s=2048x2048&w=is&k=20&c=r4Yb1b4NAgEbgOQfXwnfDcoRPG1Nz5Ffw7WF1o2apS4=",
            name:"Pingky",
            desc:"Cute sofa set",
            price:70000
        },
        {
            id:'8',
            img:"/assets/image 8 (1).png",
            img2:"/assets/pexels-karolina-grabowska-5942482.jpg",
            img3:"/assets/pexels-karolina-grabowska-5942509.jpg",
            img4:"/assets/2149178885.jpg",
            name:"Binuyo",
            desc:"Minimalist brown sofa",
            price:250000
        },
        {
            id:'9',
            img:"https://media.istockphoto.com/id/2159502182/photo/the-perfect-mix-industrial-style-living-room-interior-design-in-a-loft-with-3d-render.jpg?s=2048x2048&w=is&k=20&c=ft89lFAC553vezvflt6lDzEdeij37mud4fTFZ0On6WY=",
            img2:"https://media.istockphoto.com/id/2159502126/photo/creating-a-luxe-and-elegant-living-room-design.jpg?s=2048x2048&w=is&k=20&c=IDZoSVpeytKld1DLC2P1s29o2p3FZ8dITAVN6ptEaGk=",
            img3:"https://media.istockphoto.com/id/996666914/photo/top-view-of-living-room-impressive-modern-designs-with-sofa-and-armchairs-and-serene-atmosphere.jpg?s=2048x2048&w=is&k=20&c=Xd9F9eRUwJ75rwTvByY1ognKwsUKYEJrHNSj19Qs5VI=",
            img4:"https://media.istockphoto.com/id/1369945706/photo/stylish-composition-of-living-room-interior-with-corner-grey-sofa-green-velvet-armchair.jpg?s=2048x2048&w=is&k=20&c=vDmCxjHUvsacA5lcBxevnRKrSb2Uu4Q-Ymwd3fT009o=",
            name:"EternaCraft",
            desc:"Stylish cafe chair",
            price:25000
        },
        {
            id:'10',
            img:"https://images.unsplash.com/photo-1571863393439-cf11e7d8a4b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Rustic Charm",
            desc:"Stylish cafe chair",
            price:35000
        },
        {   
            id:'11',
            img:"https://plus.unsplash.com/premium_photo-1733248818744-17b6c632684f?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2:"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"VintageVogue",
            desc:"Luxury Sofa Set",
            price:25000
        },
        {
            id:'12',
            img:"https://plus.unsplash.com/premium_photo-1674484594190-4f6dc7b99a94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2:"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://media.istockphoto.com/id/1220588253/photo/party-with-friends-reception-room-and-preparation-in-the-pool-house-for-a-birthday.jpg?s=2048x2048&w=is&k=20&c=cropnhIEKnEusPooHjQg1mFYwq-kKCIEjYT3uwi2F0M=",
            name:"PlushWood",
            desc:"Outdoor bar table and stool",
            price:70000
        },
        {
            id:'13',
            img:"https://media.istockphoto.com/id/174802580/photo/old-living-room-with-chair-and-floor-lamp.jpg?s=2048x2048&w=is&k=20&c=QDKx7hLfWmaW_yjzbCW4SzYt_-tc8VfvZMPvWu__s6k=",
            img2:"https://media.istockphoto.com/id/118716103/photo/lamp.jpg?s=2048x2048&w=is&k=20&c=OgRdvlZziyZ8tZS7c6WOMRj6G8IdBfhpAvM5ig5wAw4=",
            img3:"https://media.istockphoto.com/id/1489196867/photo/antique-table-lamp-in-the-classic-english-countryside-interior-decor.jpg?s=2048x2048&w=is&k=20&c=FnAVVTlruHirwrlgr-ADLu07PYgVKBoZt1cP5rDPP9Y=",
            img4:"https://media.istockphoto.com/id/1489196867/photo/antique-table-lamp-in-the-classic-english-countryside-interior-decor.jpg?s=2048x2048&w=is&k=20&c=FnAVVTlruHirwrlgr-ADLu07PYgVKBoZt1cP5rDPP9Y=",
            name:"Artisan’s Edge ",
            desc:"Night lamp",
            price:15000
        },
        {
            id:'14',
            img:"https://media.istockphoto.com/id/1452695957/photo/orange-and-blue-modern-living-room.jpg?s=2048x2048&w=is&k=20&c=cv1jC2LoJrMy7FqbYj6PfMMK2aOVTbuWDX_CjacsxFo=",
            img2:"https://media.istockphoto.com/id/641472244/photo/contemporary-living-room.jpg?s=2048x2048&w=is&k=20&c=SEJ8AruikqeWo95sJr1cS865u8rmXKpFZf3mpowLrZY=",
            img3:"https://media.istockphoto.com/id/637875770/photo/green-and-yellow-home-entrance.jpg?s=2048x2048&w=is&k=20&c=IwPMUNVWbIs1Ann6IaIE-IELKZhaliPXHKo6iNL1BB8=",
            img4:"https://media.istockphoto.com/id/504697708/photo/living-room-with-orange-sofa.jpg?s=2048x2048&w=is&k=20&c=obBN0s8uR6vK_0K3GIHHf3omtjXY3QEPHkgtV27xZo4=",
            name:"Majestic Haven",
            desc:"Small Mug",
            price:1500
        },
        {
            id:'15',
            img:"https://media.istockphoto.com/id/659190486/photo/mock-up-poster-frame-in-interior-background-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=WQGOUZrVCyrnln-5u1LXFmg2AKe9wvjSiLrC8C-e2fc=",
            img2:"https://media.istockphoto.com/id/653419528/photo/mock-up-poster-frame-in-interior-background-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=xodKGNc_9RXzjFeMdJ2GA20i_vcJsod2WqJjPb_lUN0=",
            img3:"https://media.istockphoto.com/id/650342252/photo/interior-with-sofa-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=h8hAXjLpbh8RRJY0qhKYa5q4O8ZQ2D5tQ9Hn-ukaKzc=",
            img4:"https://media.istockphoto.com/id/654061978/photo/mock-up-poster-frame-in-interior-background-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=eG6feLCfMACDPqpCMAyaQ9QwVjxPhGQVFpfb00ppbow=",
            name:"UrbanEdge",
            desc:"Cute sofa set",
            price:70000
        },
        {
            id:'16',
            img:"https://media.istockphoto.com/id/653419528/photo/mock-up-poster-frame-in-interior-background-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=xodKGNc_9RXzjFeMdJ2GA20i_vcJsod2WqJjPb_lUN0=",
            img2:"https://images.unsplash.com/photo-1648657459277-2655e01810b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img3:"https://images.unsplash.com/photo-1650488660391-4af1c498050c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img4:"https://images.unsplash.com/photo-1648657458755-74ceaf075f18?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"HavenSphere",
            desc:"Minimalist brown sofa",
            price:250000
        },
        {
            id:'17',
            img:"https://media.istockphoto.com/id/1502260916/photo/beautiful-lawn-with-sitting-area-of-a-resort-just-beside-river-ganga-and-two-cargo-ships-are.jpg?s=2048x2048&w=is&k=20&c=oBzOkOBNwqHEGInjGRcnWAlcxCEhsD7a2YpQlYTaq1s=",
            img2:"https://media.istockphoto.com/id/527511741/photo/wooden-dining-tables-set-in-garden-setting.jpg?s=2048x2048&w=is&k=20&c=CZC_Gj1EVMcp5nVi6TVDE_UknQiMIcSJIdloe2XYU4A=",
            img3:"https://media.istockphoto.com/id/1584409155/photo/free-form-pattern-of-gray-stone-pavement-walkway-beside-a-pond-in-a-garden-of-park-greenery.jpg?s=2048x2048&w=is&k=20&c=StgcgnJmB6NXYpCJ1vwP6rxPs0mXKF0XqWmQ-tJzTNg=",
            img4:"https://media.istockphoto.com/id/1077888224/photo/wooden-chairs-for-you-to-sit-and-relax.jpg?s=2048x2048&w=is&k=20&c=pTzmpbRr_ZVFdxTmSRZH6qwjVx6jqD2KmVQ161Plngc=",
            name:"TimberNest ",
            desc:"Outdoor dining set",
            price:250000
        },{
            id:'18',
            img:"https://media.istockphoto.com/id/653419528/photo/mock-up-poster-frame-in-interior-background-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=xodKGNc_9RXzjFeMdJ2GA20i_vcJsod2WqJjPb_lUN0=",
            img2:"https://media.istockphoto.com/id/1077888224/photo/wooden-chairs-for-you-to-sit-and-relax.jpg?s=2048x2048&w=is&k=20&c=pTzmpbRr_ZVFdxTmSRZH6qwjVx6jqD2KmVQ161Plngc=",
            img3:"https://media.istockphoto.com/id/1266923165/photo/gray-sofa-in-white-living-room-for-mockup-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=HfppHAY7zxMR72c1aT5jldVcHFjFSLq20XvRAEvT8TY=",
            img4:"https://media.istockphoto.com/id/1266923165/photo/gray-sofa-in-white-living-room-for-mockup-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=HfppHAY7zxMR72c1aT5jldVcHFjFSLq20XvRAEvT8TY=",
            name:"Voyage ",
            desc:"LuxeLine Studio ",
            price:250000
        },{
            id:'19',
            img:"https://media.istockphoto.com/id/1500628932/photo/wooden-old-fashioned-huge-wardrobe.jpg?s=2048x2048&w=is&k=20&c=WunsZMFVkCfptgKCYGvw6qKMWPeiZViPjNjkelqF-yg=",
            img2:"https://media.istockphoto.com/id/1067729606/photo/vintage-wooden-cabinet.jpg?s=2048x2048&w=is&k=20&c=vyiQEe30atxLHFWR_ECz9mD60499PwBHSoY3lTHWX4s=",
            img3:"https://media.istockphoto.com/id/1373193069/photo/walnut-wood-network-furniture.jpg?s=2048x2048&w=is&k=20&c=KCsy5lD8YwWzF4ztSeJXEr1bOkXXvXQYmd_KFpJZBgE=",
            img4:"https://media.istockphoto.com/id/1456285098/photo/corner-cabinet.jpg?s=2048x2048&w=is&k=20&c=k2G9rpASOo8LTIBbHaV3z-cKtQnauh64EaS6P3nQE_A=",
            name:"VelvetVault ",
            desc:"Wooden Cabinet ",
            price:250000
        },{
            id:'20',
            img:"https://media.istockphoto.com/id/1311583175/photo/interior-design-architecture-computer-generated-image-of-bed-room-architectural-visualization.jpg?s=2048x2048&w=is&k=20&c=mI6S0dptbsKJjWVAipKiVwU1wjcAZ0U0_wDnjyQEkcE=",
            img2:"https://media.istockphoto.com/id/1691914584/photo/modern-bedroom-interior-with-dressing-table-bed-with-bedhead-and-side-table-with-photo-frame.jpg?s=2048x2048&w=is&k=20&c=94WrfSqmhYSido_aO8bzIvkoSVZqd8iLBNdeNod0gqk=",
            img3:"https://media.istockphoto.com/id/2162447933/photo/modern-bedroom.jpg?s=2048x2048&w=is&k=20&c=CnjXkFaThjvGNRvN_cDEeEoAhr0jMmxEiMBUth6SzQw=",
            img4:"https://media.istockphoto.com/id/1180671629/photo/wooden-and-white-bedroom-corner-with-wardrobe.jpg?s=2048x2048&w=is&k=20&c=1PiRfwMYsMRz7pXSTongAXP0cGPSUTqBBJ5rTOS6dsk=",
            name:"Exquisita",
            desc:"Luxury Bed",
            price:250000
        },
    ]
    const decreaseCount = () =>{
        if(isCount>1){setIsCount((prevCount) => prevCount - 1);}
    }
     const increaseCount = () =>{
        setIsCount((afterCount)=>afterCount+1);
    }
    function changeImageHandler(img){
        setIsImage(img);
        console.log(isImage);
    }
    const [gridProducts,setGridProducts]=useState(products);
    
    const postMutate=useMutation({
            mutationFn:sendToMongoDB,
            onSuccess:(res) => {
                console.log("Mutation succeeded",res);
                queryClient.invalidateQueries({ queryKey: ["cartdataheader"] }); // Wait for invalidation
                if(res.status==201){
                toast.success("Quantity of the item has been increased")

                }else if (res.status==200){
                toast.success('Item has been added to cart successfully')

                }
              }
    })
    function postHandler(img,name,desc,price,quantity){
        const newCartItem={
            email:isEmail,
            img,
            name,
            desc,
            price,
            quantity
        }
        postMutate.mutate(newCartItem)
    }
    const filtereddata=gridProducts.find((item)=>(item.id===result.productId));
    console.log(filtereddata);
    useEffect(()=>{
        changeImageHandler(filtereddata.img);
    },[])

    return(
        <div>
            
            <div className="bg-[#F9F1E7] h-[10vh] sm:h-[14vh]  flex items-center lg:gap-6 gap-3 lg:px-20 px-10 lg:text-xl text-sm">
                <div className="flex gap-8 items-center">
                    <Link href="/"><p className="text-[#9F9F9F]">Home</p></Link>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
                    </svg>
                </div>
                <div className="flex gap-8 items-center">
                    <Link href="/shop"><p className="text-[#9F9F9F]">Shop</p></Link>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
                    </svg>
                </div>
                <div className="border-l-[2px] pl-8 border-solid border-gray-400">
                    {filtereddata.name}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-center lg:px-20 sm:px-10 py-10">
                <div className="w-full lg:w-1/2 flex px-3 gap-2 lg:gap-16 ">
                <div className=" flex flex-col gap-5 w-1/4">
                    <img onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img)
                                        }} className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" src={filtereddata.img} width={80} height={80}/>
                    <img  className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img2)
                                        }}  src={filtereddata.img2} width={80} height={80}/>
                    <img  className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img3)
                                        }} src={filtereddata.img3} width={80} height={80}/>
                    <img  className="rounded-lg h-14 w-14 sm:h-20 sm:w-20" onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            changeImageHandler(filtereddata.img4)
                                        }} src={filtereddata.img4} width={80} height={80}/>
                </div>
                <div className="w-3/4 ">
                    {/* <img className="h-[28rem] w-full rounded-xl" src={isImage}></img> */}
                    <ReactImageMagnify 
                                        {...{
                                            smallImage:{
                                                alt:"filtereddataname",
                                                isFluidWidth:true,
                                                width: 200,  // Add this
                                                height: 400, 
                                                src:isImage,
                                                className:"h-[160px] object-center lg:h-[14rem] sm:object-cover   rounded-xl",
                                            }
                                        ,
                                        largeImage: {
                                            src:isImage,
                                            width:800,
                                            height:1200,
                                        },  
                                            // style:"rounded-xl overflow-hidden",
                                            hoverDelayInMs:2,
                                            isActivatedOnTouch:true,
                                            enlargedImageContainerClassName:"sm:absolute lg:relative bottom-100 left-0 lg:top-0 lg:right-0 rounded-xl ",

                        }}/>
                </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0 px-5 lg:px-20 py-2 flex flex-col gap-2 items-start justify-start ">
                    <h1 className="text-3xl lg:text-5xl">{filtereddata.name}</h1>
                    <div className="text-xl lg:text-3xl text-[#9F9F9F] ">Rs. {filtereddata.price}</div>
                    <div className="text-sm lg:text-xl tracking-wide mt-4">
                        {filtereddata.desc}
                    </div>
                    <div className="flex mt-2 gap-4">
                    <div className="flex gap-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z" fill="#FFC700"/>
                    </svg>
                    </div>

                    <div className="text-base lg:text-l tracking wide border-l-[2px] border-black pl-4">
                        5 Customer Review
                    </div>

                    </div>
                    
                    <div>
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </div>
                    <div>
                        <p>Size</p>
                        <div className="flex gap-4 mt-2">
                        <button className="font-bold  text-sm h-8 w-8 rounded-sm p-2 bg-[#B88E2F] text-white">S</button>
                        <button className="font-bold bg-[#F9F1E7] text-sm h-8 w-8 rounded-sm p-2 hover:bg-[#B88E2F] hover:text-white">M</button>
                        <button className="font-bold bg-[#F9F1E7] text-sm h-8 w-8 rounded-sm p-2 hover:bg-[#B88E2F] hover:text-white">L</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 h-[3rem] mt-4 w-full">
                        <div className="flex items-center text-base sm:text-xl h-full gap-2 border-2 border-[#9F9F9F] px-4 rounded-xl">
                            <button onClick={decreaseCount} className={`${isCount<2 ? "cursor-not-allowed":""}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                            </svg></button>
                            {isCount}
                            <button onClick={increaseCount} className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg></button>
                        </div>
                        <button disabled={postMutate.isPending} onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            isEmail ? postHandler(filtereddata.img,filtereddata.name,filtereddata.desc,filtereddata.price,isCount):toast.error("Log In to access cart")
                                        }} className="h-full w-full sm:w-1/3 border-2 text-base flex justify-center items-center sm:text-xl border-solid border-black rounded-xl px-2 break-keep ">
                            {postMutate.isPending?<div className="border-t-transparent border-2 border-black h-8 w-8 animate-spin rounded-full"></div> :"Add To Cart"}
                        </button>
                        
                    </div>
                    
                    <div className="flex flex-col gap-5 mt-3 w-full">
                        <hr/>
                        <p>SKU  : SS001</p>
                        <p>Category : Sofa</p>
                        <p>Tags  : Sofa,Chair,Home,Shop</p>
                        <div className="flex items-center gap-6">Share  :   <div className="flex gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <RelatedProducts/>
            
    </div>
    )
}

export default Dynamic;