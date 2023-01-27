import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: (build) => ({
        searchUsers: build.query({
            query: (search) => ({
                url: 'search/users',
                params: {
                    q: search,
                    per_page: 15
                }
            }),
            transformResponse: (response) => response.items
        })
    })
})

export const { useSearchUsersQuery } = githubApi

export default githubApi
