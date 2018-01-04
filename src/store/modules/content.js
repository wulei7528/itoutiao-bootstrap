import axios from 'axios'

const state = {
    list: '',
    loading: false
}

const mutations = {
    muList(state, data) {
        state.list = data;
    },

    muLoad(state, data) {
        state.loading = data;
    }
}

const actions = {
    getList(context, options) {
        var url = '/api/content';

        // var url = 'http://api.jisuapi.com/news/get';
        context.commit('muLoad', true);
        axios.get(url, {
            params: {
                appkey: 'ca05a06b9221f5d1',
                start: 0,
                num: 30,
                channel: options.channel
            }
        }).then(res => {
            var list = res.data.result.list;

            context.commit('muList', list);
            context.commit('muLoad', false);
        });
    }
}

export default {
    state,
    mutations,
    actions
}