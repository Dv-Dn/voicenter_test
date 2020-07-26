<template>
	<div class="user">
		<h3>User Info</h3>
		<p>Name: {{ user.name }}</p>
		<p>Username: {{ user.username }}</p>
		<p>Email: {{ user.email }}</p>
		<p>Phone: {{ user.phone }}</p>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	created: function() {
		const { id } = this.$route.params;
		this.$store.dispatch("getUserById", id === "current" ? this.current : id);
	},
	computed: mapState({
		user: (state) => state.users.targetUser,
		current: (state) => state.users.user.id,
	}),
};
</script>
