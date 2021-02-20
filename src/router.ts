import {createWebHashHistory, createRouter} from "vue-router"
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/DocDemo.vue'
import SwitchDome from './components/SwitchDome.vue'
import Buttondemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import GetStart from './views/GetStart.vue'
import Install from './views/Install.vue'

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
                {path: 'intro', component: Intro},
                {path: 'get-start', component: GetStart},
                {path: 'install', component: Install},
                {path: 'switch', component: SwitchDome},
                {path: 'button', component: Buttondemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}, 
            ],
        },
    ],
})
