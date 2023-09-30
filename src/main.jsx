import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import "./input.css"
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './service/DataContex.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
	<DataProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</DataProvider>
)
