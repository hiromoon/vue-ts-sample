<template>
  <v-app>
    <v-navigation-drawer app>
      <ul>
        <li>Users</li>
      </ul>
    </v-navigation-drawer>
    <Header />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header
  },

  data: () => ({
    //
  })
});
</script>
