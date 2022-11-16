<template>
  <AppHeader />
  <main>
      <ItemList/>
  </main>
</template>

<script>
// import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ItemList from './components/ItemList.vue';

// import {store} from './store';

  export default {
    components: {
    AppHeader,
    ItemList
},
    // data(){
    //   return{
    //     store,
    //     endPointMovie: 'movie?api_key=6e5beca259c47107979aef3b3305cc9a&language=en-US&page=1&query=a',
    //     endPointTv: 'tv?api_key=6e5beca259c47107979aef3b3305cc9a&language=en-US&page=1&query=a',
    //   }
    //},
    methods:{

    },
   created(){
       
    }
}
</script>

<style lang="scss" scoped>
  
</style>