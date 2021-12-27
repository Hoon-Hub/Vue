<template>
<div>
    <hr>
    <router-link to="/Calculator">기존</router-link> | 
    <router-link to="/Composition">Composition API</router-link> | 
    <router-link to="/Composition2">Composition API 2</router-link> | 
    <router-link to="/Provide">Provide&Inject</router-link>

    <hr>
    <h2>CompositionAPI - Provide&Inject</h2>

    <Inject />

</div>
    
</template>

<script>
import { provide } from 'vue'
import Inject from './Inject.vue'

export default {
    components: {
        Inject
    },
    setup() {
        // key, value
        provide('title', 'Vue.js 프로젝트')
    }
}
</script>

<style>

</style>