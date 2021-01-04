<template>
	<ul class="fa-ul mb-0">
		<li v-for="(l, index) in skilsList" :key="`list-${index}`">
			<span class="fa-li"><i class="fas fa-check"></i></span>
			{{ l }}
		</li>
	</ul>
</template>

<script>
export default {
	name: "Skills-list",
	props: {
		"skils-list": Array,
	},
};
</script>
