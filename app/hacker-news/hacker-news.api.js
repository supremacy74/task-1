import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const hackerNewsApi = createApi({
    reducerPath: 'hackerNews/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hacker-news.firebaseio.com/v0/'
    }),
    endpoints: (builder) => ({
        getNewStories: builder.query({
            query: () => 'newstories.json',
            transformResponse: (response) => response.slice(0, 50)
        }),
        getItem: builder.query({
            query: (id) => `item/${id}.json`
        })
    })
})

export const { useGetNewStoriesQuery, useGetItemQuery } = hackerNewsApi

export default hackerNewsApi
