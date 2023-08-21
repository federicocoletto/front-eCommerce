import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		setProductsG: (state, action) => action.payload,
	},
});

export const { setProductsG } = productsSlice.actions;

export default productsSlice.reducer;

const base_URL = "http://localhost:8080/api/v1/products";
export const getAllProductsThunk =
	(url = base_URL) =>
	(dispatch) => {
		axios
			.get(url)
			.then((res) => dispatch(setProductsG(res.data)))
			.catch((err) => console.log(err));
	};
