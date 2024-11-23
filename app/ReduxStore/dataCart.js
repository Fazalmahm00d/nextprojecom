"use client"
import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"Data Cart",
    initialState:{
        cartItems:[],
        wishItems:[],
    },
    reducers:{
        setCartArr(state,actions){
            state.cartItems=actions.payload;
        },
        setWishArr(state,actions){
            state.wishItems=actions.payload;
        }
    }

})
export const dataAction=dataSlice.actions;

export const dataReducer=dataSlice.reducer;