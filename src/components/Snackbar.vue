<template>
	<div class="snackbar" v-if="isopen">
		<div class="snackbar__body">
			{{ message }}
			<a class="snackbar__btn" @click="close">close</a>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	computed: mapState({
		message: (state) => state.snackbar.message,
		isopen: (state) => state.snackbar.isopen,
	}),
	methods: {
		close() {
			this.$store.commit("updateSnackIsOpen", false);
		},
	},
};
</script>
