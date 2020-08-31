<template>
  <div>
    <v-btn color="success" @click="navigateToNew">new</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <th class="text-left">id</th>
          <th class="text-left">name</th>
          <th class="text-left">email</th>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            @click="navigateToShow(user.id)"
          >
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      users: null
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const res = await fetch("http://localhost:3000/users");
        const payload = await res.json();
        this.users = payload;
      } catch (err) {
        console.error(err);
      }
    },

    navigateToShow(userId: string) {
      this.$router.push({ path: "/users/" + userId });
    },
    navigateToNew() {
      this.$router.push({ path: "/users/new" });
    }
  }
});
</script>
