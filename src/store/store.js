import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth";
import { authReducer } from "./slices/auth-slices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sexesApi } from "./apis/sexes/sexes";
import { countryApi } from "./apis/country/country";
import { contactTypesApi } from "./apis/contactTypes/contactTypes";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [sexesApi.reducerPath]: sexesApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
    [contactTypesApi.reducerPath]: contactTypesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    sexesApi.middleware,
    countryApi.middleware,
    contactTypesApi.middleware,
  ],
});

setupListeners(store.dispatch);

// export const store = configureStore({
//   reducer: {
//     countSlice: countSlice.reducer,
//     [sexesApi.reducerPath]: sexesApi.reducer,
//     [countryApi.reducerPath]: countryApi.reducer,
//     [contactTypesApi.reducerPath]: contactTypesApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     sexesApi.middleware,
//     countryApi.middleware,
//     contactTypesApi.middleware,
//   ],
// });
