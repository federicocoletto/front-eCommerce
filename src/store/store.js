import { configureStore } from "@reduxjs/toolkit";
import users from './slices/users.slice'
import products from './slices/products.slice'
import cart from './slices/cart.slice'

export default configureStore({
	reducer: {
		users,
		products,
		cart
	},
});
