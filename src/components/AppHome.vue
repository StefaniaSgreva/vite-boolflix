<template>
    <div>
        <!-- BOOLFIX ORIGINALS -->
     

        <!-- TRANDING NOW  -->
        <section>
            <h2>Tranding Now</h2>
            <div class="row">
                <div class="col" v-for="(item,index) in tranding" :key="item.id">
                   <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" :alt="item.title">
                   <!-- <div>{{item.title}}</div> -->
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import {store} from '../store';


    export default {
        name: 'AppHome',
        props: ['tranding'],
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

        .row{
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
            }
        }
    }
</style>