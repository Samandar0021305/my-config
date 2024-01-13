
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './plugins/router';

import '@/assets/scss/index.scss';
import { useComponents } from "./sam-design";

// keyinroq global qilaman
// import axios from './plugins/axios';

import Loader from './components/global/loader.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("Loader",Loader);
Object.keys(useComponents).forEach((key:string)=>{
  app.component(useComponents[key].tag , useComponents[key].value)
})

app.mount('#app')
