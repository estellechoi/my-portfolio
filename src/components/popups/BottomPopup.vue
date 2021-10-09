<template>
  <div class="popup" role="dialog">
    <slot />
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';

.popup {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: var(--color-white);
  padding: var(--padding-page-v-top) var(--padding-page-h-s);
  border-top-left-radius: var(--radius-m);
  border-top-right-radius: var(--radius-m);
  box-shadow: $box-shadow-base;
  animation: popup-from-bottom $animation-duration-s both;
}

@keyframes popup-from-bottom {
  0% {
    transform: translateY(600);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
