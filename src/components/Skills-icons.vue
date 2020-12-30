<template>
	<ul class="list-inline dev-icons">
		<li
			v-for="(s, index) in skillList"
			:key="`skill-${index}`"
			class="list-inline-item"
		>
			<i :class="`fab fa-${s}`"></i>
		</li>
		<!--<li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
        <li class="list-inline-item"><i class="fab fa-angular"></i></li>
        <li class="list-inline-item"><i class="fab fa-react"></i></li>
        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
        <li class="list-inline-item"><i class="fab fa-less"></i></li>
        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
        <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
        <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
        <li class="list-inline-item"><i class="fab fa-npm"></i></li>-->
	</ul>
</template>

<script>
export default {
	name: "skills-icons",
	props: ["skill-list"],
	data() {
		return {};
	},
};
</script>

<style lang="css" scoped></style>
