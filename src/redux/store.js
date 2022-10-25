import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import consultationReducer from './consultationSlice'
import category1Reducer from './category1Slice'
import category2Reducer from './category2Slice'
import category3Reducer from './category3Slice'
import category4Reducer from './category4Slice'
import category5Reducer from './category5Slice'




export const store = configureStore({
    reducer: {
        user: userReducer,
        consultation: consultationReducer,
        category1: category1Reducer,
        category2: category2Reducer,
        category3: category3Reducer,
        category4: category4Reducer,
        category5: category5Reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})


