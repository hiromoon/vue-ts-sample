<template>
  <h1>Users > id: {{ id }}</h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserPage",
  props: ["id"]
});
</script>
