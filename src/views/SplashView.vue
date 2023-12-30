<script setup lang="ts">
import Spinner from '@/components/Spinner.vue'
import router from '@/router'

setTimeout(() => {
  router.push("/shop");
}, 5000);
</script>

<template>
  <div class="splash">
    <div class="inner">
      <img src="@/assets/images/logo-fg.png" />
      <Spinner />
    </div>
  </div>
</template>

<style scoped lang="scss">
.splash {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/logo-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
  background-blend-mode: overlay;
  display: flex;
  align-items: center;
  justify-content: center;

  > .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8rem;

    > img {
      width: 75%;
      max-width: 72rem;
    }
  }
}
</style>