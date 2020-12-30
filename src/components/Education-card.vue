<template>
	<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
		<div class="flex-grow-1">
			<h3 class="mb-0">{{ title }}</h3>
			<div class="subheading mb-3">{{ subTitle }}</div>
		</div>
		<div class="flex-shrink-0">
			<span class="text-primary">{{ time }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Education-card",
	props:["title","sub-title","time"]
};
</script>
