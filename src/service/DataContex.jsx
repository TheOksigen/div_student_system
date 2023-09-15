import { createContext, useEffect, useState } from "react";
const DataContext = createContext()

function DataProvider({ children }) {
	const [data, setData] = useState([])
	let obj = { data, setData }

	useEffect(() => {
		fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/UmicoProducts.json")
			.then(response => response.json())
			.then(json => setData(json))
	}, []);
	return (
		<DataContext.Provider value={obj}>
			{children}
		</DataContext.Provider>
	)
}

export default DataProvider
export { DataContext };