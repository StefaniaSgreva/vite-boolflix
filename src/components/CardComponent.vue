<template>
    <div class="media">

        <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x500'" 
        :alt="item.title || item.name">
        <!-- <h4>{{item.original_title ? item.original_title : item.original_name}}</h4> -->
        <h4>{{item.original_title || item.original_name}}</h4>

        <div>{{item.title || item.name}}</div>
        <div>
            <!-- <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span> -->

            {{item.vote_average}}
        </div>
        <div class="flag" v-if="availableFlag.includes(item.original_language)">
            <img :src="'/images/' + item.original_language +'.png'" :alt="item.original_language + 'Flag'">
        </div>
        <div v-else>{{item.original_language}}</div>
    </div>
</template>

<script>
   
import { store } from "../store";

    export default {
        name: 'CardComponent',
        props: {
            item: Object
        },
        data() {
            return {
                availableFlag: [
                    'de', 'fr', 'it', 'es'
                ],
                imgBasePath: 'https://image.tmdb.org/t/p/w154'
            };
        },
        computed: {
            star(){
                return 
            }
        },
    }
</script>

<style lang="scss" scoped>
    .flag{

        img{
            width: 50px;
        }
    }
</style>