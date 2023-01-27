import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        items: [],
        general: [
            {
                id: 0,
                title: 'Home',
                path: '/'
            },
            {
                id: 1,
                title: 'Articles',
                path: '/articles'
            }
        ],
        authorized: [
            {
                id: 2,
                title: 'Profile',
                path: '/profile'
            },
            {
                id: 3,
                title: 'Logout',
                path: '/login'
            }
        ],
        unauthorized: [
            {
                id: 2,
                title: 'Login',
                path: '/login'
            }
        ],
        isVisible: false
    },
    reducers: {
        show: (state) => {
            state.isVisible = true
        },
        hide: (state) => {
            state.isVisible = false
        },
        setIsVisible: (state) => {
            state.isVisible = !state.isVisible
        },
        setItems: (state, action) => {
            state.items = [...state.general, ...action.payload]
        }
    }
})

export const { show, hide, setItems, setIsVisible } = navSlice.actions

export default navSlice.reducer
