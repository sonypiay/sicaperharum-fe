<script setup>
    import { reactive } from 'vue';
    import { toastFailed, toastSuccess } from '../utils/alerts';
    import authAPI from "../utils/api/AuthAPI.js";
    import {useLocalStorage} from "@vueuse/core";
    import {useRouter} from "vue-router";

    const user = reactive({
        email: '',
        password: '',
    });

    const router = useRouter();

    const errorDetail = reactive({
        data: {},
        form: {},
        isError: false,
    });

    const userProfile = useLocalStorage("user_profile", "");
    const userToken = useLocalStorage("user_token", "");

    async function onSubmitLogin() {
        errorDetail.isError = false;

        if( user.email === '' ) {
            errorDetail.form.email = 'Email wajib diisi';
            errorDetail.isError = true;
        }

        if( user.password === '' ) {
            errorDetail.form.password = 'Password wajib diisi';
            errorDetail.isError = true;
        }

        if( ! errorDetail.isError ) {
            const response = await authAPI.login(user);
            const responseBody = response.data;
            const statusCode = response.statusCode;

            if( statusCode === 200 ) {
                const user = responseBody.data.user;
                userProfile.value = JSON.stringify({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image
                });
                userToken.value = responseBody.data.token;
                await toastSuccess('Login berhasil');
                await router.push('/admin');
            } else {
                await toastFailed(responseBody.message);
            }
        }
    }
</script>

<template>
    <div>
        <div class="uk-grid-collapse uk-grid-match" uk-grid uk-height-viewport>
            <div class="uk-width-expand">
                <div class="uk-card uk-card-default uk-card-body login-section-left">
                    <img src="../assets/images/logo_pkm_botim.png" alt="" class="uk-visible@l">
                    
                    <div class="uk-width-2-5@m uk-width-1-1@s uk-align-center">
                        <div class="uk-text-center uk-margin-bottom"><img src="../assets/images/logo_pkm_botim.png" alt="" class="uk-hidden@l"></div>
                        <div class="login-form">
                            <div class="login-heading">Login</div>
                            <div class="login-intro">Selamat datang di Sicaperharum. Silahkan masukkan user name dan password Anda untuk melanjutkan.</div>

                            <form class="uk-form-stacked login-form-body" @submit.prevent="onSubmitLogin">
                                <div class="uk-margin">
                                    <label for="input-email" class="uk-form-label form-label-login">Email</label>
                                    <div class="uk-form-controls">
                                        <input type="email" class="uk-width-1-1 uk-input form-input-login" id="input-email" placeholder="Masukkan email" v-model="user.email"
                                        @keyup="errorDetail.form.email = ''" />
                                    </div>

                                    <div v-if="errorDetail.form.hasOwnProperty('email') && errorDetail.form.email !== ''" class="uk-alert-danger" uk-alert>
                                        <p>{{ errorDetail.form.email }}</p>
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <label for="input-password" class="uk-form-label form-label-login">Password</label>
                                    <div class="uk-form-controls">
                                        <input type="password" class="uk-input form-input-login" id="input-password" placeholder="Masukkan password" 
                                        v-model="user.password"
                                        @keyup="errorDetail.form.password = ''" />
                                    </div>

                                    <div v-if="errorDetail.form.hasOwnProperty('password') && errorDetail.form.password !== ''" class="uk-alert-danger" uk-alert>
                                        <p>{{ errorDetail.form.password }}</p>
                                    </div>
                                </div>

                                <div class="uk-margin-large-top">
                                    <button class="uk-width-1-1 uk-button uk-button-primary button-login">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="uk-width-1-3 uk-visible@l">
                <div class="uk-card uk-card-body login-section-right">
                    <div class="login-cover-img"></div>
                </div>
            </div>
        </div>
    </div>
</template>