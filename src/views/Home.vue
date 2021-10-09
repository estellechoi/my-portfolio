<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" class="flex justify-center" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';

.home {
  min-height: 100vh;
  background-color: var(--color-white);
  background-image: url(./../assets/bg/bg-me-in-paris.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 40%;
  background-attachment: scroll;
  padding: var(--size-header-h) var(--padding-page-h-s);
}
</style>
