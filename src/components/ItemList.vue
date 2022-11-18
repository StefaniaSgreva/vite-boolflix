<template>
    <section class="loops">
        <h2>{{title}}</h2>
        <div class="row">
            <div class="col" v-for="(item,index) in items" :key="item.id">
                <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                :alt="item.title || item.name">
                <CardComponent :item="item"/>
            </div>
        </div>
    </section>
</template>

<script>
    // import {store} from '../store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'ItemList',
        props: {
            items: Array,
            title: String,
            // mediaType: String
        },
        components: { CardComponent },
        data(){
            return{
                // store,
                imgBasePath: 'https://image.tmdb.org/t/p/w342'

            }
        },
        created() {
            
        },
    }
</script>

<style lang="scss">
@use '../assets/styles/partials/variables' as *;

    .loops:first-of-type{
        margin-top: 8rem;
    }
    .loops{
        margin-left: 3rem;
        margin-top: 4rem;
        h2{
            margin-left: 30px;
        }
        .row{
            // border: 1px solid red;
            padding: 65px 0;
            margin-right: 20px;
            padding-left: 25px;
           
            .col{
                // border: 1px solid red;
                height: 342px;
                box-shadow: 0 0 20px 2px rgba(0,0,0,.1);
                position: relative;
                transition: opacity 450ms;

            }
            .col:hover{
                .infos{
                    opacity: 1;
                }
            }
        }
    }
</style>