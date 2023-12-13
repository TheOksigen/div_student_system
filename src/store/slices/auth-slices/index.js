import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	access_token: null,
	expires_in: null,
	ttoken_type: null
}

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {}
})


export const authReducer = authSlice.reducer;
export const { } = authSlice.actions