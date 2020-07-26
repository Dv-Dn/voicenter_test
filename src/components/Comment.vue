<template>
	<article class="comment">
		<h4 class="comment__name">{{ comment.name }}</h4>
		<p class="comment__body">"{{ comment.body }}"</p>
		<p class="comment__email">{{ comment.email }}</p>
	</article>
</template>

<script>
export default {
	props: {
		comment: Object,
	},
};
</script>
