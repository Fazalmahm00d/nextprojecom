"use client"

import store from "@/app/ReduxStore/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

export const queryClient = new QueryClient();
function ReduxProvider(props){
    return(
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
             {props.children}
             </QueryClientProvider>
        </Provider>
    )
}

export default ReduxProvider;