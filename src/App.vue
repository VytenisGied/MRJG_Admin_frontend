<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/partials/Nav.vue';
export default {
  name: 'app',
  components: {
    Nav
  }  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f7f7ff;
  background-color: #020108;
  min-height: 100vh; /*calc(100vh - 4.5rem);*/
}
.mrjg_button {
  border-radius: 20px;
  color: #202020;
  border: none;

  &.heavy {
    padding: 0.7rem 1.2rem;
    line-height: 2.4rem;
    font-weight: 700;
    font-size: 1.2rem;
  }

  &.light {
    padding: 0.35rem 0.6rem;
    font-weight: 400;
    font-size: 1rem;
  }

  &.yellow {
    background-color: #f4f44f;

    &:hover {
      background-color: #f8f889;
    }
  }

  &.red {
    background-color: #f72e2e;

    &:hover {
      background-color: #f86a6a;
    }
  }
}

table, th, td {
  border-left: 1px solid #f7f7ff21;
  border-right: 1px solid #f7f7ff21;
  border-collapse: collapse;
}
table {
  th, td {
    padding: 0.4rem 0.7rem;
  }

  .for_class {
    padding: 0.4rem 0.1rem;
  }

  .head {
    background-color: #18171d;
    text-align: center;

    th {
      color: #f7f7ff;
    }
  }

  .row{
    text-align: start;

    &:nth-child(even) {
      background-color: #302f34;
    }

    &:nth-child(odd) {
      background-color: #18171d;
    }

    &:hover {
      background-color: #46454a;
    }
  }
}
</style>