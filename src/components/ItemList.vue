<template>
     <div class="container">
        <div class="row">
            <div class="col" v-for="(item,index) in store.MovieList" :key="item.id">
                <CardComponent :movie="item"/>
            </div>
        </div>
     </div>
</template>

<script>
    import {store} from '../store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'ItemList',
        components: { CardComponent },
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>