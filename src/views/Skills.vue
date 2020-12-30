<template>
    <section class="resume-section" id="skills">
        <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <SkillIcons :skill-list="skillIcons" />
            <div class="subheading mb-3">Workflow</div>
            <SkillList :skils-list="skilsList" />
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import SkillIcons from "@/components/Skills-icons.vue";
import SkillList from "@/components/Skills-list.vue";
export default {
    name: "Skills",
    components: {
        SkillIcons,
        SkillList,
    },
    data() {
        return {
            skillIcons: [
                "css3-alt",
                "html5",
                "js",
                "react",
                "node-js",
                "vuejs",
                "php",
                "git",
                "bootstrap",
            ],
            skilsList: [
                this.$t("skills.responsive-design"),
                this.$t("skills.cross-browser-testing-debugging"),
                this.$t("skills.mobile-first-responsive-design"),
                this.$t("skills.cross-functional-teams"),
                this.$t("skills.agile-development-scrum"),
            ],
        };
    },
};
</script>
