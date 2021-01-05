<template>
	<nav
		class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
		id="sideNav"
	>
		<a class="navbar-brand js-scroll-trigger" href="#page-top">
			<span class="d-block d-lg-none">{{ getName }}</span>
			<span class="d-none d-lg-block"
				><img
					class="img-fluid img-profile rounded-circle mx-auto mb-2"
					src="@/assets/photo.jpeg"
					alt=""
			/></span>
		</a>
		<button
			@click="showMenu"
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div
			:class="visible ? 'show' : ''"
			class="collapse navbar-collapse"
			id="navbarSupportedContent"
		>
			<ul class="navbar-nav">
				<li
					v-for="(m, index) in menu"
					:key="`menu-${index}`"
					class="nav-item"
				>
					<router-link
						v-if="m.path"
						class="nav-link js-scroll-trigger"
						:to="m.path"
						>{{ m.title }}</router-link
					>
					<a
						v-if="m.pdf"
						class="nav-link js-scroll-trigger"
						:href="m.pdf"
						download="cv"
						target="_blank"
						>{{ m.title }}</a
					>
				</li>
			</ul>
		</div>
		<template v-if="false && !isMobile()">
			<div class="locale-changer">
				<select v-model="$i18n.locale">
					<option
						v-for="(lang, i) in langs"
						:key="`Lang${i}`"
						:value="lang"
						>{{ lang }}</option
					>
				</select>
			</div>
		</template>
	</nav>
</template>

<script>
export default {
	name: "Menu",
	props: {
		menu: Array,
	},
	methods: {
		showMenu() {
			this.visible = !this.visible;
		},
		isMobile() {
		   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		     return true
		   } else {
		     return false
		   }
		 }
		
	},
	data() {
		return {
			visible: false,
			langs: ["en", "es"],
		};
	},
};
</script>

<style lang="css" scoped></style>
