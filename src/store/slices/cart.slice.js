import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../services/getConfigAuth";

export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		setCartG: (state, action) => action.payload,
		addProductCartG: (state, action) => [...state, action.payload],
		deleteProductCartG: (state, action) => state.filter((cartproduct) => cartproduct.id !== action.payload),
		updateProductCartG: (state, action) => {
			return state.map(cartproduct => {
				if (cartproduct.id !== action.payload.id) {
					return cartproduct
				} else {
					return action.payload
				}
			})
		}
	},
});

export const { setCartG, addProductCartG, deleteProductCartG, updateProductCartG } = cartSlice.actions;

export default cartSlice.reducer;

const base_URL = "http://localhost:8080/api/v1/cart";
export const getCartThunk =
	(url = base_URL) =>
	(dispatch) => {
		axios
			.get(url, getConfigAuth())
			.then((res) => dispatch(setCartG(res.data)))
			.catch((err) => console.log(err));
	};

export const postCartThunk = (product, quantity) => (dispatch) => {
	const url = base_URL;
	const data = {
		quantity,
		productId: product.id
	};
	axios
		.post(url, data, getConfigAuth())
		.then((res) => {
			const obj = {
				...res.data,
				product,
			};
			dispatch(addProductCartG(obj));
		})
		.catch((err) => console.log(err));
};

export const deleteCartThunk = (id) => (dispatch) => {
	const url = `${base_URL}/${id}`;
	axios
		.delete(url, getConfigAuth())
		.then((res) => {
			dispatch(deleteProductCartG(id));
		})
		.catch((err) => console.log(err));
};

export const updateCartThunk = (cartproduct, quantity) => (dispatch) => {
	const url = `${base_URL}/${cartproduct.id}`;
	const data = {
		quantity,
	};
	axios
		.put(url, data, getConfigAuth())
		.then((res) => {
			const obj = {
				...res.data,
				product: cartproduct.product,
			};
			dispatch(updateProductCartG(obj));
		})
		.catch((err) => console.log(err));
};
