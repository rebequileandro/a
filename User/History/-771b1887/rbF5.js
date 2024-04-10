import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.jsonbin.io/v3 ",
        prepareHeaders: (headers) => {
            // headers.set("Content-Type", "application/json")
            headers.set("X-MASTER-KEY", "$2a$10$LWuAK3nmybU1NLm6XDDPwOt9Sii6o1oJZLEFMh2L6qqCkrRONJIqO")
            headers.set("X-ACCESS-KEY", "$2a$10$2RGi964uj2vV6Sz3dTvyAeFpFtGFzSQ9tKZNZy1hUNoJQu4zHKYku")
            return headers;
        }
    }),
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