import { configureStore } from "@reduxjs/toolkit";
import { authApi, authReducer } from "./apis/auth";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		//[authApi.reducerPath]: authApi.reducer,
	}


})
