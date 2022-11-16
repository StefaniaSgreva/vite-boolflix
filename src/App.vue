<template>
  <AppHeader/>
  <main>
    <ItemList/>
  </main>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ItemList from './components/ItemList.vue';

import {store} from './store';

  export default {
    components: {
    AppHeader,
    ItemList
},
    data(){
      return{
        store,
     
      }
    }
}
</script>

<style lang="scss" scoped>

</style>