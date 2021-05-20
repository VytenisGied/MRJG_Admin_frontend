import axios from "axios";

const state = {
    streams: {},
    students: {},
    msg: {
        msg: {},
        status: {}
    }
};
const getters = {};
const actions = {
    getAll({ commit }) {
        axios.get('http://localhost:1234/streams')
            .catch((error) => {
                commit('setMsg', error.response)
            })
            .then(response => {
                commit('setstreams', response.data)
            })
    }
};
const mutations = {
    setstreams(state, data) {
        state.classes = data.classes
        state.msg = {}
    },
    setMsg(state, data) {
        state.students = {}
        state.msg.msg = data.data.msg
        state.msg.status = data.status
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}