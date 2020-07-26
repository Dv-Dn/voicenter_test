<template>
	<div class="text-field" @click="focusInput">
		<input
			class="text-field__input"
			placeholder=" "
			:value="value"
			:type="type"
			v-on="{ ...$listeners, input: (e) => $emit('input', e.target.value) }"
			ref="input"
		/>
		<label class="text-field__label">{{ label }}</label>
		<span class="text-field__span"></span>
	</div>
</template>
<script>
export default {
	// inheritAttrs: false,
	props: {
		value: String,
		type: String,
		label: String,
	},
	methods: {
		focusInput() {
			this.$refs.input.focus();
		},
	},
};
</script>
