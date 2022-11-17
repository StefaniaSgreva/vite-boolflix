<template>
  <AppHeader/>
  <main>
    <div v-if="store.params.query <= 0">
      <AppHome :tranding=" trandingList" :toprated="topRatedList" :upcoming="upcomingList"/>
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
import axios from 'axios';
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
          trandingNow: 'https://api.themoviedb.org/3/movie/5/recommendations?api_key=6e5beca259c47107979aef3b3305cc9a&language=it-IT&page=1',
          topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=6e5beca259c47107979aef3b3305cc9a&language=it-IT&page=1',
          upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=6e5beca259c47107979aef3b3305cc9a&language=it-IT&page=1',
          trandingList: [],
          topRatedList: [],
          upcomingList: [],
      }
    },
    watch:{
      'store.params.query'(newVal, oldVal){
        if(newVal !== oldVal){
          this.getMovie();
          this.getSeries();

        }
      }
    },
    methods:{
      getMovie(){
        const apiURL = store.baseURL + store.endPoint.movie;
        const params = store.params
        axios.get(apiURL,{params}).then((res) => {
            console.log(res.data.results);
            store.Movie = res.data.results;
        })
      },
      getSeries(){
        const apiURL = store.baseURL + store.endPoint.tv;
        const params = store.params
        axios.get(apiURL,{params}).then((res) => {
            
            store.Series = res.data.results;
        })
      },
      getTranding(){
        axios.get(this.trandingNow).then((res) => {
            // console.log(res.data.results);
            this.trandingList = [...res.data.results];
            // console.log(this.trandingList);
        })
      },
      getTopRated(){
        axios.get(this.topRated).then((res) => {

            this.topRatedList = [...res.data.results];
      
        })
      },
      getUpcoming(){
        axios.get(this.upcoming).then((res) => {

            this.upcomingList = [...res.data.results];
            
      })
    },
  }, 
    created(){
      this.getTranding();
      this.getTopRated();
      this.getUpcoming();

        
    }
}
</script>

<style lang="scss" scoped>
  
</style>