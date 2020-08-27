<template>
  <v-app>
    <v-navigation-drawer app>
      <ul>
        <li>Users</li>
      </ul>
    </v-navigation-drawer>
    <v-app-bar app>
      <h1>Header</h1>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>
