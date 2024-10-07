<template>
    <div>
      <nav>
        <router-link to="/admin">Dashboard</router-link>
        <router-link to="/admin/manager-user">User</router-link>
        <router-link to="/admin/manager-product">Product</router-link>
        <router-link to="/admin/settings">Setting</router-link>
      </nav>
      <hr />
      <router-view />
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  nav a {
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
  }
  
  nav a.router-link-active {
    background-color: #ff0000;
    color: white;
    border-radius: 4px;
  }
  </style>
  