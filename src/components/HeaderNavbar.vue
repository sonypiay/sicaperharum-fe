<script setup>
import authAPI from "../utils/api/AuthAPI.js";
import {useRouter} from "vue-router";
import {useLocalStorage} from "@vueuse/core";
import {onMounted, ref} from "vue";

const router = useRouter();
const userProfile = ref({});

async function handleLogout() {
    await authAPI.logout();
    const userProfile = useLocalStorage('user_profile', '');
    const userToken = useLocalStorage('user_token', '');

    userProfile.value = '';
    userToken.value = '';
    await router.push('/');
}

onMounted(() => {
    userProfile.value = JSON.parse(useLocalStorage('user_profile').value ?? "{}");
});

</script>

<template>
    <header class="uk-width-1-1">
        <nav class="navbar-container">
            <div uk-navbar>
                <div class="uk-navbar-left uk-hidden@s">
                    <div class="uk-navbar-item">
                        <div class="uk-margin-small-left" uk-toggle="target: #offcanvas-nav">
                            <span uk-icon="icon: menu; ratio: 1.2"></span>
                        </div>
                    </div>
                </div>
                <div class="uk-navbar-right uk-margin-right">
                    <a class="uk-navbar-item navbar-profile-container">
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-5">
                                <div v-if="userProfile.image" class="nav-avatar">
                                    <img :src="userProfile.image.url" alt="Avatar" />
                                </div>
                                <div v-else class="nav-avatar">
                                    <img src="../assets/images/sample-avatar.jpeg" />
                                </div>
                            </div>
                            <div class="uk-width-expand">
                                <div class="uk-flex uk-flex-between uk-flex-middle">
                                    <div class="navbar-profile-info">
                                        <div class="nav-profile-name">
                                            {{ userProfile.name }}
                                            <span v-if="userProfile.gelar">({{ userProfile.gelar }})</span>
                                        </div>
                                        <div class="nav-profile-role">Superadmin</div>
                                    </div>
                                    <div class="navbar-icon-dropdown">
                                        <span class="las la-angle-down"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <div class="uk-navbar-dropdown navbar-dropdown">
                        <ul class="uk-nav uk-dropdown-nav nav-dropdown">
                            <li><a href="#" @click="handleLogout()">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
</style>