<template>
	<shadow>
		<div v-if="type !== 'textarea'">
			<label>{{ label }}</label
			><br />
			<input
				:type="type"
				:name="name"
				v-model="inputData"
				@keyup="$emit(`update:inputData`, inputData)"
			/>
		</div>
		<div v-if="type == 'textarea'">
			<label>{{ label }}</label
			><br />
			<textarea
				:name="name"
				v-model="inputData"
				@keyup="$emit(`update:inputData`, inputData)"
			></textarea>
		</div>
	</shadow>
</template>

<script>
export default {
	name: "Input",
	props: {
		label: String,
		type: String,
		name: String,
		inputData: String,
	},
	data() {
		return {};
	},
};
</script>

<style lang="css" scoped>
input {
	width: 50%;
}

textarea {
	width: 50%;
}


@media (max-width : 400px) {
    input {
		width: 100%;
	}

	textarea {
		width: 100%;
	}

}

</style>
