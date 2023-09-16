// Import necessary functions and dependencies from Redux Toolkit Query and environment variables
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Create an instance of the articleApi using createApi from Redux Toolkit Query
export const articleApi = createApi({
    // Specify the reducer path for this API
    reducerPath: 'articleApi',
    // Define the base query configuration
    baseQuery: fetchBaseQuery({
        // Define the base URL for API requests
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            // Set the required headers for the RapidAPI service
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    // Define the API endpoints using the builder pattern
    endpoints: (builder) => ({
        // Create a query endpoint called "getSummary"
        getSummary: builder.query({
            // Define the query function that constructs the API request URL
            // encodeURIComponent() function encodes special characters in the article URL
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

// Export the "useLazyGetSummaryQuery" hook from the articleApi for use in components
export const { useLazyGetSummaryQuery } = articleApi;
