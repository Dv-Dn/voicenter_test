import Vue from "vue";
import Vuex from "vuex";
import posts from "./modules/posts";
import users from "./modules/users";
import snackbar from "./modules/snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
	state: () => ({
		loader: false,
	}),
	mutations: {
		updateLoader(state, payload) {
			state.loader = payload;
		},
	},
	modules: { users, posts, snackbar },
});
