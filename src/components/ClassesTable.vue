<template>
    <div class="ClassesTable">
        <ClassInfo v-for="oneClass in classe" :key="oneClass.id" :oneClass="oneClass"/>
    </div>
</template>

<script>
import ClassInfo from './partials/ClassInfo'
export default {
    name: 'ClassesTable',
    components: {
        ClassInfo
    },
    computed: {
        classe: {
            get() {
                return this.$store.state.classes.classes
            }
        }
    },
    created() {
        this.$store.dispatch('classes/getAllClasses')
        .then(response => {
            console.log("Got some data, now lets show something in this component", response)
        }, error => {
            console.error("Got nothing from server. Prompt user to check internet connection and try again", error)
        })
    }
}
</script>

<style lang="scss" scoped>
.ClassesTable {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>