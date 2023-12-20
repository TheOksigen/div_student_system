import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	access_token: null,
	expires_in: null,
	token_type: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setisAuthenticated(state, action) {
			state.isAuthenticated = action.payload
		},
		setAccessToken(state, action) {
			state.access_token = action.payload;
			state.isAuthenticated = true;
		},
		setExpiresIn(state, action) {
			state.expires_in = action.payload;
		},
		setTokenType(state, action) {
			state.token_type = action.payload;
		}
	}
});

export const { setAccessToken, setisAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
