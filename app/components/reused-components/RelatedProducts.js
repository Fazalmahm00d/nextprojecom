"use client"

import { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import RelatedCompo from "./RelatedCompo";


function RelatedProducts(){
    const navigate=useRouter();
        const routeToShop=()=>{
            navigate.push('/shop')
        }
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
    const [relatedProducts,setRelatedProducts]=useState(products);
    function getRandomItems(array, count) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, count);
      }
      useEffect(()=>{
      setRelatedProducts(getRandomItems(products, 4));

      },[])
    return(
        <div className="py-10 px-5 lg:px-10 flex flex-col items-center">
            <h1 className="w-full mb-4 lg:text-3xl font-bold text-xl text-left sm:text-center">Related Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 lg:grid-cols-4 lg:gap-10 w-full lg:mt-6">
            {
                    relatedProducts.map((items)=>{
                        const productId=items.id;
                        return <RelatedCompo key={items.id} productId={productId} items={items} />
                    })
            }
            </div>
            <div className="mt-10"><Button onClick={routeToShop} text="Show More" className="bg-white
                     hover:bg-[#B88E2F] hover:text-white capitalize text-[#B88E2F]"/></div>
            
        </div>
    )
}

export default RelatedProducts;