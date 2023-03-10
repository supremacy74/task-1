import { configureStore } from '@reduxjs/toolkit'

import navReducer from '../features/navSlice'
import formReducer from '../features/formSlice'

import githubApi from '../github/github.api'
import jsonplaceholderApi from '@/app/jsonplaceholder/jsonplaceholder.api'
import hackerNewsApi from '@/app/hacker-news/hacker-news.api'

export default configureStore({
    reducer: {
        nav: navReducer,
        form: formReducer,
        [githubApi.reducerPath]: githubApi.reducer,
        [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            githubApi.middleware,
            jsonplaceholderApi.middleware,
            hackerNewsApi.middleware
        )
})
