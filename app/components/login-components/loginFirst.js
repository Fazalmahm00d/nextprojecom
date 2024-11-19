"use client"

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authAction } from '@/app/ReduxStore/Authenticate';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';



function LoginFirst(){
    const dispatch=useDispatch();
    const router=useRouter();
    const[isLogin,setIsLogin]=useState(false);
    const[isRemember,setIsRemember]=useState(false);
    const [isSendingReq,setIsSendingReq]=useState(false);
    const[isValidMail,setIsValidMail]=useState(true);
    const[IsValidPsswd,setIsValidPsswd]=useState(true);
    const signUpURL="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnCRZfZTUHUPdYrWGjYPV7PSstRIKboSM";
    const logInURL="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnCRZfZTUHUPdYrWGjYPV7PSstRIKboSM"

    async function authFirebase(data){
        setIsSendingReq(true);
        try{
        const URL=isLogin ? logInURL : signUpURL
        const res=await axios.post(URL,data);
        console.log(res)
        dispatch(authAction.changeTokenValue(res.data.idToken))
        const newEmail = data.email.replace(/[@.]/g, "");
        dispatch(authAction.changeEmailValue(newEmail))
        if(isRemember){
        localStorage.setItem('token',res.data.idToken)
        localStorage.setItem('email',newEmail);
        }
        toast.success("Logged In Successfully")
        router.push('/')
        }
        catch(error){
            toast.error(error.response.data.error.message)
        }
        finally{
            setIsSendingReq(false);
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const pr=patt.test(email);
        const pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        const pr2=pattern.match(password);
        console.log(pr2,"psswd value")
        console.log("pr value",pr)
        if(pr){
            setIsValidMail(true);
            console.log("email set to true")
        }else{
            setIsValidMail(false);
            console.log("email set to false")
        }
        if(pr2){
            setIsValidPsswd(true);
            console.log("password set to true")
        }else{
            setIsValidPsswd(false);
            console.log("password set to false")
        }
        const data={
            email,
            password,
            returnSecureToken:true
        }
        if(isValidMail && IsValidPsswd){
            authFirebase(data);
        }
    }
    const forgotHandler=()=>{
        router.push('/forgot')
    }
    function switchToLogIn(){
        setIsLogin(true);
    }
    function switchToSignUp(){
        setIsLogin(false);
    }
    return(
        <div className="flex w-full h-[100vh] p-10 bg-[#F9F1E7]">
            <div className='relative w-[50%] h-full rounded-2xl overflow-hidden'>
                {isLogin ? <img className=' w-full h-full ' src="/assets/pik1.png" alt="" />:<img className=' w-full h-full ' src="/assets/pik2.png" alt="" />}
                <div className='absolute left-0 bottom-0 z-50  p-10   text-white text-5xl font-bold'>
                    <div className=''>Lorem ipsum is easy</div>
                    <div className='font-medium mt-4 text-2xl'>Lorem ipsum is easy</div>
                </div>
            </div>
            <div  className='w-[50%] flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-[60%]'>
                    <h1 className='text-md font-bold text-[#B88E2F]'>Welcome to Furniro</h1>
                    <p className='mt-8 text-[#B88E2F] font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='mt-8 bg-[#B88E2F] bg-opacity-[0.5] p-2 rounded-3xl flex justify-center '>
                        <button className={`w-full text-white rounded-2xl px-8 py-1 font-bold ${isLogin ? "bg-[#B88E2F]":""}`} onClick={switchToLogIn}>LogIn</button>
                        <button className={`w-full text-white rounded-2xl px-8 py-1 font-bold ${!isLogin ? "bg-[#B88E2F]":""}`} onClick={switchToSignUp}>Register</button>
                    </div>
                    
                    <form onSubmit={handleSubmit}  className="flex flex-col gap-3 w-full ">
                        <label className='mt-4 text-[#B88E2F] font-bold' htmlFor="email">Email</label>
                        {!isValidMail ? 
                        <div><input  className="text-md px-8 py-3 rounded-3xl border-2 border-red-700 " id="email" name="email" type="text" placeholder="Enter your Email Address"/><p className='text-red-700'>Please enter a valid email address</p></div> : <input className="text-md px-8 py-3 rounded-3xl " id="email" name="email" type="text" placeholder="Enter your Email Address"/>}
                        <label className='mt-4 text-[#B88E2F] font-bold' htmlFor="password">Password</label>
                        {
                        !IsValidPsswd?<div><input className="text-md px-8 py-3 rounded-3xl" id="password" name="password" type="password" placeholder="Enter your Password"/><p className='text-red-700'>Password  Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p></div>
                        :<input className="text-md px-8 py-3 rounded-3xl" id="password" name="password" type="password" placeholder="Enter your Password"/>
                        }
                        <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                        <input  type="checkbox" checked={isRemember} onChange={(e) => setIsRemember(e.target.checked)} name="remember"/>
                        <p className="ml-2 text-sm text-[#B88E2F]">Remember Me</p>
                        </div>
                        <div onClick={forgotHandler} className="text-sm text-[#B88E2F] font-bold">Forgot Password?</div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            !isSendingReq ? <button type="submit" className="mt-8 py-2 rounded-2xl bg-[#B88E2F] w-[50%] text-white font-bold text-l">{isLogin ? "Log In":"Register"}</button>
                            :
                            <button type="submit" className="mt-8 py-2 rounded-2xl bg-[#B88E2F] w-[50%] text-white font-bold text-l cursor-not-allowed">Sending...</button> 
                        }
                    </div>
                </form>
                </div>
            </div>

            </div>

        
    )
}

export default LoginFirst;