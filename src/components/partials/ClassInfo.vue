<template>
    <div class="ClassInfo">
        <div class="class_name">{{ oneClass.group }}{{ oneClass.name }}</div>
        <div class="schoolmaster">
            <span v-if="oneClass.schoolmaster">{{ oneClass.schoolmaster.name }} {{ oneClass.schoolmaster.lastname }}</span>
            <span v-else>Auklėtojas nepaskirtas</span>
        </div>
        <div v-if="showStudents" class="students_list">
            <div v-for="student in currentClassStudents" :key="student.students.id" class="student">{{ student.students.people.name }} {{ student.students.people.lastname }}</div>
            <div v-if="msg.status == 404">{{msg.msg}}</div>
        </div>
        <div @click="getStudentInfo(oneClass.id)" class="show_student">
            <span>Moksleiviai <span v-if="!showStudents">&#9660;</span><span v-else>&#9650;</span></span>
        </div>
        <div class="btn_location">
            <a @click="showStudent = !showStudent" class="mrjg_button light yellow">Daugiau</a>&nbsp;&nbsp;
            <a @click="deleteClass" class="mrjg_button light red">Naikinti</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClassInfo',
    props: ['oneClass'],
    data() {
        return {
            showStudents: false,
            currentClassStudents: {}
        }
    },
    computed: {
        students: {
            get() {
                return this.$store.state.classes.students
            }
        },
        msg: {
            get() {
                return this.$store.state.classes.msg
            }
        }
    },
    methods: {
        getStudentInfo:function(class_id) {
            if(this.showStudents === false){
                 this.$store.dispatch('classes/getStudents', class_id)
                .then(response => {  
                    console.log("Got some data, now lets show something in this component", response)
                }, error => {
                    console.error("Got nothing from server. Prompt user to check internet connection and try again", error)
                })
                this.currentClassStudents = this.$store.state.classes.students  
            }
            this.showStudents = !this.showStudents
        },
        deleteClass:function() {
            for( var i = 0; i < this.$parent.classes.length; i++){                
                if ( this.$parent.classes[i].id === this.oneClass.id) { 
                    this.$parent.classes.splice(i, 1); 
                    i--; 
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.ClassInfo {
    width: 250px;
    height: fit-content;
    background-color: #302f34;
    text-align: center;
    margin: 0.3rem;

    .class_name{
        background-color: #18171d;
        width: 100%;
        padding: 1rem;
    }

    .schoolmaster {
        width: 100%;
        padding: 1rem;
    }

    .btn_location {
        width: 100%;
        padding: 1rem;
        background-color: #46454a;
    }

    .show_student {
        color: #f4f44f;
        background-color: #69686c;
        width: 100%;
        cursor: pointer;

        &:hover span {
            text-decoration: underline;
            color: #f8f889;
        }
    }
}
.students_list {
    text-align: start;
    padding: 0.3rem;
    background-color: #69686c;

    .student {
        &:nth-child(odd) {
            background-color: #302f34;
        }

        &:hover {
            background-color: #afbac9;
        }
    }
}
</style>