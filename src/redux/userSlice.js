import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';


const initialState = {
	token: null,
  isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
  isLogInError: false,
  isLogInMessage: null,
}


// Login user
export const login = createAsyncThunk('user/login', async (userData, thunkAPI) => {
  try {
    return await userService.login(userData)
  } catch (error) {
    const message =
      error.response.data ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})


// Logout user
export const logout = createAsyncThunk('user/logout', async () => {
  return await userService.logout()
})


//Check if hasToken
export const checkHasToken = createAsyncThunk('user/checkHasToken', async () => {
  return await userService.checkHasToken()
})



export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
        state.isLogInError = false
        state.isLogInMessage = null
      },  
    },
    extraReducers: builder => {
      builder
        .addCase(login.pending, state => {
          state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.token = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false
          state.isLogInError = true
          state.message = action.payload
          state.token = null
          state.isLogInMessage = action.payload
        })  
        .addCase(logout.fulfilled, (state) => {
          state.token = null
        })
        .addCase(checkHasToken.fulfilled, (state, action) => {
          state.token = action.payload
        })
  
    }
  })




export const { reset } = counterSlice.actions

export default counterSlice.reducer


