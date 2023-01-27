import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const jsonplaceholderApi = createApi({
    reducerPath: 'api/jsonplaceholder',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => ({
                url: 'posts',
                params: {
                    _limit: 10
                }
            })
        })
    })
})

export const { useGetPostsQuery } = jsonplaceholderApi

export default jsonplaceholderApi
