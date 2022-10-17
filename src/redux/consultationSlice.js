import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	categoryName: null,
}

export const consultationSlice = createSlice({
    name: 'consultation',
    initialState,
    reducers: {
        setCategoryName: (state, action) => {
            state.categoryName = action.payload
        },  
    },
})

export const { setCategoryName } = consultationSlice.actions

export default consultationSlice.reducer