"use client"
import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"Data Cart",
    initialState:{
        cartItems:[],
        wishItems:[],
        shopProducts:[],
        filteredData:[],
    },
    reducers:{
        setCartArr(state,actions){
            state.cartItems=actions.payload;
        },
        setWishArr(state,actions){
            state.wishItems=actions.payload;
        },
        setShopArr(state,actions){
            state.shopProducts=actions.payload;
        },
        setFilteredData(state,actions){
            state.filteredData=actions.payload;
        }

    }

})
export const dataAction=dataSlice.actions;

export const dataReducer=dataSlice.reducer;