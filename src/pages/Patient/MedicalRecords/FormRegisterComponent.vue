<script setup>
import {ref} from "vue";

const formOnStep = ref(1);
const stepTitle = ref('Pendaftaran Pasien');

function handleUpdateFormStep(step) {
    formOnStep.value = step;
}

function handleUpdateStepTitle(title) {
    stepTitle.value = title;
}
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">
            <div class="uk-flex uk-flex-between uk-flex-middle">
                <div>{{ stepTitle }}</div>
                <div class="uk-flex-right form-sub-title">
                    <span>Step {{ formOnStep }}</span> of 2
                </div>
            </div>
        </div>

        <div class="uk-form-stacked form-section-input">
            <router-view @update-form-step="handleUpdateFormStep" @update-step-title="handleUpdateStepTitle" />
        </div>
    </section>
</template>

<style scoped>

</style>