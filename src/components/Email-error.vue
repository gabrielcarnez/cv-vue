<template>
	<div class="lead mb-5">
		<p>{{ $t("contact.an-error!") }}</p>
		<p v-for="e in errors">
			<span v-if="e=='server-error'">
				{{ $t(`contact.server-fail`, { input: e }) }}
			</span>
			<span v-if="e!='server-error'">
				{{ $t(`contact.input-fail`, { input: e }) }}
			</span>
		</p>
	</div>
</template>

<script>
export default {
	name: "Email-error",
	props: {
		errors: Array,
	},
	data() {
		return {};
	},
};
</script>

<style lang="css" scoped>
	p {
		color:red;
	}
</style>
