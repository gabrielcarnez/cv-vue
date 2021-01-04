<template>
	<ul class="list-inline dev-icons">
		<li
			v-for="(s, index) in skillList"
			:key="`skill-${index}`"
			class="list-inline-item"
		>
			<i :class="`fab fa-${s}`"></i>
		</li>
	</ul>
</template>

<script>
export default {
	name: "skills-icons",
	props: {
		"skill-list": Array,
	},
	data() {
		return {};
	},
};
</script>

<style lang="css" scoped></style>
