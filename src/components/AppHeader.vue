<template>
    <header>
        <img src="/images/logo.png" alt="Boolfix Logo">
        <AppSearch/>
    </header>
</template>

<script>
import {store} from '../store';
import AppSearch from './AppSearch.vue';
    
    export default {
    name: "AppHeader",
    data() {
        return {
            store,
        };
    },
    components: { AppSearch }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    header{
        height: 90px;
        padding: 0 50px;
        background-color: $bg-color;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100%;

        img{
            width: 100px;
        }
    }
    .visually-hidden{
        display: none;
    }
</style>