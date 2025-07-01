<script setup>

</script>

<template>
    <nav class="uk-card uk-card-body uk-height-viewport sidebar-nav">
        <div class="nav-logo">
            <img src="../assets/images/logo_pkm_botim.png" />
        </div>

        <ul class="uk-nav uk-nav-default nav-list" uk-nav>
            <li>
                <router-link to="/admin">
                    <span class="las la-home"></span> Dashboard
                </router-link>
            </li>

            <li>
                <a href="#">
                    <span class="las la-clipboard"></span> Pendaftaran
                </a>
            </li>

            <li>
                <a href="#">
                    <span class="las la-user"></span> Data Pasien
                </a>
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
</template>

<style scoped>

</style>