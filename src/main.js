import { createApp } from 'vue'
import './style.css'
import 'flowbite'
import router from './router'
import { createI18n } from 'vue-i18n';
import App from './App.vue'

// 1. Import your locale messages
import en from './locales/en.json';
import tr from './locales/tr.json';

const messages = {
  en,
  tr
};
// 2. Create the i18n instance
const i18n = createI18n({
  // Set to 'false' for Composition API and 'true' for Options API (Vue 3 recommendation is 'false')
  legacy: false, 
  // Make the global translation functions ($t) available in templates
  globalInjection: true,
  // Set the default locale
  locale: 'en',
  // Set the fallback locale if a translation key is missing
  fallbackLocale: 'en',
  // Pass in the messages
  messages,
});
createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
