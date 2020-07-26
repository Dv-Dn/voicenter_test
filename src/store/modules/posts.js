import axios from "axios";
import router from "@/router";

const url = "https://jsonplaceholder.typicode.com/posts";
export default {
	state: () => ({
		posts: [],
		targetPost: {},
		comments: {},
		currentPage: 0,
	}),
	mutations: {
		updatePosts(state, payload) {
			state.posts = payload;
		},
		updateCurrentPost(state, payload) {
			state.targetPost = payload;
		},
		updateComments(state, payload) {
			state.comments = payload;
		},
		updateCurrentPage(state, payload) {
			state.currentPage = payload;
		},
	},
	actions: {
		async getPosts({ commit }) {
			try {
				commit("updateLoader", true);

				const response = await axios.get(url);
				commit("updatePosts", response.data);
				commit("updateLoader", false);
			} catch (e) {
				console.warn(e);
			}
		},
		async getPostById({ commit, dispatch }, payload) {
			try {
				commit("updateLoader", true);

				const response = await axios.get(url + "/" + payload);
				commit("updateCurrentPost", response.data);
				dispatch("getCommentsByPostId", payload);
				commit("updateLoader", false);
			} catch (e) {
				console.warn(e);
				router.push({ path: "/", query: { message: "noPost" } });
			}
		},
		async getCommentsByPostId({ commit }, payload) {
			try {
				const response = await axios.get(url + "/" + payload + "/comments");
				commit("updateComments", response.data);
			} catch (e) {
				console.warn(e);
			}
		},
	},
	getters: {
		get_posts: (state, getters) => (string) => {
			return getters
				.posts_search(string)
				.slice(state.currentPage * 10, state.currentPage * 10 + 10);
		},
		posts_search: (state) => (string) => {
			return state.posts.filter(
				(el) => el.title.search(string) != -1 || el.userId === +string
			);
		},
	},
};
