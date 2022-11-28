import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const XRAPIDAPIKEY = import.meta.env.VITE_XRAPIDAPIKEY;
const BASEURL = import.meta.env.VITE_BASEURL;


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
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;