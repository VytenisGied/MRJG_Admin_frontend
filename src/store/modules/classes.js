import axios from "axios";

const state = {
    classes: {},
    students: {},
    msg: {
        msg: {},
        status: {}
    }
};
const getters = {};
const actions = {
    getAllClasses({ commit }) {
        axios.get('http://localhost:1234/class')
            .catch((error) => {
                commit('setMsg', error.response)
            })
            .then(response => {
                commit('setClasses', response.data)
            })
    },
    createClass({ commit }, reqData) {
        axios.post('http://localhost:1234/class', {
                "group": reqData.group,
                "name": reqData.name
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch((error) => {
                commit('setMsg', error.response)
            })
            .then(response => {
                commit('createClassResponse', response.data)
            })
    },
    getStudents({ commit }, class_id) {
        axios.get(`http://localhost:1234/class/students/${class_id}`)
            .catch((error) => {
                commit('setMsg', error.response)
            })
            .then(response => {
                commit('setClassStudents', response.data)
            })
    }
};
const mutations = {
    setClasses(state, data) {
        state.classes = data.classes
        state.msg = {}
    },
    createClassResponse(state, data) {
        // let a = ['1', '2', '3'];
        // a.splice(2, 0, '4', '5');
        // console.log(a);
        for (let i = 1; i < state.classes.length; i++) {
            if (parseInt(state.classes[i - 1].group) <= parseInt(data.class.group)) {
                if (i != state.classes.length - 1) {
                    if ((state.classes[i].name < data.class.name &&
                            state.classes[i + 1].name > data.class.name) ||
                        (state.classes[i].name < data.class.name &&
                            parseInt(state.classes[i].group) > parseInt(data.class.group)) ||
                        data.class.name === "A") {
                        console.log('------------------------------')
                        console.log(state.classes[i])
                        console.log(data.class)
                        console.log('------------------------------')
                    }
                }
            }
        }
        state.classes.created = data.class
        state.msg.msg = data.msg
        state.msg.status = 200
    },
    setClassStudents(state, data) {
        state.students = data.class
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