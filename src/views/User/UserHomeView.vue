<script setup lang="ts">

import UserHeader from '@/components/User/UserHeader.vue'
import UserFooter from '@/components/User/UserFooter.vue'
</script>

<template>
  <div class="wrapper">
    <UserFooter />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

</style>