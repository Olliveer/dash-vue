<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-button
        class="ms-3"
        v-b-toggle.sidebar-no-header
        size="sm"
        variant="dark"
        ><b-icon icon="list"></b-icon
      ></b-button> -->

      <b-navbar-toggle target="nav-collapse" class="ms-3"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="ms-4">
        <b-navbar-nav>
          <b-nav-item href="#">Logo</b-nav-item>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ms-auto me-5">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar rounded style="color: #FFF"></b-avatar>
              <span style="color: #FFF; margin-right: 2px">User</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="css" scoped>
#nav a.router-link-exact-active {
  color: white;
}
</style>
