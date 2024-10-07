<template>
  <div class="not-found">
    <h1>404 - Trang không tồn tại</h1>
    <router-link to="/">Quay lại trang chủ</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 48px;
  color: #ff5252;
}

.not-found p {
  font-size: 18px;
}

.not-found a {
  font-size: 20px;
  color: #42b983;
  text-decoration: none;
}
</style>