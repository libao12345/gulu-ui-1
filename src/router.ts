import {createWebHashHistory, createRouter} from "vue-router"
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/DocDemo.vue'
import SwitchDome from './components/SwitchDome.vue'
import Buttondemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

const histiry = createWebHashHistory()
export const router = createRouter({
    history: histiry,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', 
            component: Doc , 
            children:[
                {path: '', component: DocDemo},
                {path: 'switch', component: SwitchDome},
                {path: 'button', component: Buttondemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}, 
            ],
        },
    ],
})
