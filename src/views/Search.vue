<template>
    <div>
      <input v-model="searchQuery"  />
      <button @click="search">Tìm kiếm</button>
  
      <div>
        <p>Value: {{ currentQuery }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const searchQuery = ref('')
  const route = useRoute()
  const router = useRouter()
  
  const currentQuery = computed(() => route.query.q || 'Trước khi tìm kiếm')
  
  const search = () => {
    if (searchQuery.value) {
      router.push({ path: '/search', query: { q: searchQuery.value } })
    }
  }
  </script>
  