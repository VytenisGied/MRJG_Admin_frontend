<template>
    <div class="classes">
        <div class="buttons">
            <router-link to="/streams" class="mrjg_button heavy yellow">Srautai</router-link>
            <a @click="displayCreateForm = !displayCreateForm" class="mrjg_button heavy yellow">Pridėti naują</a>
        </div>
        <createClassForm v-if="displayCreateForm"/>
        <ClassesTable />
    </div>
</template>

<script>
import ClassesTable from '../components/ClassesTable'
import createClassForm from '../components/partials/createClassForm'
export default {
    name: 'Classes',
    components: {
        ClassesTable,
        createClassForm
    },
    data () {
        return {
            displayCreateForm: false
        }
    }
}
</script>

<style lang="scss" scoped>
.buttons {
    margin: 1rem 5rem 1rem 5rem;
    display: flex;
    justify-content: space-between;
}
</style>
