<template>
  <button
    type="button"
    class="button"
    :aria-label="actionLabel"
    @click="toggleActive"
  >
    <div :class="['burger', active ? 'active' : '']" aria-hidden="true">
      <div class="top-bun"></div>
      <div class="patty"></div>
      <div class="bottom-bun"></div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Burger Menu Button',
  props: {
    label: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    actionLabel() {
      return this.active ? `Close ${this.label}` : `Check ${this.label}`
    },
  },
  emits: {
    toggle(payload: { active: boolean }) {
      return payload.active
    },
  },
  methods: {
    toggleActive(): void {
      this.$emit('toggle', { active: !this.active })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';
// @use "sass:math";

.button {
  padding: 0 var(--size-horz1);

  .burger {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: var(--size-icon-m-w);
    height: var(--size-icon-m-h);

    .top-bun,
    .patty,
    .bottom-bun {
      // position: absolute;
      width: 100%;
      height: 1px;
      background-color: var(--color-white);
      transform-box: border-box;
      transition: transform 0.25s cubic-bezier(0.2, 0.6, 0.3, 1),
        width 0.25s cubic-bezier(0.2, 0.6, 0.3, 1) background-color 0.4s;
    }

    &.active {
      .top-bun,
      .patty,
      .bottom-bun {
        transition: transform 0.25s cubic-bezier(0.2, 0.6, 0.3, 1),
          width 0.25s cubic-bezier(0.2, 0.6, 0.3, 1);
      }

      .top-bun {
        transform: rotateZ(-45deg);
        transform-origin: top right;
        transform-style: preserve-3d;
      }

      .patty {
        transform: scale(0);
      }

      .bottom-bun {
        transform: rotateZ(45deg);
        transform-origin: bottom right;
        transform-style: preserve-3d;
      }
    }
  }
}
</style>
