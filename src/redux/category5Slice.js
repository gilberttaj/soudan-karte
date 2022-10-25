import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isDeceased:null,
    propertyValue: '3,000万円未満',
    includeRealEstate: null,
    numberOfHeirs: '1名',
    consultationSummary: '紛争解決',
    dateOfInheritance: null,
}

export const category5Slice = createSlice({
    name: 'category5',
    initialState,
    reducers: {
        setIsDeceased: (state, action) => {
            state.isDeceased = action.payload
        },
        setPropertyValue: (state, action) => {
            state.propertyValue = action.payload
        },
        setIncludeRealEstate: (state, action) => {
            state.includeRealEstate = action.payload
        },
        setNumberOfHeirs: (state, action) => {
            state.numberOfHeirs = action.payload
        },
        setConsultationSummary: (state, action) => {
            state.consultationSummary = action.payload
        },
        setDateOfInheritance: (state, action) => {
            state.dateOfInheritance = action.payload
        },
        
    },
})

export const { setIsDeceased, setPropertyValue, setIncludeRealEstate, setNumberOfHeirs, setConsultationSummary, setDateOfInheritance } = category5Slice.actions

export default category5Slice.reducer