import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        items: [
            {
                id: 0,
                title: 'Name',
                type: 'text',
                hint: 'Enter your name.',
                value: ''
            },
            {
                id: 1,
                title: 'Password',
                type: 'password',
                hint: 'Enter the password. The password must contain from 5 to 20 characters.',
                value: ''
            }
        ],
        isVisible: false,
        isAuthorized: false,
        isError: false
    },
    reducers: {
        setName: (state, action) => {
            state.items[0].value = action.payload
        },
        setPassword: (state, action) => {
            state.items[1].value = action.payload
        },
        show: (state) => {
            state.isVisible = true
        },
        hide: (state) => {
            state.isVisible = false
        },
        login: (state) => {
            const items = state.items

            if (items[0].value === 'User' && items[1].value === '12345') {
                state.isAuthorized = true
                state.isError = false
            } else {
                state.isError = true
            }
        },
        setIsAuthorized: (state, action) => {
            state.isAuthorized = action.payload
        }
    }
})

export const { setName, setPassword, setIsAuthorized, show, hide, login } =
    formSlice.actions

export default formSlice.reducer
