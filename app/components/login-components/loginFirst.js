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

    const[isType,setIsType]=useState("password")
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
    const checkEmail=(email)=>{
        const emailpatt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailpatt.test(email)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const pr=checkEmail(email);
        
        const pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        const pr2=pattern.test(password);
        console.log(pr2,"psswd value")
        console.log("pr value",pr)
        if(pr){
            setIsValidMail(true);
            console.log("email set to true")
        }else{
            setIsValidMail(false);
            console.log("email set to false",isValidMail)
        }
        if(pr2===true){
            console.log("password set to true")
        }else if(pr2===false){
            setIsValidPsswd(false);
            console.log("password set to false",IsValidPsswd)
        }
        const data={
            email,
            password,
            returnSecureToken:true
        }
        // console.log(isValidMail,"email valid or not");
        // console.log(IsValidPsswd,"passwd valid or not")
        if(pr && pr2){
            setIsValidMail(true);
            setIsValidPsswd(true);
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
    function changeType(e){
        e.preventDefault();
        setIsType("text")
    }
    function switchType(e){
        e.preventDefault();
        setIsType("password")
    }
    return(
        <div className="flex w-full h-[100vh] p-10 bg-[#F9F1E7]">
            <div className='hidden sm:block relative w-[50%] h-full rounded-2xl overflow-hidden'>
                {isLogin ? <img className=' w-full h-full ' src="/assets/pik1.png" alt="" />:<img className=' w-full h-full ' src="/assets/pik2.png" alt="" />}
                <div className='absolute left-0 bottom-0 z-50  p-10   text-white text-5xl font-bold'>
                    <div className=''>Lorem ipsum is easy</div>
                    <div className='font-medium mt-4 text-2xl'>Lorem ipsum is easy</div>
                </div>
            </div>
            <div  className='w-full sm:w-[50%] flex justify-center items-center text-sm lg:text-base'>
                <div className='flex flex-col justify-center items-center w-[60%]'>
                    <h1 className='text-md font-bold text-[#B88E2F]'>Welcome to Furniro</h1>
                    <p className='mt-4 lg:mt-8 text-[#B88E2F] font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='mt-4 lg:mt-8 bg-[#B88E2F] bg-opacity-[0.5] p-2 rounded-3xl flex justify-center '>
                        <button className={`w-full text-white rounded-2xl px-4 lg:px-8 py-1 font-bold ${isLogin ? "bg-[#B88E2F]":""}`} onClick={switchToLogIn}>LogIn</button>
                        <button className={`w-full text-white rounded-2xl px-4 lg:px-8 py-1 font-bold ${!isLogin ? "bg-[#B88E2F]":""}`} onClick={switchToSignUp}>Register</button>
                    </div>
                    
                    <form onSubmit={handleSubmit}  className="flex flex-col gap-3 w-full ">
                        <label className='mt-4  text-[#B88E2F] font-bold' htmlFor="email">Email</label>
                        {!isValidMail ? 
                        <div className='relative'><input  className="focus:outline-none text-md px-2 py-2 lg:px-8 lg:py-3 rounded-3xl border-2 border-red-700 placeholder:text-red-700 " id="email" name="email" type="text" placeholder="Enter your Email Address"/><p className='text-red-700'>Please enter a valid email address</p></div> : <input className="focus:outline-none text-md px-8 py-3 rounded-3xl " id="email" name="email" type="text" placeholder="Enter your Email Address"/>}
                        <label className='mt-4 text-[#B88E2F] font-bold' htmlFor="password">Password</label>
                        <div className='flex justify-between w-full px-4 py-2 lg:px-8 lg:py-3 bg-white rounded-3xl'>
                        {
                        !IsValidPsswd?<div><input className="focus:outline-none text-md w-full px-2 py-2 lg:px-8 lg:py-3   border-2 border-red-700 placeholder:text-red-700" id="password" name="password" type="password" placeholder="Enter your Password"/><p className='text-red-700'>Password  Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p></div>
                        :<input className="text-md focus:outline-none h-full w-full px-4 py-2 lg:px-8 lg:py-3 " id="password" name="password" type={isType} placeholder="Enter your Password"/>
                        }
                        {isType==="password" ?<button onClick={changeType} className='relative top-0 right-0'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                        </svg></button>:<button className='relative top-0 right-0' onClick={switchType}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                            </svg>
                        </button>
                        }
                        </div>
                        <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                        <input  className='cursor-pointer' type="checkbox" checked={isRemember} onChange={(e) => setIsRemember(e.target.checked)} name="remember"/>
                        <p className="ml-2 text-sm text-[#B88E2F]">Remember Me</p>
                        </div>
                        <div onClick={forgotHandler} className="cursor-pointer text-sm text-[#B88E2F] font-bold ">Forgot Password?</div>
                    </div>
                    <div className='flex justify-end'>
                        {
                            !isSendingReq ? <button type="submit" className="mt-4 lg:mt-8 py-2 rounded-2xl bg-[#B88E2F] w-[50%] text-white font-bold text-l">{isLogin ? "Log In":"Register"}</button>
                            :
                            <button type="submit" className="mt-4 lg:mt-8 rounded-2xl bg-[#B88E2F] w-[50%] text-white font-bold text-l cursor-not-allowed">Sending...</button> 
                        }
                    </div>
                </form>
                </div>
            </div>

            </div>

        
    )
}

export default LoginFirst;