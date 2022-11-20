<template>
     <!-- <div class="cards-container">
        <button class="handle left-handle" @click="scrollLeft()"><i class="fa-solid fa-chevron-left"></i></button>
        <div class="slider" ref="scrollRef">
            <div class="images" v-for="(item,index) in tranding" :key="item.id">
                <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                :alt="item.title">
            </div>
        </div>
        <button class="handle right-handle" @click="scrollRight()"><i class="fa-solid fa-chevron-right"></i></button>
    </div> -->
    
    <div class="container">
       
        <!-- TRANDING NOW  -->
        <section>
            <h2>I titoli del momento</h2>
            <div class="cards-container">
                <button class="handle left-handle" @click="scrollLeft()"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="slider" ref="scrollRef">
                     <div class="images" v-for="(item,index) in tranding" :key="item.id">
                        <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                        :alt="item.title">
                    </div>
                </div>
                <button class="handle right-handle" @click="scrollRight()"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </section> 
        <!-- TOP RATED -->
        <section>
            <h2>I pi&ugrave; cercati</h2>
            <div class="cards-container">
                <button class="handle left-handle" @click="scrollLeft2()"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="slider" ref="scrollRef2">
                     <div class="images" v-for="(item,index) in toprated" :key="item.id">
                        <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                        :alt="item.title">
                    </div>
                </div>
                <button class="handle right-handle" @click="scrollRight2()"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </section>
        <!-- UPCOMING  -->
        <section>
            <h2>Prossime uscite</h2>
            <div class="cards-container">
                <button class="handle left-handle" @click="scrollLeft3()"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="slider" ref="scrollRef3">
                     <div class="images" v-for="(item,index) in upcoming" :key="item.id">
                        <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/154x240'" 
                        :alt="item.title">
                    </div>
                </div>
                <button class="handle right-handle" @click="scrollRight3()"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </section>
    </div>
   
</template>

<script>
import {store} from '../store';


    export default {
        name: 'AppHome',
        props: ['tranding', 'toprated', 'upcoming'],
        data(){
            return{
                store,
                imgBasePath: 'https://image.tmdb.org/t/p/w342',
            }
        },
        methods:{
            scrollLeft() {
                const e = this.$refs.scrollRef;
                // console.log(e);
                e.scrollBy({left: -1000, behavior: "smooth",});
            },
            scrollRight() {
                const e = this.$refs.scrollRef;
                // console.log(e);
                e.scrollBy({left: 1000, behavior: "smooth",});
            },
            //! FIND A BETTER SOLUTIONS
            scrollLeft2() {
                const e2 = this.$refs.scrollRef2;
                // console.log(e);
                e2.scrollBy({left: -1000, behavior: "smooth",});
            },
            scrollRight2() {
                const e2 = this.$refs.scrollRef2;
                // console.log(e);
                e2.scrollBy({left: 1000, behavior: "smooth",});
            },
            scrollLeft3() {
                const e3 = this.$refs.scrollRef3;
                // console.log(e);
                e3.scrollBy({left: -1000, behavior: "smooth",});
            },
            scrollRight3() {
                const e3 = this.$refs.scrollRef3;
                // console.log(e);
                e3.scrollBy({left: 1000, behavior: "smooth",});
            }
        },
        created(){
            store.getTranding();
            store.getTopRated();
            store.getUpcoming(); 
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


.container{
    // margin-top: -12rem;
    section:first-of-type{
        margin-top: -10rem;
    }
    section{
        margin-top: 3rem;

        h2{
            margin-left: 5.5rem;
            margin-bottom: 1rem;
        }
    }

    
    
}
 
</style>