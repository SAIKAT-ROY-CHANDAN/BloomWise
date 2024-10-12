/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    // baseQuery: fetchBaseQuery({ baseUrl: "https://nexus-workspace.vercel.app/api/" }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({})
})

export const {
} = baseApi