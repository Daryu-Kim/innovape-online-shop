<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="left">
        <img class="logo" src="@/assets/images/logo.png" />
      </div>
      <div class="right">
        <nav>
          <button>로그인</button>
          <button>회원가입</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  align-self: center;
  height: 6.4rem;
  background: #01017c;

  > .inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .left {
      > img.logo {
        aspect-ratio: 1 / 1;
        width: 4rem;
      }
    }

    > .right {
      > nav {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        > button {
          outline: none;
          border: none;
          background: none;
          font-size: 1.4rem;
          font-weight: 500;
        }
      }
    }
  }
}

</style>