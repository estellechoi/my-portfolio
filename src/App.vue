<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/views/common/AppHeader.vue'

export default defineComponent({
  components: {
    AppHeader,
  },
})
</script>

<style lang="scss">
@import '@/styles/modules.scss';

#app {
  min-height: 100vh;
  background-color: var(--color-white);
}
</style>
