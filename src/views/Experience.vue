<template>
    <section class="resume-section" id="experience">
        <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <ExprienceCard
                v-for="(e, index) in experience"
                :key="`e-${index}`"
                :title="e.title"
                :subTitle="e.subTitle"
                :time="e.time"
                :description="e.description"
            />
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import ExprienceCard from "@/components/Exprience-card.vue";

export default {
    name: "Experience",
    components: {
        ExprienceCard,
    },
    data() {
        return {
            experience: [
                {
                    title: "FABA",
                    subTitle: this.$t("experience.full-stack"),
                    time: this.$t("experience.FABA.time"),
                    description: this.$t("experience.FABA.description")
                },
                {
                    title: "FREELANCE",
                    subTitle: this.$t("experience.full-stack"),
                    time: this.$t("experience.FREELANCE.time"),
                    description: this.$t("experience.FREELANCE.description")
                },
                {
                    title: "ARZION",
                    subTitle: `${this.$t("experience.full-stack")} - ${this.$t("experience.front-end")}`,
                    time: this.$t("experience.ARZION.time"),
                    description: this.$t("experience.ARZION.description")
                },
                {
                    title: "SUONPER",
                    subTitle: this.$t("experience.full-stack"),
                    time: this.$t("experience.SUONPER.time"),
                    description: this.$t("experience.SUONPER.description")
                },
            ],
        };
    },
};
</script>
