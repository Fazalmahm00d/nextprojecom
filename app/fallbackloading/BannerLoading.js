import BannerSub from "../components/reused-components/BannerSub";


function BannerLoading(){
    return(
        <div className="bg-gray-50 flex items-center justify-between py-24 gap-6">
            <BannerSub  className="bg-gray-200 w-1/2 h-6 mb-2" svg={<div className="w-16 h-16 bg-gray-200 "></div>} />
            <BannerSub  className="bg-gray-200 w-1/2 h-6 mb-2" svg={<div className="w-16 h-16 bg-gray-200 "></div>} />
            <BannerSub  className="bg-gray-200  w-1/2 h-6 mb-2" svg={<div className="w-16 h-16 bg-gray-200 "></div>} />
            <BannerSub  className="bg-gray-200 w-1/2 h-6 mb-2" svg={<div className="w-16 h-16 bg-gray-200 "></div>} />
        </div>
    )
}

export default BannerLoading;
