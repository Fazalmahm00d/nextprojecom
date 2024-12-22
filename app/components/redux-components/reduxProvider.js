"use client"

import store from "@/app/ReduxStore/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

function ReduxProvider(props){
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: true,
            staleTime: 0, // Ensure data doesn't stay stale longer than necessary
          },
        },
      });
      
    return(
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
             {props.children}
             </QueryClientProvider>
        </Provider>
    )
}

export default ReduxProvider;