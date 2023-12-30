<script setup lang="ts">
import { ref } from 'vue'

const isClickedStartBtn = ref(false);

function setDateFormat(date: Date) {
  let hour = date.getHours();
  let minute = date.getMinutes();

  let fixedAMPM: string = hour >= 0 && hour < 12 ? '오전' : '오후';
  let fixedHour: string = hour > 12 ? (hour - 12).toString() : hour.toString();
  let fixedMinute: string = minute >= 10 ? minute.toString() : '0' + minute.toString();

  return `${fixedAMPM} ${fixedHour}:${fixedMinute}`
}
</script>

<template>
  <footer class="user-footer">
    <div class="inner">
      <div class="left">
        <button :class="{active: isClickedStartBtn}" @click="isClickedStartBtn = !isClickedStartBtn">
          <img class="logo" src="@/assets/images/logo.png" />
          <p>시작</p>
        </button>
      </div>
      <div class="right">
        <button class="active">
          <p>{{setDateFormat(new Date())}}</p>
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.user-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  align-self: center;
  height: 3.6rem;
  background: #c0c0c0;
  border-top: 0.4rem solid #E3DEE4;
  padding: 0.2rem;

  > .inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .left {
      height: 100%;

      > button {
        height: 100%;
        display: flex;
        padding: 0.2rem;
        align-items: center;
        gap: 0.4rem;

        > img.logo {
          aspect-ratio: 1 / 1;
          width: 2rem;
        }

        > p {
          font-size: 1.4rem;
        }
      }
    }

    > .right {
      height: 100%;

      > button {
        height: 100%;
        padding: 0 0.8rem;

        > p {
          font-size: 1.4rem;
        }
      }
    }
  }
}

</style>