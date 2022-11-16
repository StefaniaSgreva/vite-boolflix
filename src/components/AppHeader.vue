<template>
    <header>
        Header
        <AppSearch @filtermovie= "getMovie"/>
    </header>
</template>

<script>
import axios from 'axios';
import AppSearch from './AppSearch.vue';
import {store} from '../store';


    export default {
    name: "AppHeader",
    components: { AppSearch },
    data(){
        return{
            store,
            endPointMovie: 'movie?api_key=6e5beca259c47107979aef3b3305cc9a&language=en-US&page=1&query=a',
            endPointTv: 'tv?api_key=6e5beca259c47107979aef3b3305cc9a&language=en-US&page=1&query=a',
        }
    },
    methods:{
        getMovie(){
            const apiurl = store.apiURL + this.endPointMovie;
            axios.get(apiurl).then(
                (res)=>{
                    store.MovieList = res.data.results;
                    console.log(this.MovieList);
                }
            ).catch((error)=>{
                console.log(error.message);
            })
        }
    },
    created(){
        this.getMovie();
    }
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
    }
</style>