<script setup lang="ts">

</script>

<template>
    <div id="offcanvas-nav" uk-offcanvas>
        <div class="uk-offcanvas-bar offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>

            <nav class="offcanvas-sidebar-nav">
                <div class="nav-logo">
                    <img src="../assets/images/logo_pkm_botim.png" />
                </div>

                <ul class="uk-nav uk-nav-default offcanvas-nav-list" uk-nav>
                    <li>
                        <router-link to="/admin">
                            <span class="las la-home"></span> Dashboard
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{name: 'list-visitor-patient'}">
                            <span class="las la-clipboard"></span> Kunjungan Pasien
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{name: 'list-patients'}">
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
                                <router-link :to="{name: 'list-user'}">
                                    User
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'list-klaster'}">
                                    Klaster
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'list-spesimen'}">
                                    Spesimen
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'list-metode-pembayaran'}">
                                    Metode Pembayaran
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>

</style>