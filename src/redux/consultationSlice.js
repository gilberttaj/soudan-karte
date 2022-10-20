import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	categoryName: null,
    prefecture: null,
    age:null,
    gender:null,
    step3Detail:false,
}

export const consultationSlice = createSlice({
    name: 'consultation',
    initialState,
    reducers: {
        setCategoryName: (state, action) => {
            state.categoryName = action.payload
        },  
        setPrefecture: (state, action) => {
            state.prefecture = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setGender: (state, action) => {
            state.gender = action.payload
        },
        setStep3Detail: (state, action) => {
            state.step3Detail = action.payload
        },

    },
})

export const { setCategoryName, setPrefecture, setAge, setGender, setStep3Detail } = consultationSlice.actions

export default consultationSlice.reducer