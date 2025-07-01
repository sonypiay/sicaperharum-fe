<script setup>

</script>

<template>
    <nav class="uk-card uk-card-body uk-height-viewport sidebar-nav">
        <div class="nav-logo">
            <img src="../assets/images/logo_pkm_botim.png" />
        </div>

        <ul class="uk-nav uk-nav-default nav-list" uk-nav>
            <li>
                <a href="#">
                    <span class="las la-home"></span> Dashboard
                </a>
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
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

</style>