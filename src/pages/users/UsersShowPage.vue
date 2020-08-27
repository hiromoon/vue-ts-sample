<template>
  <div>
    <h1>Users > id: {{ id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserPage",
  props: ["id"]
});
</script>
