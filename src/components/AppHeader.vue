<template>
    <header ref="headRef">
        <img src="/images/logo.png" alt="Boolfix Logo">
        <AppSearch/>
    </header>
    <div class="hero" v-if="store.params.query <= 0">
        <div class="hero-contents">
          <div class="movie-logo">
            <img src="/images/Oni_logo.png" alt="Oni Logo">
          </div>
          <h2>La leggenda del dio del tuono</h2>
          <p class="hero-description">
            Una nuova serie animata prodotta in collaborazione con studio Tonko House ispirata alle divinità e alla mitologia giapponese.
          </p>
          <div hero-button>
            <button class="hero-btn"><i class="fa-solid fa-play"></i> Riproduci</button>
            <button class="hero-btn btn-gray"><i class="fa-solid fa-circle-info"></i> Altre info</button>
          </div>
        </div>
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
        background-position: center center;
        position: relative;
        z-index: -1;
        .hero-contents{
          position: absolute;
          bottom: 280px;
          left: 50px; 
        }
        .movie-logo{
          width: 300px;
            img{
              width: 100%;
            }
        }
        h2{
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          margin-top: -50px;
          margin-bottom: 1.5rem;
        }

        p{
          width: 600px;
          font-size: 1.4rem;
          line-height: 1.5;
          margin-bottom: 2rem;
        }
        .hero-btn{
            padding: 12px 30px;
            font-size: 1.5rem;
            font-family: inherit;
            font-weight: 500;
            border: none;
            outline: none;
            border-radius: 5px;
            margin-right: .75rem;

              i{
                font-size: 1.8rem;
                margin-right: .75rem;
                vertical-align: middle;
              }
        }
        .btn-gray{
          background-color: $btn-gray;
          opacity: .9;
          color: $text-color;
        }

  }

    header{
        height: 90px;
        padding: 0 50px;
        padding-left: 50px;
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
    .scrolled{
        background: linear-gradient(to bottom, black, transparent);
    }
    .scrollDown{
        background-color: $bg-color;
    }
    .visually-hidden{
        display: none;
    }
</style>