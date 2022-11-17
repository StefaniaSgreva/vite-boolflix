<template>
    <form @submit.prevent="performSearch">
     
        <label class="visually-hidden" for="searchName">Search item</label>
        <input type="text" id="itemname" placeholder="Search name" v-model.trim="text">

        <button type="submit">Search</button>
        
    </form>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'AppSearch',
        data(){
            return{
                text: ''
            }
        },
        methods:{
            performSearch(){
                console.log(this.text);
                store.params.query = this.text
            }
        }
    }
</script>

<style lang="scss" scoped>
    .visually-hidden{
        display: none;
    }
</style>
