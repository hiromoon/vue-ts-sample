<template>
  <v-app-bar color="deep-purple accent-4" app dense>
    <v-app-bar-nav-icon @click="onClickMenu"></v-app-bar-nav-icon>
    <v-toolbar-title>Users</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    onClickMenu: Function
  }
});
</script>
