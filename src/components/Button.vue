<template>
	<button class="button" v-bind="$attrs" v-on="$listeners">
		<slot></slot>
	</button>
</template>
<script>
export default {
	inheritAttrs: false,
};
</script>
