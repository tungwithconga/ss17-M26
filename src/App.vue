<template>
  <div>
    <h1>App page</h1>
    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- Hiển thị các component sử dụng cơ chế lazy -->
        <template #default>
          <component :is="Component" />
        </template>
        <!-- Sử dụng hiệu ứng loading khi tải lại trang -->
         <template #fallback>
          <div>Loading...</div>
         </template>
      </Suspense>
    </router-view>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>