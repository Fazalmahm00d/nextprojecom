"use client"

import { toast } from "react-toastify";

const { default: axios } = require("axios");

function ForgotPassword(){
     const handleSubmit=async (e)=>{
        e.preventDefault()
        const email =e.target.email.value;
        await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAnCRZfZTUHUPdYrWGjYPV7PSstRIKboSM",{"requestType":"PASSWORD_RESET","email":email})
        toast.success("Email has been sent Please Check your Inbox")
    }
    return(
        <div className="flex flex-col gap-10 justify-center items-center h-[50vh]">
            <div>
                Enter your email address.Password reset link will be sent to your email.
            </div>
            <form onSubmit={handleSubmit} className="h-[3rem] flex gap-10 ">
                <input className="px-2 focus:outline-none h-full border-solid border-black border-2 rounded-xl" name="email" type="email" placeholder="Enter your email"/>
                <button className="h-full bg-blue-700 px-8 py-2 text-white rounded-lg " type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ForgotPassword;