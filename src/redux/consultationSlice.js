import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import consultationService from './consultationService';

const initialState = {
    index: 0,
	categoryName: null,
    prefecture: '北海道',
    age:'18歳以下',
    gender: '男性',
    step3Detail:false,
    detail:'',
    isEnabled: false,
    image: null,
}


//Upload Image
export const pickImage = createAsyncThunk('consultation/pickImage', async () => {
	try{
		return await consultationService.pickImage()
	}catch(error){
		return console.log('error', error)
	}
})


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
        setDetail: (state, action) => {
            state.detail = action.payload
        },
        setIsEnabled: (state, action) => {
            state.isEnabled = action.payload
        },
        setImage: (state, action) => {
            state.image = action.payload
        }   
    },
    extraReducers: (builder) => {
        builder
            .addCase(pickImage.fulfilled, (state, action) => {
                state.image = action.payload
            })
    }
})

export const { incrementIndex,decrementIndex, setCategoryName, setPrefecture, setAge, setGender, setStep3Detail, resetIndex, setDetail, setIsEnabled } = consultationSlice.actions

export default consultationSlice.reducer