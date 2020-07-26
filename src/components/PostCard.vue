<template>
	<article class="post-card">
		<router-link class="post-card__title" :to="'/post/' + post.id"
			><h3>{{ post.title }}</h3></router-link
		>
		<p class="post-card__text">
			{{ post.body }}
		</p>
		<router-link class="post-card__author" :to="'/user/' + post.userId"
			>Author</router-link
		>
	</article>
</template>
<script>
export default {
	props: {
		post: Object,
	},
};
</script>
