import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import consultationReducer from './consultationSlice'



export const store = configureStore({
    reducer: {
        user: userReducer,
        consultation: consultationReducer,
    },
})


