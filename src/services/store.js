// Import necessary functions and dependencies from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit"

// Import the articleApi instance from the "./article" module
import { articleApi } from "./article";

// Create and configure the Redux store
export const store = configureStore({
    reducer: {
        // Configure the reducer for the articleApi under a specific reducer path
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});
