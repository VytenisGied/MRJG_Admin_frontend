<template>
    <table>
        <tr class="head">
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>Klasė</th>
            <th>Telefonas</th>
            <th>El. paštas</th>
            <th>Veiksmai</th>
        </tr>
        <tr v-for="student in students" :key="student.id" class="row">
            <td>{{ student.people.name }}</td>
            <td>{{ student.people.lastname }}</td>
            <td><span v-if="student.classes">{{ student.classes.group }}{{ student.classes.name }}</span></td>
            <td>{{ student.people.phone }}</td>
            <td>{{ student.people.email }}</td>
            <td>
                <a href="#" class="mrjg_button light yellow">Readaguoti</a>&nbsp;&nbsp;
                <a class="mrjg_button light red" @click="deleteStudent(student.id)" style="beckground-color: red">Naikinti</a>
            </td>
        </tr>
    </table>
</template>

<script>
export default ({
    name: 'StudentsTable',
    data() {
        return {}
    },
    computed: {
        students: {
            get() {
                return this.$store.state.students.students
            }
        }
    },
    created() {
        this.$store.dispatch('students/getAll')
        .then(response => {
            console.log("Got some data, now lets show something in this component", response)
        }, error => {
            console.error("Got nothing from server. Prompt user to check internet connection and try again", error)
        })
    },
    methods: {
        deleteStudent:function(id) {
            this.$store.dispatch('students/deleteOne', id)
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
