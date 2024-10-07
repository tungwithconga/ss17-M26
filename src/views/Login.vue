<template>
    <div class="login-page">
      <h1>Trang đăng nhập</h1>
      <p>Vui lòng đăng nhập để truy cập vào bảng điều khiển.</p>
      <router-link to="/dashboard">Đi đến Dashboard</router-link>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .login-page {
    text-align: center;
    margin-top: 50px;
  }
  
  .login-page h1 {
    font-size: 36px;
  }
  
  .login-page a {
    font-size: 18px;
    color: #42b983;
    text-decoration: none;
  }
  </style>
  