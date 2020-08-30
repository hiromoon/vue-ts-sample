<template>
  <v-app>
    <v-navigation-drawer v-model="isOpen" absolute temporary>
      <NavigationDrawer />
    </v-navigation-drawer>
    <Header :onClickMenu="onClickMenu" />
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
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    NavigationDrawer
  },

  methods: {
    onClickMenu() {
      this.isOpen = true;
    }
  },

  data() {
    return {
      isOpen: false
    };
  }
});
</script>
