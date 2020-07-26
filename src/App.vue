<template>
	<div id="app">
		<header
			class="header"
			v-if="this.$route.name !== 'Login' && this.$route.name !== '404'"
		>
			<nav class="wrap nav">
				<router-link class="nav__link" to="/">Home</router-link>
				<router-link class="nav__link" to="/user/current">User</router-link>
				<a class="nav__link" href="javascript:void(0)" @click="logout"
					>Logout
				</a>
			</nav>
		</header>
		<Loader v-show="loader" />

		<main class="container" v-show="!loader">
			<router-view />
		</main>
		<Snackbar />
	</div>
</template>
<script>
import { Snackbar, Loader } from "@/components";
import { mapState } from "vuex";

export default {
	components: { Snackbar, Loader },
	computed: mapState(["loader"]),
	created: function() {
		const user = localStorage.user;
		if (user) this.$store.commit("updateUser", JSON.parse(user));
		this.$store.dispatch("getUsers");
	},

	methods: {
		logout() {
			this.$router.push("/login");
			this.$store.commit("removeUser");
		},
	},
};
</script>
<style lang="scss">
@import "~@/styles/main";
</style>
