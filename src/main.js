import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style.css';

const app = createApp(App);
app.use(router).use(store).mount('#app');


// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ActivityDetail from '../views/ActivityDetail.vue';
import CreateActivity from '../views/CreateActivity.vue';
import MyOrders from '../views/MyOrders.vue';
import Search from '../views/Search.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/activity/:id', name: 'ActivityDetail', component: ActivityDetail },
    { path: '/create', name: 'CreateActivity', component: CreateActivity },
    { path: '/orders', name: 'MyOrders', component: MyOrders },
    { path: '/search', name: 'Search', component: Search }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

