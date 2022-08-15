import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signInUser: (state, action) => {
			state.user = {
				password: action.payload.password,
				email: action.payload.email,
			};
			state.isAuthenticated = true;
		},
		registerUser: (state, action) => {
			state.user = {
				name: action.payload.name,
				email: action.payload.email,
			};
			state.isAuthenticated = true;
		},
		signOutUser: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		},
	},
});

export const { signInUser, registerUser, signOutUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
