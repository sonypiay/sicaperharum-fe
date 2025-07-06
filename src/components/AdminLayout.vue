<script setup lang="ts">

import SideNavbar from "./SideNavbar.vue";
import HeaderNavbar from "./HeaderNavbar.vue";
import OffcanvasNav from "./OffcanvasNav.vue";
</script>

<template>
    <!-- offcanvas sidebar -->
    <OffcanvasNav />
    <!-- offcanvas sidebar -->

    <div>
        <div class="uk-grid-collapse" uk-grid>
            <div class="uk-width-1-6@xl uk-width-1-5@m uk-width-2-5@s uk-grid-item-match">
                <SideNavbar />
            </div>
            <div class="uk-width-expand">
                <HeaderNavbar />

                <div class="uk-width-1-1 container">
                    <div class="wrapper">
                        <div>
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>