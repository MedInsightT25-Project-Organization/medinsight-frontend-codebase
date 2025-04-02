import { createContext, useContext, useState } from "react";
import { labTestsData } from "../assets/data";

//Create context
export const LabTestContext = createContext();

const getDefaultCart = () => {
	let cart = {}
	for (let i = 1; i < labTestsData.length + 1; i++) {
		cart[i] = 0
	}

	console.log(cart)

	return cart
}





// Custom hook to use the context
export const useLabTest = () => useContext(LabTestContext);

// const [filterCategory, setFilterCategory] = useState()


//Provider component
const LabTestProvider = ({ children }) => {
	const [selectedLabTest, setSelectedLabTest] = useState(null);

	// 
	const [cartItems, setCartItems] = useState(getDefaultCart)

	// To get all the category
	const categories = ["All", ...new Set(labTestsData.map((test) => test.category))]
	// console.log(categories)


	// Function to add to cart
	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
		console.log(cartItems)

	}


	const contextValue = { selectedLabTest, setSelectedLabTest, categories, addToCart }
	return (
		<LabTestContext.Provider value={contextValue}>
			{children}
		</LabTestContext.Provider>
	);
}
export default LabTestProvider