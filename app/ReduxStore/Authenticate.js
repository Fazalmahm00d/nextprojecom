"use client"

import { createSlice } from "@reduxjs/toolkit";
const isEmail=localStorage.getItem('email');
const isAuthenticate=localStorage.getItem('token')
const authSlice=createSlice({
    name:"Authenticate",
    initialState:{
        isEmail,
        isAuthenticate
    },
    reducers:{
        logIn(state){
            state.isEmail=true;
            console.log("log in executed in reducer")
        },
        logOut(state){
            state.isEmail=false;
        },
        changeEmailValue(state,actions){
            state.isEmail=actions.payload;
        },
        changeTokenValue(state,actions){
            state.isAuthenticate=actions.payload
        }
    }

})
export const authAction=authSlice.actions

export const authReducer=authSlice.reducer