<script setup>
import RegisterPatient from "./RegisterPatient.vue";
import RegisterMedicalRecord from "./RegisterMedicalRecord.vue";
import {ref} from "vue";

const onStep = ref(1);
</script>

<template>
    <RegisterPatient v-if="onStep === 1" />
    <RegisterMedicalRecord v-if="onStep === 2" />
</template>

<style scoped>

</style>