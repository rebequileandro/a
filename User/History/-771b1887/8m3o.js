import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonbin.io/v3 " }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/b",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = loginApi