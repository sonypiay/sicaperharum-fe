<script setup>
    
</script>

<template>
    <div class="uk-height-1-1">
        <div class="uk-grid-collapse uk-grid-match" uk-grid uk-height-viewport>
            <div class="uk-width-expand">
                <div class="uk-card uk-card-default uk-card-body login-section-left">
                    <div class="login-heading">Login</div>
                </div>
            </div>

            <div class="uk-width-1-3">
                <div class="uk-card uk-card-body login-section-right">
                    <div class="login-cover-img"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.login-section-left {

}

.login-section-right {
    background-color: #00A896;
}

.login-section-right .login-cover-img {
    background-image: url(../assets/images/cover-login.png);
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    position: relative;
    right: 30%;
}
</style>