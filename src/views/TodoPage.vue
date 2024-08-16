<script setup>
import TheHeader from '@/components/TheHeader.vue'
import NavBottom from '@/components/NavBottom.vue'
import router from '@/router'
import TheToDoCard from '@/components/TheToDoCard.vue'
import { onBeforeUnmount } from 'vue'

if (!localStorage.getItem('activeUser')) {
  router.push('/login')
}
</script>
<template>
  <div class="py-5"></div>
  <TheHeader />
  <div class="py-5"></div>

  <div class="flex h-screen bg-gray-100">
    <NavBottom />
    <!-- Main content -->

    <TheToDoCard />
  </div>
</template>
<style scoped>
* {
  background-color: rgba(0, 0, 0, 0.596);
}
</style>
