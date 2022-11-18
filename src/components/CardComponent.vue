<template>
    <div class="media">

        <!-- <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
        :alt="item.title || item.name"> -->
        <!-- <h4>{{item.original_title ? item.original_title : item.original_name}}</h4> -->
        <div class="infos">
            <h4>{{item.original_title || item.original_name}}</h4>

            <div class="title">{{item.title || item.name}}</div>
            <div>
                <span v-for="n in 5" class="fa-star" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span>
                <!-- {{item.vote_average}} -->
            </div>
            <div class="flag" v-if="availableFlag.includes(item.original_language)">
                <img :src="'/images/' + item.original_language +'.png'" :alt="item.original_language + 'Flag'">
            </div>
            <div v-else>{{item.original_language}}</div>
        </div>
    </div>
</template>

<script>
   
    export default {
        name: 'CardComponent',
        props: {
            item: Object
        },
        data() {
            return {
                availableFlag: [
                    'de', 'es', 'en','fr', 'it'
                ],
                // imgBasePath: 'https://image.tmdb.org/t/p/w154'
            };
        },
        computed: {
            stars(){
                return Math.ceil(this.item.vote_average / 2);
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

    img{
        height: 100%;
        border-radius: 5px;       
    }
    .infos{
        opacity: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: rgba($color: #000000, $alpha: .7);
        width: 100%;
        padding: 1rem;
        transition: opacity 450ms;

        h4{
            font-size: 1.1rem;
        }
        .title{
            font-size: .75rem;
            padding: .5rem 0;
        }
        .fa-solid{
            color: goldenrod;
        }
        .flag{
            padding-top: .5rem;
        img{
            width: 20px;
        }
    }
    }
    
    
</style>