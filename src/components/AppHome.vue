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
}
section{
        overflow: hidden;
        margin-left: 3rem;
        margin-top: 5rem;

        h2{
            margin-left: 18px;
        }

        .row{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;
            overflow-x: scroll;
            overflow-y: hidden;
            margin-right: 20px;
           
            .col{
                // border: 1px solid red;
                height: 250px;
                margin: 1.5rem 0;
                margin-left: 10px;
                cursor: pointer;
                transition: transform 450ms;

                img{
                    height: 100%;
                    border-radius: 5px;
                   
                }
            }
            .col:hover{
                transform: scale(1.08);
            }
        }
       .row::-webkit-scrollbar{
        height: .55em;
        background: $btn-gray;
        border-radius: 25vw;
       }
       .row::-webkit-scrollbar-thumb{
            background: $boolfix-red;
            border-radius: 25vw;
        }
        .row::-webkit-scrollbar-thumb:hover{
             background: $boolfix-dark-red;
        }
}
        
        // .row_posters::-webkit-scrollbar{
        //     display: none;
        // }
   
</style>