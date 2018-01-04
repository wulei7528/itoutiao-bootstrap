<template>
    <div class="home-view">
        <news-nav></news-nav>
        <news-content></news-content>
    </div>
</template>

<script>
    import NewsNav from '../components/NewsNav'
    import NewsContent from '../components/NewsContent'
    import { mapState } from 'vuex'

    export default{
        components: {
            NewsNav,
            NewsContent
        },
        computed: {
            
        },
        methods: {
            getChannel() {
                this.$store.dispatch('getChannel')
            },

            getList(channel) {
                this.$store.dispatch('getList', {
                    channel: channel
                })
            }
        },
        created() {
            this.getChannel()
            this.getList('头条')
        }
    }
</script>

<style>
</style>