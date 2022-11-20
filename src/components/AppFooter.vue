<template>
    <div class="social-links">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
    </div>
    <div class="footer-container">
        <FooterMenu v-for="(menu,index) in navBars" :key="index" :item="menu"/>
    </div>
    <button class="btn-footer">Codice di servizio</button>
    <div class="copyright">©  1995-2022 Boolfix, Inc.</div>
</template>

<script>
import {menu} from '../data/footer.js'
import FooterMenu from './FooterMenu.vue';
    export default {
        name: 'AppFooter',
        components: {FooterMenu},
        data(){
            return{
                navBars: menu,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.footer-container{
    margin: 1rem 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.social-links{
    margin-left: 5rem;
    i{
        color: $text-color;
        margin-right: 2rem;
        font-size: 1.5rem;
        
    }
}
.btn-footer{
    margin-left: 5rem;
    margin-bottom: 1.5rem;
    background-color: transparent;
    border: 1px solid $link-gray;
    color: $link-gray;
    padding:.45rem;
    cursor: pointer;
    font-size: .85rem;
}
.btn-footer:hover{
    color: $text-color;
}
.copyright{
    margin-left: 5rem;
    margin-bottom: 1rem;
    font-size: .70rem;
    color: $link-gray;
}
</style>