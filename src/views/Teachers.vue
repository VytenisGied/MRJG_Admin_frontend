<template>
    <div class="Teachers">
        <TeachersTable />
    </div>
</template>

<script>
import TeachersTable from '../components/TeachersTable'
export default ({
    name: 'Teachers',
    components: {
        TeachersTable
    }
})
</script>

<style lang="scss" scoped>
.Teachers {
    margin-top: 0.5rem;
}
</style>
