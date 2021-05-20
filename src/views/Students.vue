<template>
    <div class="Students">
        <StudentsTable />
    </div>
</template>

<script>
import StudentsTable from '../components/StudentsTable'
export default ({
    name: 'Students',
    components: {
        StudentsTable
    }
})
</script>

<style lang="scss" scoped>
.Students {
    margin-top: 0.5rem;
}
</style>