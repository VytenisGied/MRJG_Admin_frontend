import axios from "axios";

const state = {
    studentInfo: {}
};
const getters = {};
const actions = {
    getInfo({ commit }, reqData) {
        axios.post(`http://localhost:1234/sa/${reqData.id}`, {
                password: reqData.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch((error) => {
                commit('setMsg', error.response)
            })
            .then(response => {
                commit('setStudentInfo', response.data)
            })
    },
    generateStreams({ commit }) {
        axios.get('http://localhost:1234/sa')
            .catch((error) => {
                commit('setMsg', error.response)
            })
            .then(response => {
                commit('setMsg', response)
            })
    },
    editInfo({ commit }, reqData) {
        axios.post(`http://localhost:1234/sa/edit/${reqData.id}`, {
                password: reqData.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch((error) => {
                commit('setMsg', error.response)
            })
            .then(response => {
                commit('setStudentInfo', response.data)
            })
    },
};
const mutations = {
    setStudentInfo(state, data) {
        state.studentInfo = data.studentInfo
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