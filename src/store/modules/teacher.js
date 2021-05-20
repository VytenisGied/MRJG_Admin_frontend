import axios from "axios";

const state = {
    teachers: {},
    msg: {}
};
const getters = {};
const actions = {
    getAll({ commit }) {
        axios.get('http://localhost:1234/teacher')
            .catch(function(error) {
                console.log(error);
            })
            .then(response => {
                commit('setTeachers', response.data)
            })
    },
    deleteOne({ commit }, id) {
        const url = 'http://localhost:1234/teacher/' + id;
        const id_of_deleted_teacher = id;
        console.log(url);
        axios.delete(url)
            .catch(function(error) {
                console.log(error)
            })
            .then(response => {
                commit('deleteTeacher', response.data, id_of_deleted_teacher)
            })
    }
};
const mutations = {
    setTeachers(state, data) {
        state.teachers = data.teachers
        state.msg = data.msg
    },
    deleteTeacher(state, data) {
        const i = state.teachers.map(item => item.id).indexOf(data.teacher.id)
        state.teachers.splice(i, 1)
        state.msg = data.msg
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}