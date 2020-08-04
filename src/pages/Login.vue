<template>
	<div class="login">
		<div class="form">
			<h3 class="form__title">Login</h3>
			<TextField type="email" v-model="input" label="Emal" />
			<p class="form__help">
				<span class="text_bold">Try one of this:</span> Sincere@april.biz ,
				Shanna@melissa.tv, Nathan@yesenia.net
			</p>
			<Button @click="submit">Submit</Button>
		</div>
	</div>
</template>
<script>
import { TextField, Button } from "@/components";

export default {
	components: {
		TextField,
		Button,
	},
	mounted: function() {
		const { message } = this.$route.params;
		if (message === "notLogined") {
			this.$store.dispatch("openSnackbar", "Enter the data");
		}
	},
	data: () => ({
		input: "",
	}),
	computed: {
		user: function() {
			return this.$store.getters.get_user_by_email(this.input);
		},
	},

	methods: {
		submit() {
			if (this.user) {
				localStorage.user = JSON.stringify(this.user);
				this.$store.commit("updateUser", this.user);
				this.$router.push("/");
			} else this.$store.dispatch("openSnackbar", "User not found");
		},
	},
};
</script>
