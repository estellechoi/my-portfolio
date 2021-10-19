<template>
  <button
    type="button"
    :class="['btn', clicked ? 'btn--clicked' : '']"
    @click="handleClick"
    >{{ label }}</button
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import styles from '@/styles/modules.scss'

export default defineComponent({
  name: 'Dismiss Text Button',
  props: {
    label: {
      type: String,
      default: 'Dismiss',
    },
  },
  data() {
    return {
      clicked: false,
    }
  },
  emits: {
    click() {
      return true
    },
  },
  methods: {
    handleClick() {
      this.clicked = true

      const duration =
        Number(styles['global-animation-duration-l'].split('s')[0]) * 1000

      window.setTimeout(() => {
        this.$emit('click')
      }, duration)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';
.btn {
  --color: var(--color-brown700);
  position: relative;
  @extend %typography-btn-s;
  display: block;
  color: var(--color);
  margin-left: auto;
  margin-right: auto;

  &::after {
    content: '';
    position: absolute;
    bottom: var(--size-1);
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: var(--color);
    transform: scaleX(1);
    transform-origin: right;
    transition: transform $animation-duration-l
      $animation-timing-function-ease-out-x;
  }

  &.btn--clicked::after {
    transform: scaleX(0);
  }
}
</style>
