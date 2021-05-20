<template>
    <div class="sa_form">
        <div class="sa-header">
            <img src="@/assets/RJG_Logo_New_2020_160x160.png" alt="MRJG Logo"/>
        </div>
        <form>
        <div class="form-group">
          <label for="name">Slaptažodis</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Įveskite moksleivio valdo ir pavardės pirmas 3 raides">
          <div class="show-pass">
            <small class="text-pass">Rodyti slaptažodį
              
            </small><input type="checkbox" id="show-password">
          </div>
        </div>
        <button
          type="submit"
          id="btn-login"
          class="mrjg_button heavy yellow wide"
          style="padding: 0.3rem 1.2rem;">
            Rodyti
        </button>
      </form>
    </div>
</template>

<script>
export default {
    name: 'AtudentAssignmentForm',
    components: {}
}
</script>

<style lang="scss" scoped>
.sa_form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-65%);
    padding: 15px;
    background-color: #302f34;
    border-radius: 16px;
    color: #f7f7ff;
    width: 33.333333%;

    .wide {
        width: 100%;
    }

    label {
        font-size: 1.3rem;
    }

    .form-control {
        background-color: #afbac9;
        display: block;
        width: 100%;
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

.sa-header {
    text-align: center;
    margin-bottom: 0.3rem;

    img {
      width: 150px;
    }
}
</style>