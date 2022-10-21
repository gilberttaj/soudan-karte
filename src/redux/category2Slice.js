import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    situation:'未婚',
    relationshipDuration:'2年未滿',
    consultationType:null,
    detail:null,
    cat1Image:null,
    isEnabled:false,
    householdAnnual:'300万円未満',
    map: '不良行為',
    child: 'いない',
    essential: '養育費を取り決めたい',
    civilStatus: null,
    haveRealEstate: null,
    childSupport: null
}

export const category2Slice = createSlice({
    name: 'category2',
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
        },
        setCivilStatus: (state, action) => {
            // console.log(action)
            state.civilStatus = action.payload
        },
        setHaveRealEstate: (state, action) => {
            // console.log(action)
            state.haveRealEstate = action.payload
        },
        setChildSupport: (state, action) => {
            state.childSupport = action.payload
        }
    },
})

export const { 
    setCategoryName, 
    setSituation, 
    setRelationshipDuration, 
    setConsultationType, 
    setDetail, 
    setMap, 
    setChildren, 
    setEssentials, 
    setCat1Image,
    setCivilStatus, 
    setHouseholdAnnual,
    setHaveRealEstate,
    setChildSupport
} = category2Slice.actions

export default category2Slice.reducer