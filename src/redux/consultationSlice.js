import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    index: 0,
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
        incrementIndex: (state, action) => {
            state.index = state.index+1
        },  
        decrementIndex: (state, action) => {
            state.index = state.index-1
        },  
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
        resetIndex: (state, action) => {
            state.index = 0
        },
        

    },
})

export const { incrementIndex,decrementIndex, setCategoryName, setPrefecture, setAge, setGender, setStep3Detail, resetIndex } = consultationSlice.actions

export default consultationSlice.reducer