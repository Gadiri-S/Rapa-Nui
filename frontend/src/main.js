import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from 'axios';
import VueSelect from 'vue-cool-select';


//axios.defaults.withCredentials = true

axios.defaults.baseURL = 'http://localhost:3000/api/';


createApp(App).use(store).use(router).mount('#app')
