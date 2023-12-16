import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth";
import { authReducer } from "./slices/auth-slices"
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),

})

setupListeners(store.dispatch)