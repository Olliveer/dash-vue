<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
      <side-bar></side-bar>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    'nav-bar': NavBar,
    'side-bar': SideBar,
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
