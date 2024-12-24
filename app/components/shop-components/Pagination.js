"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "@/app/ReduxStore/dataCart";

function Pagination() {
//   const dispatch = useDispatch();
//   const filteredData = useSelector((state) => state.dataReducer.filteredData);

  const products = [
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
];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

//   useEffect(() => {
//     // Initialize the filtered data with all products when the component mounts
//     dispatch(dataAction.setFilteredData(products));
//   }, [dispatch, products]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate first and last item indexes
  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;

  // Slice the products for the current page
  const paginatedProducts = products.slice(firstItemIndex, lastItemIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="py-10 px-20 flex flex-col items-center">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 lg:grid-cols-4 lg:gap-10 w-full lg:mt-6">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((item) => (
            <Link key={item.id} href={`products/${item.id}`}>
              <div className="group relative cursor-pointer lg:h-[28rem] h-[18rem]">
                <div className="h-[70%]">
                  <img className="w-full h-full" src={item.img} alt={item.name} />
                </div>
                <div className="h-[30%] bg-[#F4F5F7] p-4">
                  <div className="text-sm font-bold lg:text-xl">{item.name}</div>
                  <p className="text-[#898989] text-[10px] lg:text-sm font-light mt-1 tracking-wide">
                    {item.desc}
                  </p>
                  <p className="font-bold mt-2 text-sm lg:text-xl tracking-wide">
                    Rs.{item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      {/* Pagination Controls */}
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
  );
}

export default Pagination;
