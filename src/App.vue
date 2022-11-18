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
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import ItemList from './components/ItemList.vue';
import AppHome from './components/AppHome.vue';
// import axios from 'axios';
import {store} from './store';

  export default {
      components: {
      AppHeader,
      ItemList,
      AppHome
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
      store.getTranding();
      store.getTopRated();
      store.getUpcoming();  
    }
}
</script>

<style lang="scss" scoped>
  
</style>