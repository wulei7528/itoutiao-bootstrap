import axios from 'axios'

const state = {
    channels: ''
}

const mutations = {
    muChannels(state, data) {
        state.channels = data;
    }
}

const actions = {
    getChannel(context) {
        var url = encodeURI('/api/channels');
        axios.get(url).then(res => {
            var channels = res.data.result;

            context.commit('muChannels', channels);
        });
    }
}

export default {
    state,
    mutations,
    actions
}