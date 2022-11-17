<template>
    <header>
        <h1>Boolfix</h1>
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
    header{
        height: 90px;
        padding: 0 50px;
        background-color: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .visually-hidden{
        display: none;
    }
</style>