<template>
    <div class="new_class_form">
        <form @submit="submitCreate">
            <!-- <input v-model="reqData.group" type="text" name="group" id="group"> -->
            <select v-model="reqData.group" name="group" id="group" required>
                <option value="1">Pirma</option>
                <option value="2">Antra</option>
                <option value="3">Trečia</option>
                <option value="4">Ketvirta</option>
            </select>
            <input v-model="reqData.name" type="text" name="name" id="name" placeholder="Klasės raidė" required>
            <input type="submit" value="Sukurti" class="mrjg_button light yellow">
        </form>
    </div>
</template>

<script>
export default {
    name: 'createClassForm',
    data() {
        return {
            reqData: {
                name: '',
                group: '1'
            }
        }
    },
    methods: {
        submitCreate:function(e) {
            e.preventDefault();
        
            console.log('veikia')
            this.$store.dispatch('classes/createClass', this.reqData)
        }
    }
}
</script>

<style lang="scss" scoped>
.new_class_form {
    padding: 15px;
    background-color: #302f34;
    border-radius: 16px;
    color: #f7f7ff;
    width: 33.333333%;
    margin: 1rem;
    form {
        display: flex;
        align-items: center;
        justify-content: space-between;

        select {
            width: 33.333333%;
            background-color: #afbac9;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        #name {
            width: 33.333333%;
            background-color: #afbac9;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
    }
}
</style>