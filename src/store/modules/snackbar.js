export default {
	state: () => ({
		message: "",
		isopen: false,
	}),
	mutations: {
		updateSnackIsOpen(state, payload) {
			state.isopen = payload;
		},
		updateSnackMessage(state, payload) {
			state.message = payload;
		},
	},
	actions: {
		openSnackbar({ commit }, payload) {
			commit("updateSnackMessage", payload);
			commit("updateSnackIsOpen", true);

			setTimeout(() => {
				commit("updateSnackIsOpen", false);
			}, 5000);
		},
	},
};
