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

        .row{
            flex-wrap: nowrap;
            overflow-x: auto;
        }
    }
</style>