<template>
    <section class="resume-section" id="experience">
        <div class="resume-section-content">
            <h2 class="mb-5">EDUCATION</h2>
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
import ExprienceCard from "@/components/Education-card.vue";

export default {
    name: "Education",
    components: {
        ExprienceCard,
    },
    data() {
        return {
            experience: [
                {
                    title: "UTN - FRLP",
                    subTitle: this.$t("education.utn.title"),
                    time: this.$t("education.utn.time"),
                },
                {
                    title: "CFP 40",
                    subTitle: this.$t("education.cfp_1.title"),
                    time: this.$t("education.cfp_1.time"),
                },
                {
                    title: "CFP 402",
                    subTitle: this.$t("education.cfp_2.title"),
                    time: this.$t("education.cfp_2.time"),
                },
            ],
        };
    },
};
</script>
