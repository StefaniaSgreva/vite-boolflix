<template>
    <section id="movie">
        <div class="items">
            <div class="card" v-for="(movie,index) in store.MovieList" :key="movie.id">
                <!-- <img :src="" :alt="movie.title"> -->
                <div class="info">
                    <h2>{{movie.title}}</h2>
                    <span>{{movie.original_title}}</span>
                    <span>{{movie.original_language}}</span>
                    <span>{{movie.vote_average}}</span>
                </div>
            </div>
        </div>
    </section>
    <section id="series">
        <div class="items">
            <div class="card" v-for="(series,index) in store.TvList" :key="series.id">
                <!-- <img :src="" :alt="series.name"> -->
                <div class="info">
                    <h2>{{series.name}}</h2>
                    <span>{{series.original_name}}</span>
                    <span>{{series.original_language}}</span>
                    <span>{{series.vote_average}}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from "../store";

    export default {
        name: 'CardComponent',
        data() {
            return {
            store,
            };
        },
        methods: {
   
        },
    }
</script>

<style lang="scss" scoped>
    
    section{
       margin-bottom: 3rem;
    }
    .items{
       display: flex;
       justify-content: flex-start;
       align-items: center;
       overflow-x: auto;
       .card{
        margin: 1rem;
        background-color: gray;
       
            .info{
                width: 300px;
            }
            span{
                display: block;
            }
       }
    }
</style>