import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { XRAPIDAPIKEY, BASEURL } from process.env;

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASEURL,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', XRAPIDAPIKEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;