<script setup>
import {useRouter} from "vue-router";
import authAPI from "../utils/api/AuthAPI.js";
import {useLocalStorage} from "@vueuse/core";

function offCanvasToggleHide() {
    UIkit.offcanvas('#offcanvas-nav').hide();
}

const router = useRouter();

async function handleLogout() {
    await authAPI.logout();
    const userProfile = useLocalStorage('user_profile', '');
    const userToken = useLocalStorage('user_token', '');

    userProfile.value = '';
    userToken.value = '';
    await router.push('/');
}
</script>

<template>
    <div id="offcanvas-nav" uk-offcanvas>
        <div class="uk-offcanvas-bar uk-box-shadow-small offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>

            <nav class="offcanvas-sidebar-nav">
                <div class="nav-logo">
                    <img src="../assets/images/logo_pkm_botim.png" />
                </div>

                <ul class="uk-nav uk-nav-default offcanvas-nav-list" uk-nav>
                    <li>
                        <router-link to="/admin" @click="offCanvasToggleHide()">
                            <span class="las la-home"></span> Dashboard
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{name: 'list-visitor-patient'}" @click="offCanvasToggleHide()">
                            <span class="las la-clipboard"></span> Kunjungan Pasien
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{name: 'list-patients'}" @click="offCanvasToggleHide()">
                            <span class="las la-user"></span> Daftar Pasien
                        </router-link>
                    </li>

                    <li>
                        <a href="#">
                            <span class="las la-poll"></span> Laporan
                        </a>
                    </li>

                    <li class="uk-parent">
                        <a href="#">
                            <span class="las la-database"></span> Master Data <span uk-nav-parent-icon></span>
                        </a>
                        <ul class="uk-nav-sub">
                            <li>
                                <router-link :to="{name: 'list-user'}" @click="offCanvasToggleHide()">
                                    User
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'list-klaster'}" @click="offCanvasToggleHide()">
                                    Klaster
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'list-spesimen'}" @click="offCanvasToggleHide()">
                                    Spesimen
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'list-metode-pembayaran'}" @click="offCanvasToggleHide()">
                                    Metode Pembayaran
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" @click="handleLogout()">
                            <span class="las la-sign-out-alt"></span> Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>

</style>