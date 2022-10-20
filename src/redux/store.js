import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import consultationReducer from './consultationSlice'
import category1Reducer from './category1Slice'



export const store = configureStore({
    reducer: {
        user: userReducer,
        consultation: consultationReducer,
        category1: category1Reducer,
    },
})


