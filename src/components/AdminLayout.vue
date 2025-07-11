<script setup>
import SideNavbar from "./SideNavbar.vue";
import HeaderNavbar from "./HeaderNavbar.vue";
import OffcanvasNav from "./OffcanvasNav.vue";
</script>

<template>
    <!-- offcanvas sidebar -->
    <OffcanvasNav />
    <!-- offcanvas sidebar -->

    <div class="uk-flex">
        <div class="uk-width-1-6@xl uk-width-1-5@l uk-width-1-5@s uk-visible@m">
            <div class="uk-height-viewport" uk-sticky>
                <SideNavbar />
            </div>
        </div>
        <div class="uk-width-expand">
            <div class="uk-flex uk-flex-right">
                <div class="uk-width-expand container">
                    <HeaderNavbar />

                    <div class="wrapper">
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>