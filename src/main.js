import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import '../node_modules/bootswatch/dist/lux/bootstrap.min.css';
import 'jquery';
import 'popper.js';

createApp(App).use(router).mount('#app');
