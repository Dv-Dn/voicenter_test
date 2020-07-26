import axios from "axios";
import router from "@/router";

const url = "https://jsonplaceholder.typicode.com/users";
export default {
	state: () => ({
		usersList: [],

		// User for "USER" page
		targetUser: {},

		// Logged in user
		user: {},
	}),
	mutations: {
		updateUsersList(state, payload) {
			state.usersList = payload;
		},
		removeUser(state) {
			localStorage.removeItem("user");
			state.user = {};
		},
		updateUser(state, payload) {
			state.user = payload;
		},
		updateTargetUser(state, payload) {
			state.targetUser = payload;
		},
	},
	actions: {
		async getUsers({ commit }) {
			try {
				commit("updateLoader", true);
				const response = await axios.get(url);
				commit("updateUsersList", response.data);
				commit("updateLoader", false);
			} catch (e) {
				console.warn(e);
			}
		},

		// Of course, when we have 10 users, better to just use the search method(Array.prototype.find) ... but when there are many users it is not profitable
		async getUserById({ commit }, payload) {
			try {
				commit("updateLoader", true);

				const response = await axios.get(url + "/" + payload);
				commit("updateTargetUser", response.data);
				commit("updateLoader", false);
			} catch (e) {
				console.warn(e);
				router.push({ path: "/", query: { message: "noUser" } });
			}
		},
	},
	getters: {
		get_user_by_email: (state) => (email) => {
			return state.usersList.find((el) => el.email === email);
		},
	},
};
