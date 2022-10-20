import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    situation:null,
    relationshipDuration:null,
    consultationType:null,
    detail:null,
    cat1Image:null,
    isEnabled:false,
}

export const category1Slice = createSlice({
    name: 'category1',
    initialState,
    reducers: {
        setSituation: (state, action) => {
            state.situation = action.payload
        },
        setRelationshipDuration: (state, action) => {
            state.relationshipDuration = action.payload
        },
        setConsultationType: (state, action) => {
            state.consultationType = action.payload
        },
        setDetail: (state, action) => {
            state.detail = action.payload
        },
        setCat1Image: (state, action) => {
            state.detail = action.payload
        },
        setIsEnabled: (state, action) => {
            if(state.detail != null){
                state.isEnabled = true;
            }
        }
    },
})

export const { setCategoryName, setSituation, 
    setRelationshipDuration, setConsultationType, setDetail, setCat1Image } = category1Slice.actions

export default category1Slice.reducer