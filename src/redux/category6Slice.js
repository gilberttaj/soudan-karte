import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    position: '被害者',
    accidentSituation: '自動車自動車',
    accidentType: '追突事故',
    injury: '怪我有り: 後遺症無し',
    insuranceCoverageStatus: '弁護士特約付き',
    dateOfAccident: null,


}

export const category6Slice = createSlice({
    name: 'category6',
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload
        },
        setAccidentSituation: (state, action) => {
            state.accidentSituation = action.payload
        },
        setAccidentType: (state, action) => {
            state.accidentType = action.payload
        },
        setInjury: (state, action) => {
            state.injury = action.payload
        },
        setInsuranceCoverageStatus: (state, action) => {
            state.insuranceCoverageStatus = action.payload
        },
        setDateOfAccident: (state, action) => {
            state.dateOfAccident = action.payload
        },
        
    },
})

export const { setPosition, setAccidentSituation, setAccidentType, setInjury,
setInsuranceCoverageStatus, setDateOfAccident} = category6Slice.actions

export default category6Slice.reducer