<template>
    <form @submit.prevent="performSearch">
     
        <label class="visually-hidden" for="searchName">Search item</label>
        <input type="text" id="itemname" placeholder="Cerca Titolo" v-model.trim="text">

        <button type="submit">Cerca</button>
        
    </form>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'AppSearch',
        data(){
            return{
                text: '',
                store
            }
        },
        methods:{
            performSearch(){
                console.log(this.text);
                store.params.query = this.text;
                store.getMovie();
                store.getSeries();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .visually-hidden{
        display: none;
    }
</style>
