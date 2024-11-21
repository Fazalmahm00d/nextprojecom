"use client"

import dynamic from "next/dynamic"
import LoginLoadingFirst from "@/app/fallbackloading/loginFirstLoading"

function LoginPage(){
    const LoginFirst = dynamic(
        ()=>import("./loginFirst"),
        {
            loading: () => <LoginLoadingFirst/>,
            ssr:false
        }

    )
    return(
        <div>
            <LoginFirst/>
        </div>
    )
}

export default LoginPage