<template>
	<div class="social-icons">
		<a v-if="linkedin" class="social-icon" target="_blank" :href="linkedin"><i class="fab fa-linkedin-in"></i></a>
		<a v-if="github" class="social-icon" target="_blank" :href="github"><i class="fab fa-github"></i></a>
		<a v-if="twitter" class="social-icon" target="_blank" :href="twitter"><i class="fab fa-twitter"></i></a>
		<a v-if="facebook" class="social-icon" target="_blank" :href="facebook"><i class="fab fa-facebook-f"></i></a>
	</div>
</template>

<script>
export default {
	name: "Social-icons",
	props: ["linkedin", "github", "twitter", "facebook"],
	data() {
		return {};
	},
};
</script>

<style lang="css" scoped></style>
