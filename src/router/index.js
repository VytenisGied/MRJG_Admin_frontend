import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../views/Home.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            //component: Home
            component: () =>
                import ('../views/Main.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('../views/About.vue')
        },
        {
            path: '/event/:id',
            name: 'eventSingle',
            component: () =>
                import ('../views/EventSingle.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/teachers',
            name: 'teachers',
            component: () =>
                import ('../views/Teachers.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/students',
            name: 'students',
            component: () =>
                import ('../views/Students.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/classes',
            name: 'classes',
            component: () =>
                import ('../views/Classes.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/streams',
            name: 'streams',
            component: () =>
                import ('../views/Streams.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/timetable',
            name: 'timetable',
            component: () =>
                import ('../views/Timetable.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/sa/:slug',
            name: 'studentAssignment',
            component: () =>
                import ('../views/StudentAssignment.vue'),
        },
        {
            path: '/404',
            name: '404',
            component: () =>
                import ('../views/404.vue'),
        },
        {
            path: '/:catchAll(.*)',
            redirect: { name: '404' }
        },
    ]
})