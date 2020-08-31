<template>
  <div>
    <h1>Create User</h1>
    <v-form v-model="valid">
      <v-text-field v-model="user.name" label="Name"></v-text-field>
      <v-text-field v-model="user.email" label="Email"></v-text-field>
      <v-btn color="success" class="mr-4" @click="postUser">
        Create
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserCreatepage",
  data() {
    return {
      valid: false,
      user: {
        id: null,
        name: null,
        email: null
      }
    };
  },
  methods: {
    async postUser() {
      try {
        const res = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.user),
          mode: "cors"
        });

        if (!res.ok) {
          throw new Error("network error");
        }

        this.$router.push({ path: "/users" });
      } catch (err) {
        console.error(err);
      }
    }
  }
});
</script>
