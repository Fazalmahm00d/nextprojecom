import BannerSub from "./BannerSub";

function Banner(){
    return(
        <div className="bg-[#FAF3EA] flex items-center justify-between px-10 py-24 gap-6">
            <BannerSub svg={<svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.3547 3.51562C45.0744 3.51562 43.8741 3.86121 42.839 4.46156V1.75781C42.839 0.787031 42.052 0 41.0812 0H12.9562C11.9853 0 11.1983 0.787031 11.1983 1.75781V4.48301C10.155 3.8693 8.94102 3.51562 7.64551 3.51562C3.76848 3.51562 0.614258 6.66984 0.614258 10.5469C0.614258 13.5041 1.49059 16.3615 3.14844 18.8102C5.97078 22.9789 9.45113 24.0607 12.331 25.2127C13.9916 29.348 17.3496 32.6252 21.5384 34.1769L20.2422 42.4219H19.9875C17.0797 42.4219 14.714 44.7875 14.714 47.6953V56.4844H12.9562C11.9854 56.4844 11.1984 57.2714 11.1984 58.2422C11.1984 59.213 11.9854 60 12.9562 60H41.0812C42.052 60 42.839 59.213 42.839 58.2422C42.839 57.2714 42.052 56.4844 41.0812 56.4844H39.3234V47.6953C39.3234 44.7875 36.9577 42.4219 34.05 42.4219H33.7952L32.4991 34.177C36.6941 32.623 40.0558 29.3386 41.7139 25.1948C44.4344 24.1066 48.0005 23.0217 50.8518 18.8102C52.5097 16.3615 53.386 13.504 53.386 10.5469C53.3859 6.66984 50.2317 3.51562 46.3547 3.51562ZM11.1853 20.968C6.89926 19.2536 4.12988 15.1631 4.12988 10.5469C4.12988 8.60836 5.70699 7.03125 7.64551 7.03125C9.58402 7.03125 11.1611 8.60836 11.1611 10.5469C11.1611 10.6705 11.1741 10.791 11.1984 10.9073V19.3359C11.1984 19.9009 11.2288 20.4588 11.2869 21.0087L11.1853 20.968ZM35.8078 56.4844H18.2296V52.9688H35.8078V56.4844ZM34.05 45.9375C35.0192 45.9375 35.8078 46.7261 35.8078 47.6953V49.4531H18.2296V47.6953C18.2296 46.7261 19.0182 45.9375 19.9875 45.9375C20.9411 45.9375 31.8134 45.9375 34.05 45.9375ZM23.801 42.4219L24.9642 35.023C25.6368 35.1107 26.3225 35.1562 27.0187 35.1562C27.7149 35.1562 28.4006 35.1105 29.0732 35.023L30.2364 42.4219H23.801ZM39.3234 19.3359C39.3234 26.1207 33.8035 31.6406 27.0187 31.6406C20.2339 31.6406 14.714 26.1207 14.714 19.3359V10.5469H39.3234V19.3359ZM39.3234 7.03125H14.714V3.51562H39.3234V7.03125ZM42.8148 20.968L42.7523 20.993C42.8093 20.4483 42.8389 19.8955 42.8389 19.3359V10.5469C42.839 8.60836 44.4161 7.03125 46.3547 7.03125C48.2932 7.03125 49.8703 8.60836 49.8703 10.5469C49.8703 15.1631 47.1009 19.2537 42.8148 20.968Z" fill="#242424"/>
                    </svg>} name="High Quality" desc="crafted from top materials"/>
            <BannerSub svg={<svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.1195 21.2612C56.3278 18.8096 56.6653 15.1296 54.6075 12.2881C52.5335 9.42431 48.9263 8.61033 46.8895 7.12064C44.8741 5.64666 42.9991 2.43912 39.609 1.33287C36.3145 0.257791 32.9456 1.71666 30.3335 1.71666C27.7217 1.71666 24.3531 0.257439 21.058 1.33275C17.6685 2.43877 15.7919 5.64701 13.7778 7.12029C11.7432 8.60822 8.13338 9.42443 6.05975 12.2878C4.00369 15.1269 4.33779 18.8154 3.54748 21.2611C2.79537 23.5888 0.333496 26.3824 0.333496 30.0002C0.333496 33.6203 2.79256 36.4031 3.54748 38.7392C4.3392 41.1908 4.0017 44.8708 6.05951 47.7123C8.13338 50.5762 11.7404 51.3901 13.7775 52.8799C15.7925 54.3536 17.6679 57.5614 21.058 58.6676C24.3503 59.7419 27.7244 58.2838 30.3335 58.2838C32.9389 58.2838 36.321 59.7404 39.609 58.6677C42.9987 57.5617 44.874 54.3541 46.8892 52.8801C48.9238 51.3922 52.5336 50.576 54.6072 47.7126C56.6634 44.8734 56.3291 41.1853 57.1195 38.7394C57.8716 36.4115 60.3335 33.6179 60.3335 30.0002C60.3335 26.3804 57.875 23.5984 57.1195 21.2612ZM52.6592 37.2979C51.7364 40.1544 51.9781 43.3512 50.811 44.9629C49.6281 46.5962 46.5204 47.3422 44.1224 49.0963C41.7506 50.8308 40.0883 53.5803 38.1549 54.2111C36.3259 54.8081 33.3451 53.596 30.3336 53.596C27.3001 53.596 24.35 54.8107 22.5122 54.2111C20.579 53.5803 18.9191 50.8326 16.5447 49.0962C14.1609 47.3528 11.0355 46.5914 9.85604 44.9627C8.6926 43.3563 8.92521 40.1374 8.00799 37.2981C7.10893 34.5162 5.021 32.1074 5.021 30.0002C5.021 27.891 7.10705 25.4905 8.00775 22.7025C8.9306 19.8461 8.68885 16.6492 9.85604 15.0375C11.0382 13.4053 14.1483 12.6568 16.5447 10.9042C18.924 9.16404 20.5759 6.42103 22.5119 5.78928C24.3395 5.19303 27.33 6.40439 30.3334 6.40439C33.3724 6.40439 36.3151 5.18892 38.1548 5.78928C40.0877 6.41998 41.7491 9.16873 44.1224 10.9043C46.5058 12.6477 49.6315 13.409 50.811 15.0376C51.9746 16.6444 51.7407 19.86 52.659 22.7022V22.7024C53.5581 25.4843 55.646 27.8931 55.646 30.0002C55.646 32.1095 53.5599 34.5099 52.6592 37.2979ZM41.1315 22.4774C42.0469 23.3927 42.0469 24.8767 41.1315 25.7919L29.4003 37.5231C28.485 38.4384 27.0009 38.4383 26.0857 37.5231L19.5356 30.973C18.6203 30.0576 18.6201 28.5737 19.5355 27.6585C20.4508 26.7432 21.935 26.7431 22.85 27.6585L27.7429 32.5513L37.8167 22.4775C38.7321 21.5621 40.2162 21.5621 41.1315 22.4774Z" fill="#242424"/>
                </svg>} name="Warranty Protection" desc="Over 2 years"/>
            <BannerSub svg={<svg width="61" height="56" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.0144 29.102V1.7797C56.0144 0.804954 55.2242 0.0147095 54.2495 0.0147095H6.96161C5.98687 0.0147095 5.19662 0.804954 5.19662 1.7797V31.2801C4.34519 31.4041 3.51282 31.7346 2.77647 32.2813C0.455155 33.9273 -0.0938738 37.611 1.85056 39.8828L9.80042 49.5204C14.7214 55.2798 19.949 55.9855 27.7204 55.9855C34.3893 55.9855 37.3709 56.0149 43.183 54.6906L48.8425 53.3369C49.7601 54.6184 51.217 55.4486 52.8548 55.4486H55.6427C58.4128 55.4486 60.6665 53.0744 60.6665 50.1562V34.3785C60.6666 31.592 58.6114 29.3032 56.0144 29.102ZM48.0812 32.7327L45.7295 31.5382C41.8629 29.5865 37.3924 29.5143 33.4647 31.3403C32.3931 31.7618 30.0559 33.1759 28.8436 33.1286H20.6832C17.9764 33.1286 15.7742 35.3307 15.7742 38.0376V39.3248C15.759 39.3088 15.7431 39.2936 15.7282 39.2774L9.90079 32.952C9.54815 32.5692 9.15197 32.249 8.72672 31.992V14.481H23.1706V20.951C23.1706 21.9258 23.9608 22.716 24.9356 22.716H36.0728C37.0475 22.716 37.8378 21.9258 37.8378 20.951V14.481H52.4846V29.1019C50.4224 29.2612 48.7028 30.7365 48.0812 32.7327ZM26.7004 14.481H34.3077V19.186H26.7004V14.481ZM52.4845 10.9511H37.8378V3.54469H52.4846V10.9511H52.4845ZM34.3078 3.54469V10.9512H26.7006V3.54469H34.3078ZM23.1705 3.54469V10.9512H8.7266V3.54469H23.1705ZM42.3638 51.2568C36.9947 52.4866 33.7611 52.4368 27.7837 52.4368C20.4884 52.4368 16.9635 52.3189 12.5237 47.2741L4.57382 37.6364C3.19101 35.8358 5.69565 33.7101 7.30461 35.3436L13.132 41.6691C14.6721 43.2941 16.6102 44.1885 18.999 44.2411H35.1554C36.1302 44.2411 36.9204 43.4509 36.9204 42.4761C36.9204 41.5014 36.1302 40.7111 35.1554 40.7111H19.3041V38.0374C19.3041 37.2771 19.9226 36.6584 20.6831 36.6584H28.8435C30.6819 36.79 33.3354 35.255 34.9528 34.5411C37.8945 33.1733 41.2428 33.2275 44.1349 34.6872L47.8312 36.5647V49.949L42.3638 51.2568ZM57.1366 50.1561C57.1366 51.1279 56.4665 51.9185 55.6428 51.9185H52.8549C52.0312 51.9185 51.3612 51.1279 51.3612 50.1561V34.3785C51.3612 33.4067 52.0313 32.616 52.8549 32.616H55.6428C56.4665 32.616 57.1366 33.4065 57.1366 34.3785V50.1561Z" fill="#242424"/>
                </svg>} name="Free Shipping" desc="Order over 150 $"/>
            <BannerSub svg={<svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.6935 23.9628C51.2992 10.6825 40.3741 0 26.9999 0C13.6257 0 2.70059 10.6825 2.30612 23.9628L0.529297 25.7396V37.7898L2.294 39.5545V47.7647C2.294 52.5652 6.19941 56.4706 10.9999 56.4706H13.1858C13.9142 58.5246 15.8758 60 18.1764 60H21.7058C24.0079 60 25.9705 58.5225 26.6978 56.4664C26.7986 56.4681 26.8997 56.4706 26.9999 56.4706C35.522 56.4706 42.6526 50.3981 44.2921 42.3529H48.9073L53.4705 37.7898V25.7396L51.6935 23.9628ZM26.9999 3.52941C37.4741 3.52941 46.1953 11.174 47.8806 21.1765H44.2921C42.6526 13.1313 35.522 7.05882 26.9999 7.05882C18.4778 7.05882 11.3472 13.1313 9.70765 21.1765H6.11918C7.80447 11.174 16.5257 3.52941 26.9999 3.52941ZM40.6708 21.1765C34.9662 21.1594 30.9368 21.5068 27.6147 16.6506L26.0015 14.2926L24.6152 16.7907C22.5952 20.4306 19.8748 21.1765 16.4117 21.1765H13.3289C14.9001 15.0944 20.4337 10.5882 26.9999 10.5882C33.5661 10.5882 39.0997 15.0944 40.6708 21.1765ZM9.35283 38.8235H6.55436L4.05871 36.3279V27.2015L6.55436 24.7059H9.35283V38.8235ZM5.82341 47.7647V42.3529H9.70424C10.3686 45.6441 11.9581 48.6652 14.3129 51.0916C13.8193 51.6191 13.4321 52.2467 13.1858 52.9412H10.9999C8.14553 52.9412 5.82341 50.6191 5.82341 47.7647ZM21.7058 56.4706H18.1764C17.2032 56.4706 16.4117 55.6791 16.4117 54.7059C16.4117 53.7328 17.2032 52.9412 18.1764 52.9412H21.7058C22.6788 52.9412 23.4705 53.7328 23.4705 54.7059C23.4705 55.6791 22.6788 56.4706 21.7058 56.4706ZM41.1175 38.8235C41.1175 46.608 34.7844 52.9412 26.9999 52.9412C26.8987 52.9412 26.7967 52.9392 26.6948 52.9368C25.9652 50.8851 24.0047 49.4118 21.7058 49.4118C18.0822 49.4198 18.14 49.3936 17.6884 49.4352C14.6246 46.7498 12.8822 42.9248 12.8822 38.8235V24.7059H16.4117C19.5348 24.7059 23.3384 24.1909 26.2826 20.6076C30.1673 24.6786 34.9146 24.7059 39.1761 24.7059H41.1175V38.8235ZM49.9411 36.3279L47.4454 38.8235H44.6469V24.7059H47.4454L49.9411 27.2015V36.3279Z" fill="#242424"/>
                </svg>} name="24 / 7 Support" desc="Dedicated support"/> 
        </div>
    )
}

export default Banner;
