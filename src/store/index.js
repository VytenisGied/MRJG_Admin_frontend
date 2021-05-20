import Vue from "vue";
import Vuex from "vuex";

import classes from "./modules/classes"
import streams from "./modules/streams"
import studentAssignment from "./modules/studentAssignment"
import students from "./modules/students"
import teacher from "./modules/teacher"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        classes,
        streams,
        studentAssignment,
        students,
        teacher
    }
})