import { createApp } from 'vue'
import App from '@/App.vue'
import './assets/app.css'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/assets/icons.css'
import '@/assets/landlume.css'
import 'vue-final-modal/style.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import 'vue-maplibre-gl/dist/vue-maplibre-gl.css'
import i18n from '@/plugins/i18n/i18n.js';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { plugin, defaultConfig } from '@formkit/vue'
import config from './plugins/i18n/formkit.config.js'
import router from './router'
import axios from 'axios'
import {createPinia} from "pinia";
import { createVfm } from 'vue-final-modal'
import ConfirmationService from 'primevue/confirmationservice';
import TextClamp from 'vue3-text-clamp'
import VueMapLibreGl from 'vue-maplibre-gl';

const pinia = createPinia()
const vfm = createVfm()


axios.defaults.baseURL = 'http://broprostack-001-site2.anytempurl.com/'
axios.defaults.withCredentials = true

createApp(App)
    .use(PrimeVue, {
        theme: 'none'
    })
    .use(PerfectScrollbar, {
        watchOptions: true,
        options: {
            wheelSpeed: 1,
            swipeEasing: true,
        }
    })
    .use(ToastService)
    .use(ConfirmationService)
    .use(router)
    .use(vfm)
    .use(pinia)
    .use(TextClamp)
    .use(i18n)
    .use(plugin, defaultConfig(config))
    .use(VueMapLibreGl)
    .mount('#app')
