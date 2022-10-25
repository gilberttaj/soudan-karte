import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    dispute:'20万円未満',
    contentInquiry:'損害賠償請求',
    detail:null,
    isEnabled:false,
}

export const category3Slice = createSlice({
    name: 'category3',
    initialState,
    reducers: {
        setDisputes: (state, action) => {
        
            console.log(action)
            state.dispute = action.payload
        },
        setDetail: (state, action) => {
            state.detail = action.payload
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
    setDisputes, 
    setDetail, 
    setContentInquiry,
} = category3Slice.actions

export default category3Slice.reducer