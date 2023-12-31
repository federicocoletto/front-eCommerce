import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../services/getConfigAuth";

export const purchaseSlice = createSlice({
	name: "purchase",
	initialState: [],
	reducers: {
		setPurchaseG: (state, action) => action.payload,
		addPurchaseG: (state, action) => [...state, action.payload],
	},
});

export const { setPurchaseG, addPurchaseG } = purchaseSlice.actions;

export default purchaseSlice.reducer;

const base_URL = "https://ecommerce-fck-nodejs.onrender.com/api/v1/purchase";
export const getPurchaseThunk = () => (dispatch) => {
	axios
		.get(base_URL, getConfigAuth())
		.then((res) => setPurchaseG(res.data))
		.catch((err) => console.log(err));
};

export const makePurchaseThunk = () => (dispatch) => {
	axios
		.post(base_URL, null, getConfigAuth())
		.then((res) => {
			dispatch(setPurchaseG([res.data]));
		})
		.catch((err) => console.log(err));
};

