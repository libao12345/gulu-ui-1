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
import Markdown from './components/Markdown.vue'
import { h } from "vue"

const histiry = createWebHashHistory()
const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename})
export const router = createRouter({
    history: histiry,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', 
            component: Doc , 
            children:[
                {path: '', component: DocDemo},
                {path: 'intro', component: md('intro')},
                {path: 'get-start', component: md('get-started')},
                {path: 'install', component: md('install')},
                {path: 'switch', component: SwitchDome},
                {path: 'button', component: Buttondemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}, 
            ],
        },
    ],
})
