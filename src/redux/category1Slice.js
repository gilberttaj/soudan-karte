import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    situation:'未婚',
    relationshipDuration:'2年未滿',
    consultationType:'浮気調查',
    detail:null,
    cat1Image:null,
    isEnabled:false,
    householdAnnual:null
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
        },
        setHouseholdAnnual: (state, action) => {
            state.householdAnnual = action.payload
        },
        setMap: (state, action) => {
            state.map = action.payload
        },
        setChildren: (state, action) => {
            state.child = action.payload
        },
        setEssentials: (state, action) => {
            state.essential = action.payload
        }
    },
})

export const { setCategoryName, setSituation, 
    setRelationshipDuration, setConsultationType, setDetail, setMap, setChildren, setEssentials, setCat1Image, setHouseholdAnnual } = category1Slice.actions

export default category1Slice.reducer