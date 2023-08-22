import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../services/getConfigAuth";

const usersSlice = createSlice({
	name: "users",
	initialState: [],
	reducers: {
		setUsersG: (state, action) => action.payload,
		createUserG: (state, action) => [...state, action.payload],
	},
});

export const { setUsersG } = usersSlice.actions;

export default usersSlice.reducer;

// thunks
const base_URL = "http://localhost:8080/api/v1/users";

export const getUsersThunk = () => (dispatch) => {
	const url = base_URL;
	axios
		.get(url, getConfigAuth()) //
		.then((res) => dispatch(setUsersG(res.data)))
		.catch((err) => console.log(err));
};

export const createUserThunk = (user) => (dispatch) => {
	const url = base_URL;
	axios
		.post(url, user)
		.then((res) => dispatch(createUserG(res.data)))
		.catch((err) => console.log(err));
};

// export const deleteUserThunk = (userId) => (dispatch) => {
// 	const url = `${base_URL}/${userId}`;
// 	axios
// 		.delete(url, userId)
// 		.then(() => dispatch(deleteUserG(userId)))
// 		.catch((err) => console.log(err));
// };

// export const updateUserThunk = (userId, userUpdate) => (dispatch) => {
// 	const url = `${base_URL}/${userId}`;
// 	axios
// 		.put(url, userUpdate)
// 		.then(() => dispatch(updateUserG(userUpdate)))
// 		.catch((err) => console.log(err));
// };
