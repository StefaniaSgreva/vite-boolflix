<template>
    <div class="footer-links">
        <nav>
            <ul>
                <li v-for="(link,index) in item.footerLinks" :key="index">
                <a :href="link.url">{{link.text}}</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>

    export default {
        name: 'FooterMenu',
        props: [
            'item'
        ]
    }
</script>

<style lang="scss" scoped>
    .footer-links{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: .45rem;
       
    }
</style>