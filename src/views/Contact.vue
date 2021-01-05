<template>
	<section class="resume-section" id="contact">
		<div class="resume-section-content">
			<h2 class="mb-0">
				{{ $t("menu.contact") }}
			</h2>
			<div class="subheading mb-5">
				<a mail="GABRIEL.CARNEZ@GMAIL.COM"
					>GABRIEL.CARNEZ@GMAIL.COM - tel:+54 221-6138052</a
				>
			</div>
			<EmailError
				v-if="!request.success && request.errors.length > 0"
				:errors="request.errors"
			/>
			<div class="lead mb-5" v-if="!request.success">
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
			<EmailSuccess
				v-if="request.success && request.errors.length == 0"
			/>
		</div>
	</section>
</template>

<script>
import Input from "@/components/Input.vue";
import EmailSuccess from "@/components/Email-success.vue";
import EmailError from "@/components/Email-error.vue";

export default {
	name: "Contact",
	components: {
		Input,
		EmailSuccess,
		EmailError,
	},
	methods: {
		validateForm() {
			for (const input in this.form) {
				if (!this.form[input].value) {
					this.request.errors.push(this.form[input].name);
				}
			}
			return this.request.errors.length;
		},
		sendEmail() {
			const me = this;

			if (!me.validateForm()) return;
			me.loading = true;
			const params = new URLSearchParams();

			for (const input in me.form) {
				params.append(me.form[input].name, me.form[input].value);
			}

			me.request.errors = [];
			me.axios
				.post(me.url, params)
				.then((response) => {
					const { data } = response;
					me.request.success = data.success;
					me.loading = false;
					if (data.success) {
						for (const input in me.form) {
							me.form[input].value = "";
						}
						me.request.errors = [];
					} else {
						me.request.errors = data.messsage;
					}
				})
				.catch((e) => {
					console.log(e);
					me.request.errors = ["server-error"];
					this.loading = false;
				});
		},
	},
	data() {
		return {
			loading: false,
			url: "http://gabrielcarnez.com.ar/send-email.php",
			request: {
				success: false,
				errors: [],
			},
			form: {
				email: {
					label: this.$t("contact.email"),
					type: "email",
					name: "email",
					value: "",
				},
				name: {
					label: this.$t("contact.name"),
					type: "text",
					name: "name",
					value: "",
				},
				phone: {
					label: this.$t("contact.phone"),
					type: "phone",
					name: "phone",
					value: "",
				},
				message: {
					label: this.$t("contact.message"),
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

button:first-letter {
	text-transform: uppercase;
}

button:hover {
	background-color: #1c8234;
}

@media (max-width: 400px) {
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
	background-color: #ffffff;
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
