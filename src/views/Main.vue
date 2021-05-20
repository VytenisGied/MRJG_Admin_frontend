<template>
  <div class="main_page">
      <div v-if="!$auth.isAuthenticated">
          <div>
            <h1>Marijampolės Rygiškių Jono gimnazijos</h1>
            <h2>administracinė sistema</h2>
            <h3>Jei esate MRJG bendruomenės narys</h3>
          </div>
          <div><a @click="login" class="mrjg_button heavy yellow">Prisijungti</a></div>
      </div>
      <div v-if="$auth.isAuthenticated" class="authenticated">
          <h1>Marijampolės Rygiškių Jono gimnazijos</h1>
          <h2>administracinė sistema</h2>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
  }
}
</script>

<style lang="scss" scoped>
.main_page {
    margin: 10rem;

    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 2rem;
    }

    .authenticated {
        text-align: end;
    }
}
</style>