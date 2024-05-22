import './assets/main.css'
import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
  .use(IonicVue);

app.mount('#app');
