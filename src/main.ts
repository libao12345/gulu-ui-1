import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from "vue-router"
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const histiry = createWebHashHistory()
const router = createRouter({
    history: histiry,
    routes: [
        {path: '/', component: Frank},
        {path: '/xxx', component: Frank2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
