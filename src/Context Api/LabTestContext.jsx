import { createContext, useContext, useState, useEffect } from "react";
import { labTestsData } from "../assets/data";

export const LabTestContext = createContext();

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < labTestsData.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

// Custom hook
export const useLabTest = () => useContext(LabTestContext);

const LabTestProvider = ({ children }) => {
	const [selectedLabTest, setSelectedLabTest] = useState(null);

	// ✅ Load cart from localStorage or default
	const [cartItems, setCartItems] = useState(() => {
		const savedCart = localStorage.getItem("labCart");
		return savedCart ? JSON.parse(savedCart) : getDefaultCart();
	});

	// ✅ Save cart to localStorage on change
	useEffect(() => {
		localStorage.setItem("labCart", JSON.stringify(cartItems));
	}, [cartItems]);

	// Categories
	const categories = ["All", ...new Set(labTestsData.map((test) => test.category))];

	// Add to cart
	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	// Remove from cart
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({
			...prev,
			[itemId]: Math.max(prev[itemId] - 1, 0),
		}));
	};

	// Total cart count
	const getTotalCartCount = () => {
		return Object.values(cartItems).reduce((total, count) => total + count, 0);
	};

	// Total cart amount
	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				const itemInfo = labTestsData.find((labTest) => labTest.id === Number(item));
				if (itemInfo) {
					totalAmount += cartItems[item] * itemInfo.price;
				}
			}
		}
		return totalAmount;
	};

	const contextValue = {
		selectedLabTest,
		setSelectedLabTest,
		categories,
		cartItems,
		addToCart,
		removeFromCart,
		getTotalCartCount,
		getTotalCartAmount,
	};

	return <LabTestContext.Provider value={contextValue}>{children}</LabTestContext.Provider>;
};

export default LabTestProvider;
