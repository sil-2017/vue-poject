import { createApp, VueElement } from 'vue'
import App from './App.vue'
// import router from './router'
import components from '@/components/UI';
import sections from '@/components';
import './assets/style.scss';


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

sections.forEach(component => {
    app.component(component.name, component)
});


app.mount('#app');

// .use(router)