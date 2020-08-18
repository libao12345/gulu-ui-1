<template>
    <div>
        <topnav />
        <div class="content">
            <aside>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Butotn 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>