import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    amount:'100万円未満',
    isEnabled:false,
}

export const category4Slice = createSlice({
    name: 'category4',
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload
        },
        setIsEnabled: (state, action) => {
            if(state.detail != null){
                state.isEnabled = true;
            }
        },
        setContentInquiry: (state, action) => {
            state.contentInquiry = action.payload
        },
    },
})

export const { 
    setAmount, 
} = category4Slice.actions

export default category4Slice.reducer