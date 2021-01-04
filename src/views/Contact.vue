<template>
	<section class="resume-section" id="contact">
		<div class="resume-section-content">
			<h2 class="mb-0">
				{{ $t("menu.contact") }}
			</h2>
			<div class="subheading mb-5">
				<a href="GABRIEL.CARNEZ@GMAIL.COM">GABRIEL.CARNEZ@GMAIL.COM</a>
			</div>

			<div
				class="lead mb-5"
				v-if="!request.success && request.errors.length == 0"
			>
				<div>
					<Input
						v-for="(input, index) in form"
						:key="`input-${index}`"
						:label="input.label"
						:type="input.type"
						:name="input.name"
						:inputData.sync="input.value"
					/>
					<button @click="sendEmail" :disabled="loading">
						<span v-if="!loading">{{ $t("contact.send") }}</span>
						<div v-if="loading" class="spinner">
							<div class="rect1"></div>
							<div class="rect2"></div>
							<div class="rect3"></div>
							<div class="rect4"></div>
							<div class="rect5"></div>
						</div>
					</button>
				</div>
			</div>
			<div
				class="lead mb-5"
				v-if="request.success && request.errors.length == 0"
			>
				{{ $t("message-sended") }}
			</div>
			<div
				class="lead mb-5"
				v-if="request.success && request.errors.length > 0"
			>
				<p>{{ $t("an-error!") }}</p>
				<p v-for="e in request.errors">{{ e }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import Input from "@/components/Input.vue";
export default {
	name: "Contact",
	components: {
		Input,
	},
	methods: {
		sendEmail() {
			this.loading = !this.loading;
			const me = this;
			setTimeout(function() {
				me.loading = false;
				me.form.email.value = "";
				me.form.name.value = "";
				me.form.phone.value = "";
				me.form.message.value = "";
				me.request.success = true;
				me.request.errors = ["404 error"];
			}, 2000);
		},
	},
	data() {
		return {
			loading: false,
			request: {
				success: false,
				errors: [],
			},
			form: {
				email: {
					label: "contact.email",
					type: "email",
					name: "email",
					value: "",
				},
				name: {
					label: "contact.name",
					type: "text",
					name: "name",
					value: "",
				},
				phone: {
					label: "contact.phone",
					type: "phone",
					name: "phone",
					value: "",
				},
				message: {
					label: "contact.message",
					type: "textarea",
					name: "message",
					value: "",
				},
			},
		};
	},
};
</script>

<style lang="css" scoped>
button {
	font-weight: bold;
	color: white;
	background-color: #28a745;
	border: 0px;
	padding: 10px;
	height: 60px;
	width: 50%;
}

button:hover {
	background-color: #1c8234;
}

@media (max-width : 400px) {
    button {
		font-weight: bold;
		color: white;
		background-color: #28a745;
		border: 0px;
		padding: 10px;
		height: 60px;
		width: 100%;
	}
}

.spinner {
	height: 60px;
	text-align: center;
}

.spinner > div {
	background-color: #FFFFFF;
	height: 60%;
	width: 6px;
	display: inline-block;

	-webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
	animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s;
}

.spinner .rect3 {
	-webkit-animation-delay: -1s;
	animation-delay: -1s;
}

.spinner .rect4 {
	-webkit-animation-delay: -0.9s;
	animation-delay: -0.9s;
}

.spinner .rect5 {
	-webkit-animation-delay: -0.8s;
	animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
	0%,
	40%,
	100% {
		-webkit-transform: scaleY(0.4);
	}
	20% {
		-webkit-transform: scaleY(1);
	}
}

@keyframes sk-stretchdelay {
	0%,
	40%,
	100% {
		transform: scaleY(0.4);
		-webkit-transform: scaleY(0.4);
	}
	20% {
		transform: scaleY(1);
		-webkit-transform: scaleY(1);
	}
}


</style>
