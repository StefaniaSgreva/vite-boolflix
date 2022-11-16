<template>
    <div class="search-input">
        <form @submit.prevent="searchMovie">
            <label class="visually-hidden" for="itemname">Search name</label>
            <input type="text" id="itemname" placeholder="Search name" v-model.trim="store.search.name">

            <button type="submit">Search</button>

        </form>
    </div>
</template>

<script>
import {store} from '../store';

    export default {
        name: 'AppSearch',
        data(){
            return{
                store,
            }
        },
        methods:{
            searchMovie(){
                this.$emit('filtermovie');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .visually-hidden{
        display: none;
    }
</style>