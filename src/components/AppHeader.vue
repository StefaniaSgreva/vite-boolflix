<template>
    <header>
        <h1>Boolfix</h1>
        <div class="search">
            <label class="visually-hidden" for="searchName">Search item</label>
            <input type="text" id="itemname" placeholder="Search name" v-model.trim="store.search">
            <button type="button" @click="store.getMovie(); store.getSeries();">Search</button>
        </div>
    </header>
</template>

<script>
import {store} from '../store';
    
    export default {
    name: "AppHeader",
    data(){
        return{
            store,
            
        }
    },
 
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