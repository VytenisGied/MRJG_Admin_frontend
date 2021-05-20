<template>
    <table>
        <tr class="head">
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>Mokomasis dalykas</th>
            <th>Kabinetas</th>
            <th>Veiksmai</th>
        </tr>
        <tr v-for="teacher in teachers" :key="teacher.id" class="row">
            <td>{{ teacher.person.name }}</td>
            <td>{{ teacher.person.lastname }}</td>
            <td><span v-if="teacher.subject">{{ teacher.subject.name }}</span></td>
            <td><span v-for="classroom in teacher.classroom" :key="classroom.id">{{ classroom.name }} </span></td>
            <td>
                <a href="#" class="mrjg_button light yellow">Readaguoti</a>&nbsp;&nbsp;
                <a class="mrjg_button light red" @click="deleteTeacher(teacher.id)" style="beckground-color: red">Naikinti</a>
            </td>
        </tr>
    </table>
</template>

<script>
export default ({
    name: 'TeachersTable',
    data () {
        return {}
    },
    computed: {
        teachers: {
            get() {
                return this.$store.state.teacher.teachers
            }
        }
    },
    created() {
        this.$store.dispatch('teacher/getAll')
        .then(response => {
            console.log("Got some data, now lets show something in this component", response)
        }, error => {
            console.error("Got nothing from server. Prompt user to check internet connection and try again", error)
        })
    },
    methods: {
        deleteTeacher:function(id) {
            this.$store.dispatch('teacher/deleteOne', id)
            .then(response => {
                console.log("Got some data, now lets show something in this component", response)

            }, error => {
                console.error("Got nothing from server. Prompt user to check internet connection and try again", error)
            })
        },
    },
})
</script>

<style lang="scss" scoped>
table {
    margin: 0 auto;
}
</style>