<template>
	<div class="home">
		<!-- Search by Post name or User id -->
		<div class="home__search">
			<TextField v-model="input" @keydown.enter="onSearch" label="Search" />
			<Button @click="onSearch">Find</Button>
		</div>
		<div class="home__posts-list">
			<PostCard :key="a.id" v-for="a in posts" :post="a" />
		</div>

		<div class="pagination">
			<span
				:class="[
					'pagination__item',
					{ 'pagination__active-item': currentPage === i },
				]"
				:key="i"
				@click="changePage(i)"
				v-for="(a, i) in Math.floor(postsLength / 10)"
				>{{ i + 1 }}</span
			>
		</div>
	</div>
</template>
<script>
import { PostCard, TextField, Button } from "@/components";
import { mapState } from "vuex";

export default {
	components: {
		PostCard,
		TextField,
		Button,
	},

	created: function() {
		Object.keys(this.user).length
			? this.$store.dispatch("getPosts")
			: this.$router.push("/login/notLogined");
	},
	mounted: function() {
		const { message } = this.$route.query;
		if (message === "noUser") {
			this.$store.dispatch("openSnackbar", "User not found");
		} else if (message === "noPost") {
			this.$store.dispatch("openSnackbar", "Post not found");
		}
	},
	data: () => ({
		input: "",
		search: "",
	}),
	computed: {
		posts() {
			return this.$store.getters.get_posts(this.search);
		},
		postsLength() {
			return this.$store.getters.posts_search(this.search).length;
		},
		...mapState({
			user: (state) => state.users.user,
			postList: (state) => state.posts.posts,
			currentPage: (state) => state.posts.currentPage,
		}),
	},
	methods: {
		onSearch() {
			this.$store.commit("updateCurrentPage", 0);
			this.search = this.input;
		},
		changePage(id) {
			this.$store.commit("updateCurrentPage", id);
		},
	},
};
</script>
