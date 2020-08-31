<template>
  <div>
    <h1>Users > {{ id }} Edit Page</h1>
    <v-btn color="error" @click.stop="showDialog">Remove</v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>Remove Confirmation</v-card-title>

        <v-card-text>Will you remove below user, ok? </v-card-text>
        <v-card-text>User id: {{ id }} </v-card-text>
        <v-card-action>
          <v-btn color="default" @click="dismissDialog">Cancel</v-btn>
          <v-btn color="error" @click="deleteUser">Remove</v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
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
      },
      dialog: false
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
        this.dismissDialog();
        this.$router.push({ path: "/users" });
      } catch (err) {
        console.error(err);
      }
    },
    showDialog() {
      this.dialog = true;
    },
    dismissDialog() {
      this.dialog = false;
    }
  }
});
</script>
