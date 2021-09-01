<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/views/nav/NavBar.vue'

export default defineComponent({
  components: {
    NavBar,
  },
})
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: var(--color-white);
}
</style>
