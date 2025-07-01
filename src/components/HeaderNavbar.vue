<script setup>
import authAPI from "../utils/api/AuthAPI.js";
import {useRouter} from "vue-router";

const router = useRouter();

async function handleLogout() {
    await authAPI.logout();
    localStorage.removeItem('user_session');
    await router.push('/');
}
</script>

<template>
    <header>
        <nav class="navbar-container">
            <div class="">
                <div uk-navbar>
                    <div class="uk-navbar-right">
                        <a class="uk-navbar-item navbar-profile-container">
                            <div class="uk-grid-small" uk-grid>
                                <div class="uk-width-1-5">
                                    <div class="nav-avatar">
                                        <img src="../assets/images/sample-avatar.jpeg" />
                                    </div>
                                </div>
                                <div class="uk-width-expand">
                                    <div uk-grid>
                                        <div class="uk-width-3-4">
                                            <div class="navbar-profile-info">
                                                <div class="nav-profile-name">Sony Darmawan</div>
                                                <div class="nav-profile-role">Superadmin</div>
                                            </div>
                                        </div>
                                        <div class="uk-width-expand">
                                            <div class="navbar-icon-dropdown">
                                                <span class="las la-angle-down"></span>
                                            </div>
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
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
</style>