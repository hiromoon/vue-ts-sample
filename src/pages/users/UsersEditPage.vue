<template>
  <h1>Users > {{ id }} Edit Page</h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserEditPage",
  props: ["id"]
});
</script>
