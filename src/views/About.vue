<template>
	<section class="resume-section" id="about">
		<div class="resume-section-content">
			<h1 class="mb-0">
				Gabriel
				<span class="text-primary">Carnez</span>
			</h1>
			<div class="subheading mb-5">
				LA PLATA, BUENOS AIRES, ARGENTINA · CO 1900 ·
				<a href="GABRIEL.CARNEZ@GMAIL.COM">GABRIEL.CARNEZ@GMAIL.COM</a>
			</div>
			<p class="lead mb-5">
				{{ $t("about.description") }}
			</p>
			<SocialIcons linkedin="dasdas" facebook="dasdas" />
		</div>
	</section>
</template>

<script>
import SocialIcons from "@/components/Social-icons.vue";
export default {
	name: "About",
	components: {
		SocialIcons,
	},
	data() {
		return {};
	},
};
</script>
