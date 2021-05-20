<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <span v-if="$auth.isAuthenticated" class="menuToggle" @click="sideMenu = !sideMenu">
        <span class="t-cell"></span><span class="t-cell"></span><span class="t-cell"></span>
        <span class="t-cell"></span><span class="t-cell"></span><span class="t-cell"></span>
        <span class="t-cell"></span><span class="t-cell"></span><span class="t-cell"></span>
      </span>
      <span v-if="sideMenu">
        <router-link to="/" class="navbar-item">Pagrindinis</router-link>
        <!-- <router-link to="/about" class="navbar-item">About</router-link> -->
        <router-link to="/teachers" class="navbar-item">Mokytojai</router-link>
        <router-link to="/students" class="navbar-item">Moksleiviai</router-link>
        <router-link to="/classes" class="navbar-item">Klasės</router-link>
        <router-link to="/streams" class="navbar-item">Srautai</router-link>
        <router-link to="/timetable" class="navbar-item">Tvarkaraštis</router-link>
        <router-link to="/sa/123" class="navbar-item">Paskyrimai</router-link>
      </span>
    </div>
    <div class="navbar-brand">
    <div class="navbar-item mrjg_brand">
      <img src="@/assets/RJG_Logo_New_2020_160x160.png" alt="MRJG Logo">
      <strong class="is-size-5">Marijampolės Rygiškių Jono gimnazija</strong>
    </div>
    <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a> -->
  </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <div v-if="!$auth.loading">
            <!-- show login when not authenticated -->
            <a v-if="!$auth.isAuthenticated" @click="login" class="mrjg_buttons"><strong>Prisijungti</strong></a>
            <!-- show logout when authenticated -->
            <a v-if="$auth.isAuthenticated" @click="logout" class="mrjg_buttons"><strong>Atsijungti</strong></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      sideMenu: false
    }
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-left: 0;
    width: 100% !important;
    background-color: #302f34;
    a {
      font-weight: bold;
      color: #afbac9;
      background-color: rgba(0, 0, 0, 0);
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: #fcfcc4;
      }

      &:focus {
        background-color: rgba(0, 0, 0, 0.1);
        color: #fcfcc4;
      }
      
      &.router-link-exact-active {
        color: #f4f44f;
        background-color: rgba(0, 0, 0, 0);
      }
    }  
  }
  .mrjg_brand {
    display: flex;
    align-items: center;
    
    strong {
      color: #afbac9;
    }

    img {
      margin-right: 0.3rem;
    }
  } 
  .menuToggle {
    margin-left: 0.5rem;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    width: 52px;
    height: 52px;

    &:hover .t-cell {
      background-color: #fcfcc4;
    }

    .t-cell {
      width: 14px;
      height: 14px;
      background-color: #afbac9;
      margin-right: 5px;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
</style>