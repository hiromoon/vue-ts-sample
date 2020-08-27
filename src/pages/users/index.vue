<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users">
      index
    </router-link>
    <router-link to="/users/new">
      new
    </router-link>
    <router-link to="/users/10">
      show
    </router-link>
    <router-link to="/users/10/edit">
      edit
    </router-link>
    <router-view></router-view>
  </div>
</template>
