import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import "./input.css"
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './service/DataContex.jsx'
import { Provider } from 'react-redux'
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { store } from './store/store.js'
import { authApi } from './store/apis/auth/index.js'
ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		{/*<ApiProvider api={authApi}>*/}
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/*</ApiProvider>*/}
	</Provider>
)
