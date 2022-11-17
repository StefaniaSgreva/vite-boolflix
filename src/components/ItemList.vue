<template>
    <section>
        <h2>{{title}}</h2>
        <div class="row">
            <div class="col" v-for="(item,index) in items" :key="item.id">
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
            }
        },
        created() {
            
        },
    }
</script>

<style lang="scss" scoped>
    section{
        overflow: hidden;
        margin-left: 3rem;
        margin-top: 5rem;

        .row{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;
            overflow-x: auto;
           
            .col{
                border: 1px solid red;
                height: 400px;
                margin: 1rem 0;
                margin-left: 8px;
            }
        }
    }
</style>