<template>
    <header ref="headRef">
        <img src="/images/logo.png" alt="Boolfix Logo">
        <AppSearch/>
    </header>
    <div class="hero" v-if="store.params.query <= 0">
        
    </div>
</template>

<script>
import {store} from '../store';
import AppSearch from './AppSearch.vue';
    
    export default {
    name: "AppHeader",
    data() {
        return {
            store,
        };
    },
    components: { AppSearch },
    methods: {
      vueOnScroll() {
        var prev = window.pageYOffset;
        const refs = this.$refs.headRef; // assign the reference in variable
        window.addEventListener("scroll", () => {
          var curr = window.pageYOffset;
          if (prev > curr) {
            refs.classList.add("scrollDown");
            refs.classList.remove("scrolled");
          } else {
            refs.classList.add("scrollDown");
            refs.classList.remove("scrolled");
          }
          if (curr === 0) {
            refs.classList.remove("scrollDown");
            refs.classList.remove("scrolled");
          }
            prev = curr;
        });
      },
    },
    mounted() {
      // run the function when the component's mount
      this.vueOnScroll();
    }
   
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

    .hero{
        height: 900px;
        width: 100%;
        background-image: linear-gradient(transparent, $bg-color 100%), url(/images/tonkohouse_oni_01.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    header{
        height: 90px;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        transition-timing-function: ease-in;
        transition: all 0.5s;
        background: linear-gradient(to bottom, black, transparent);

        img{
            width: 100px;
        }
    }
    .srolled{
        background: linear-gradient(to bottom, black, transparent);
    }
    .scrollDown{
        background-color: $bg-color;
    }
    .visually-hidden{
        display: none;
    }
</style>