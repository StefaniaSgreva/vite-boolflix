<template>
  <AppHeader/>
  <main>
    <div v-if="store.params.query <= 0">
      <AppHome :tranding=" store.trandingList" :toprated="store.topRatedList" :upcoming="store.upcomingList"/>
    </div>
    <div v-else>
      <ItemList title="Movies" :items="store.Movie"/>
      <ItemList title="Tv Series" :items="store.Series"/>
    </div>
  </main>
  <AppFooter/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import ItemList from './components/ItemList.vue';
import AppHome from './components/AppHome.vue';
import AppFooter from './components/AppFooter.vue';
// import axios from 'axios';
import {store} from './store';

  export default {
      components: {
    AppHeader,
    ItemList,
    AppHome,
    AppFooter
},
      data(){
        return{ 
          store,   
      }
    },
    // watch:{
    //   //per vedere se AppSearch ha modificato query
    //   'store.params.query'(newVal, oldVal){
    //     if(newVal !== oldVal){
    //       this.getMovie();
    //       this.getSeries();

    //     }
    //   }
    // },
    methods:{

  }, 
    created(){
     
    }
}
</script>

<style lang="scss" scoped>
  
</style>