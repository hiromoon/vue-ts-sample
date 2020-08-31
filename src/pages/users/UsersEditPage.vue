<template>
  <div>
    <h1>Users > {{ id }} Edit Page</h1>
    <v-btn color="error" @click="deleteUser">Remove</v-btn>
    <v-form v-model="valid">
      <v-text-field v-model="user.name" label="Name"></v-text-field>
      <v-text-field v-model="user.email" label="Email"></v-text-field>
      <v-btn color="success" class="mr-4" @click="updateUser">
        Save
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserEditPage",
  props: { id: String },
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
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const res = await fetch(`http://localhost:3000/users/${this.id}`);
        const payload = await res.json();
        this.user = payload;
      } catch (err) {
        console.error(err);
      }
    },
    async updateUser() {
      try {
        const res = await fetch(`http://localhost:3000/users/${this.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.user),
          mode: "cors"
        });
        this.user = await res.json();
      } catch (err) {
        console.error(err);
      }
    },
    async deleteUser() {
      try {
        const res = await fetch(`http://localhost:3000/users/${this.id}`, {
          method: "DELETE",
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
