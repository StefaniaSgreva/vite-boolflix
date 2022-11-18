<template>
    <div class="container">
        <!-- TRANDING NOW  -->
        <section>
            <h2>I titoli del momento</h2>
            <div class="row">
                <div class="col" v-for="(item,index) in tranding" :key="item.id">
                    <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                    :alt="item.title">
                </div>
            </div>

        </section>
        <!-- TOP RATED -->
        <section>
            <h2>I pi&ugrave; cercati</h2>
            <div class="row">
                <div class="col" v-for="(item,index) in toprated" :key="item.id">
                    <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                    :alt="item.title" >
                </div>
            </div>
        </section>
        <!-- UPCOMING  -->
        <section>
            <h2>Prossime uscite</h2>
            <div class="row">
                <div class="col" v-for="(item,index) in upcoming" :key="item.id">
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
                imgBasePath: 'https://image.tmdb.org/t/p/w154',
            }
        },
        created(){
            store.getTranding();
            store.getTopRated();
            store.getUpcoming(); 
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.container{
    margin-top: -12rem;

    section{
        margin-left: 3rem;
        margin-top: 4rem;

        h2{
            margin-left: 18px;
        }

        .row{
            overflow-y: hidden;
            margin-right: 20px;
           
            .col{
                // border: 1px solid red;
                height: 250px;
                margin: 1.5rem 0;        
                margin-left: 10px;
                transition: transform 450ms;

            }
            .col:hover{
                transform: scale(1.08);
            }
        }
    }
}
 
</style>