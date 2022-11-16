<template>
     <div class="container">
        <CardComponent/>
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
        },
        created() {
            store.getMovie();
            store.getSeries();
        },
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        padding: 0 1rem;
        
    }
</style>