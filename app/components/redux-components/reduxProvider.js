"use client"

import store from "@/app/ReduxStore/store";
import { Provider } from "react-redux";

function ReduxProvider(props){
    console.log(props.children)
    return(
        <Provider store={store}>
             {props.children}
        </Provider>
    )
}

export default ReduxProvider;