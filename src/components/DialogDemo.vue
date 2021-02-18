<template>
    <div>
        Dialog 的示例
    </div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="x"></Dialog>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import Dialog from "../lib/Dialog.vue"
import { ref } from "vue"
export default {
    components: { 
        Dialog,
        Button, 
    },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        return {x,toggle}
    }
}
</script>


