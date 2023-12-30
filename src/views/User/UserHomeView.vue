<script setup lang="ts">

import UserHeader from '@/components/User/UserHeader.vue'
import UserFooter from '@/components/User/UserFooter.vue'
</script>

<template>
  <div class="wrapper">
    <main>123</main>
    <UserFooter />
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  > main {
    height: calc(100vh - 3.6rem);
    flex: 1;
  }
}

</style>