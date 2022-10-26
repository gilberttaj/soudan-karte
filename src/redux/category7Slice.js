import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    closestInquiry1:'賃貸トラブル',
    closestInquiry2:'家賃滞納',
    position:'借主',
    stayPeriod: '2年未満',
    rentDuration: '3か月未満',
    isEnabled:false,
}

export const category4Slice = createSlice({
    name: 'category7',
    initialState,
    reducers: {
        setIsEnabled: (state, action) => {
            if(state.detail != null){
                state.isEnabled = true;
            }
        },
        setClosestInquiry1: (state, action) => {
            state.closestInquiry1 = action.payload
        },
        setPosition: (state, action) => {
            state.position = action.payload
        },
        setClosestInquiry2: (state, action) => {
            state.closestInquiry2 = action.payload
        },
        setStayPeriod: (state, action) => {
            state.stayPeriod = action.payload
        },
        setRentDuration: (state, action) => {
            state.rentDuration = action.payload
        },
    },
})

export const { 
    setClosestInquiry1, 
    setPosition,
    setClosestInquiry2,
    setStayPeriod,
    setRentDuration
} = category4Slice.actions

export default category4Slice.reducer