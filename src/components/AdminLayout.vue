<script setup lang="ts">

import SideNavbar from "./SideNavbar.vue";
import HeaderNavbar from "./HeaderNavbar.vue";
</script>

<template>
    <div>
        <div class="uk-grid-collapse" uk-grid>
            <div class="uk-width-1-6">
                <SideNavbar />
            </div>
            <div class="uk-width-expand">
                <HeaderNavbar />
                <router-view />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>