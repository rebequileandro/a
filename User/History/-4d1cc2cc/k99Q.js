import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatbotApi = createApi({
    reducerPath: "chatbot",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.jsonbin.io/v3"
    }),
    endpoints: (builder) => ({
        sendMessage: builder.mutation({
            query: (body) => ({
                url: "b",
                method: "POST",
                headers: {
                    "X-MASTER-KEY": "$2a$10$LWuAK3nmybU1NLm6XDDPwOt9Sii6o1oJZLEFMh2L6qqCkrRONJIqO",
                    "X-ACCESS-KEY": "$2a$10$2RGi964uj2vV6Sz3dTvyAeFpFtGFzSQ9tKZNZy1hUNoJQu4zHKYku",
                    "Content-Type": "application/json"
                },
                body
            }),
        }),
    }),
});

export const { useSendMessageMutation } = chatbotApi;