<script setup>

import {useSessionStorage} from "@vueuse/core";
import {reactive} from "vue";
import FormHematologi from "./FormHematologi.vue";

const formPatient = useSessionStorage('form-patient');
const navTabList = reactive({
    list: [
        {
            title: 'Hematologi',
            value: 'hematologi',
            active: true
        },
        {
            title: 'Kimia Klinik',
            value: 'kimia_klinik',
            active: false
        },
        {
            title: 'Urinalisa',
            value: 'urinalisa',
            active: false
        },
        {
            title: 'Imunoserologi',
            value: 'imunoserologi',
            active: false
        },
        {
            title: 'Mikroskopis',
            value: 'mikroskopis',
            active: false
        },
        {
            title: 'TCM',
            value: 'tcm',
            active: false
        },
        {
            title: 'Lainnya',
            value: 'lainnya',
            active: false
        },
    ],
});

function onHandleTabClick(value, index) {
    navTabList.list.forEach((tab, i) => {
        tab.active = value === tab.value;
    });
}
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">
            <div class="uk-flex uk-flex-between uk-flex-middle">
                <div>Hasil Lab</div>
                <div class="uk-flex-right form-sub-title">
                    <span>Step 2</span> of 2
                </div>
            </div>
        </div>

        <nav class="form-nav-tab uk-flex uk-flex-center">
            <a v-for="(tab, index) in navTabList.list" class="uk-width-1-2@l uk-width-1-1@m nav-btn" :key="tab.title" :class="{ 'nav-btn-active': tab.active }" @click="onHandleTabClick(tab.value)">
                {{ tab.title }}
            </a>
        </nav>

        <div class="uk-form-stacked form-section-input">
            <FormHematologi />
        </div>
    </section>
</template>

<style scoped>

</style>