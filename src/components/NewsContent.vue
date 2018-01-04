<template>
    <div class="form-horizontal news-list-container">
        <div class="container-fluid">
            <div class="news-loading" v-show="loading">
                <img src="../assets/loading.png">
            </div>
            <dl class="news-list" v-for="(item, index) in list">
                <dt><img :src="item.pic || require('../assets/common.jpg')"></dt>
                <dd>
                    <h4>{{item.title}}</h4>
                    <h5>
                        <span>来源:{{item.src}}</span>
                        <span class="ml10">发布日期:{{item.time}}</span>
                    </h5>
                </dd>
            </dl>
        </div>
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
                }
            }
        },
        methods: {

        },
        computed: {
            ...mapState({
                list: state => state.content.list,
                loading: state => state.content.loading
            })
        }
    }
</script>

<style>
    .news-list-container {
        width: 1200px;
        margin: 0 auto;
    }

    .news-list {
        height: 150px;
        border-bottom: 1px solid #ccc;
        text-align: left;
    }

    .news-list img {
        width: 192px;
        height: 128px
    }

    .news-list dt{
        float: left;
        margin-right: 10px;
    }

    .news-list dd {
        float: left;
    }

    .news-loading img {
      margin-top: 30px;
      width: 50px;
      height: 50px;
      animation: loading .6s linear infinite
    }

    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .ml10 {
        margin-left: 10px;
    }
</style>