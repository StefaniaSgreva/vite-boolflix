<template>
    <div class="box">
        <input type="checkbox" id="check">
        <div class="search-box">
            <form @submit.prevent="performSearch">
                <input type="text" id="itemname" placeholder="Cerca Titolo" v-model.trim="text">
                <label for="check" class="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </label>
                <button type="submit">Cerca</button>
            </form>
        </div>
    </div>
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
@use '../assets/styles/partials/variables' as *;
    .visually-hidden{
        display: none;
    }

    .box{
        max-width: 400px;
        width: 100%;
        
    }

    .box .search-box{
        position: relative;
        height: 50px;
        max-width: 50px;
        // background: red;
        margin: auto;
        transition: all 0.3s ease;
        
    }
    #check:checked ~ .search-box{
        max-width: 380px;

    }
    .search-box input{
        display: none;
    }
    .search-box i{
        position: absolute;
        left: 0;
        top: 0;
        width: 50px;
        height: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
    }
    #check:checked ~ .search-box input{
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0, .8);
        outline: none;
        border: 1px solid $text-color;
        padding-left: 50px;
        font-size: 1rem;
        color: $text-color;
        font-family: inherit;
        font-size: inherit;
    } 
    #check{
        display: none;
    }

    button{
    position: absolute;
    right: -50px;
    bottom: 0;
    height: 100%;
    width: 50px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition:  background-color 1s;
    }
    button:hover{
        background-color: $boolfix-red;
        color: $text-color;
    }
 
</style>
