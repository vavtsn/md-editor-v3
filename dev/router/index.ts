import { createRouter, createWebHistory } from 'vue-router';
import Preview from '../Preview';
import Doc from '../Doc';

const routes = [
  { path: '/', component: Preview },
  { path: '/doc', component: Doc }
];

const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;
