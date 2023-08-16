import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// createApp(App).use(store).mount('#app')
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);
app.use(store);
app.mount('#app');

