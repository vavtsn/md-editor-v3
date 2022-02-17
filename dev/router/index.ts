import { createRouter, createWebHistory } from 'vue-router';
import Preview from '../Preview/main.vue';
import Doc from '../Doc';
import About from '../About/index.vue';

const routes = [
  { path: '/', component: Preview },
  { path: '/doc', component: Doc },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;
