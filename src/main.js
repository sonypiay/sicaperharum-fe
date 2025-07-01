import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './styles/main.scss';
import dayjs from "dayjs";
import 'dayjs/locale/id.js';

dayjs.locale('id');

createApp(App)
    .use(router)
    .mount('#app');
