<template>
	<div class="post">
		<div class="post__body">
			<h3 class="post__title">{{ post.title }}</h3>
			<p class="post__text">{{ post.body }}</p>
		</div>

		<ul class="post__comments">
			<Comment :key="a.id" v-for="a in comments" :comment="a" />
		</ul>
	</div>
</template>
<script>
import { mapState } from "vuex";
import { Comment } from "@/components";
export default {
	components: { Comment },
	created: function() {
		const { id } = this.$route.params;
		this.$store.dispatch("getPostById", id);
	},
	computed: mapState({
		post: (state) => state.posts.targetPost,
		comments: (state) => state.posts.comments,
	}),
};
</script>
