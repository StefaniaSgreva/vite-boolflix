<template>
  <AppHeader/>
  <main>
    <div v-if="store.params.query <= 0">
      <AppHome/>
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
      }
    },
    created(){
      
        
    }
}
</script>

<style lang="scss" scoped>
  
</style>