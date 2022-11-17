<template>
    <div>
        <!-- TRANDING NOW  -->
        <section>
            <h2>I titoli del momento</h2>
            <div class="row_posters">
                <div class="row_poster" v-for="(item,index) in tranding" :key="item.id">
                   <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                   :alt="item.title">
                </div>
            </div>
        </section>
        <!-- TOP RATED -->
        <section>
            <h2>I pi&ugrave; cercati</h2>
            <div class="row_posters">
                <div class="row_poster" v-for="(item,index) in toprated" :key="item.id">
                   <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                   :alt="item.title" >
                </div>
            </div>
        </section>
        <!-- UPCOMING  -->
        <section>
            <h2>Prossime uscite</h2>
            <div class="row_posters">
                <div class="row_poster" v-for="(item,index) in upcoming" :key="item.id">
                   <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                   :alt="item.title">
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import {store} from '../store';


    export default {
        name: 'AppHome',
        props: ['tranding', 'toprated', 'upcoming'],
        data(){
            return{
                store,
                imgBasePath: 'https://image.tmdb.org/t/p/w342',
                imgBig: 'https://image.tmdb.org/t/p/original',
            }
        },
        
    }
</script>

<style lang="scss" scoped>

        .row_poster{
            width: 100%;
            object-fit: contain;
            max-height: 180px;
            margin-right:10px;
            transition: transform 450ms;
            // border: 1px solid red;
           
        }
        .row_posters{
            display: flex;
            overflow-x: scroll;
            overflow-y: hidden;
            padding: 20px;

        }

        .row_poster:hover{
            transform: scale(1.08);
        }
        .row_posters::-webkit-scrollbar{
            display: none;
        }
        section{
            margin-left: 20px;
        }
        h2{
            margin-left: 20px;
            margin-top: 4rem;
        }
</style>