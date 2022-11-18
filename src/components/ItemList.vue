<template>
    <section>
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

    section:first-of-type{
        margin-top: 8rem;
    }
    section{
        // margin-left: 3rem;
        margin-top: 4rem;
        h2{
            margin-left: 30px;
        }
        .row{
            // border: 1px solid red;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;
            overflow-x: scroll;
            padding: 65px 0;
            margin-right: 20px;
            padding-left: 25px;
           
            .col{
                // border: 1px solid red;
                height: 342px;
                margin-left: 10px;
                cursor: pointer;
                transition: transform 450ms;
                box-shadow: 0 0 20px 2px rgba(0,0,0,.1);
                position: relative;

                img{
                    height: 100%;
                    border-radius: 5px;
                }
            }
            .col:hover{
                transform: scale(1.3);
                z-index: 2;
                .infos{
                    opacity: 1;
                }
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
</style>