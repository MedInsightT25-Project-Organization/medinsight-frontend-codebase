import { createContext, useContext, useState } from "react";
import { labTestsData } from "../assets/data";

//Create context
export const LabTestContext = createContext();

// Custom hook to use the context
export const useLabTest = () => useContext(LabTestContext);

// const [filterCategory, setFilterCategory] = useState()




//Provider component
const LabTestProvider = ({ children }) => {
	const [selectedLabTest, setSelectedLabTest] = useState(null);

	// To get all the category
	const categories = ["All", ...new Set(labTestsData.map((test) => test.category))]
	console.log(categories)


	const contextValue = { selectedLabTest, setSelectedLabTest, categories }
	return (
		<LabTestContext.Provider value={contextValue}>
			{children}
		</LabTestContext.Provider>
	);
}
export default LabTestProvider