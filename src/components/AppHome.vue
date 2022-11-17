<template>
    <div>
        <!-- BOOLFIX ORIGINALS -->
    
        <!-- TRANDING NOW  -->
        <section>
            <h2>I titoli del momento</h2>
            <div class="row_posters">
                <div class="col" v-for="(item,index) in tranding" :key="item.id">
                   <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                   :alt="item.title">
                </div>
            </div>
        </section>
        <!-- TOP RATED -->
        <section>
            <h2>I pi&ugrave; cercati</h2>
            <div class="row_posters">
                <div class="col" v-for="(item,index) in toprated" :key="item.id">
                   <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                   :alt="item.title">
                </div>
            </div>
        </section>
        <!-- ACTION MOVIES  -->


    </div>
</template>

<script>
import {store} from '../store';


    export default {
        name: 'AppHome',
        props: ['tranding', 'toprated'],
        data(){
            return{
                store,
                imgBasePath: 'https://image.tmdb.org/t/p/w154'
            }
        },
        
    }
</script>

<style lang="scss" scoped>
     section{
        overflow: hidden;
        margin-left: 3rem;
        margin-top: 3rem;

        .row_posters{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;
            overflow-x: auto;
           
            .col{
                // border: 1px solid red;
                height: 240px;
                margin: 1rem 0;
                margin-left: 8px;

                img{
                    height: 100%;
                }
            }
        }
    }
</style>