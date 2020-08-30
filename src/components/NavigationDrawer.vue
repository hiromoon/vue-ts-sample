<template>
  <v-card height="400" width="256">
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-icon>{{ item.icon }}</v-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      items: [
        { icon: "mdi-image", title: "Users" },
        { icon: "mdi-image", title: "Livers" },
        { icon: "mdi-image", title: "Administrators" },
        { icon: "mdi-image", title: "Lives" }
      ],
      right: null
    };
  }
});
</script>
