import {createWebHashHistory, createRouter} from "vue-router"
import Home from './views/Home.vue'
import Doc from './views/Doc.vue';
import SwitchDome from './components/SwitchDome.vue'
import Buttondemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import intro from './markdown/intro.md'
import getStart from './markdown/get-started.md'
import install from './markdown/install.md'
import Markdown from './components/Markdown.vue'
import { h } from "vue"

const histiry = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: histiry,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', 
            component: Doc , 
            children:[
                {path: '', redirect: '/doc/intro'},
                {path: 'intro', component: md(intro)},
                {path: 'get-start', component: md(getStart)},
                {path: 'install', component: md(install)},
                {path: 'switch', component: SwitchDome},
                {path: 'button', component: Buttondemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}, 
            ],
        },
    ],
})
