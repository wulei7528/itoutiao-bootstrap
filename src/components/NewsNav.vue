<template>
    <div class="nav">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" @click="channelClick('头条')">
                        {{homeChannel.title}}
                    </a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li v-for="(channel, index) in channels">
                            <a class="nav-item" href="javascript:;" @click="channelClick(channel, index)">{{channel}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="news-nav-location">当前板块：{{curChannel}}</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default{
        data: function() {
            return {
                homeChannel: {
                    title: '爱头条',
                    url: '/'
                },

                curChannel: '爱头条'
            }
        },
        methods: {
            channelClick(channel, index) {
                this.curChannel = channel

                this.$store.dispatch('getList', {
                    channel: channel,
                    index: index
                });
            }
        },
        computed: {
            ...mapState({
                channels: state => state.channel.channels
            })
        }
    }
</script>

<style>
    .navbar-default {
        background-color: #1873C8;
        border-color: #e7e7e7;
    }

    .navbar .container-fluid {
        width: 1200px;
        margin: 0 auto;
    }

    .navbar-default .navbar-brand {
        cursor: pointer;
        color: #fff;
    }

    .navbar-default .navbar-nav>li>a {
        cursor: pointer;
        color: #fff;
    }

    .navbar-default .navbar-nav>li>a:hover {
        color: #fff;
        background-color: #1462aa;
    }

    .news-nav-location {
        text-align: left;
        width: 1200px;
        margin: 0 auto;
        padding: 0px 15px 15px;
    }
</style>