import axios from "axios";

const state = {
    students: {},
    msg: {}
};
const getters = {};
const actions = {
    getAll({ commit }) {
        axios.get('http://localhost:1234/student')
            .catch(function(error) {
                console.log(error);
            })
            .then(response => {
                commit('setStudents', response.data)
            })
    },
    deleteOne({ commit }, id) {
        const url = 'http://localhost:1234/student/' + id;
        const id_of_deleted_student = id;
        axios.delete(url)
            .catch(function(error) {
                console.log(error);
            })
            .then(response => {
                commit('deleteStudent', response.data, id_of_deleted_student)
            })
    }
};
const mutations = {
    setStudents(state, data) {
        state.students = data.students
        state.msg = data.msg
    },
    deleteStudent(state, data) {
        const i = state.students.map(item => item.id).indexOf(data.student.id)
        state.students.splice(i, 1)
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