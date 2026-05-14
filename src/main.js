import { createApp } from 'vue';
import { router } from './router/index.js';
import './style.css';
import App from './App.vue';
import { createHead } from '@vueuse/head';

const head = createHead();
createApp(App).use(router).use(head).mount('#app');
