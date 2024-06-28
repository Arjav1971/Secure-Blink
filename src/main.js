// Importing global CSS
import './assets/main.css';

// Vue and Pinia imports
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

// Vuetify imports
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure this is the correct path to Vuetify styles
import * as components from 'vuetify/components'; // Import Vuetify components
import * as directives from 'vuetify/directives'; // Import Vuetify directives

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

// Create Vue app instance
const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use Vuetify in Vue app instance
app.use(vuetify);

// Use Vue Router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
