<template>
  <button type="button" class="button" @click="toggleActive">
    <div :class="['burger', active ? 'active' : '']">
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
  data() {
    return {
      active: false,
    }
  },
  emits: {
    toggle(payload: { active: boolean }) {
      return payload.active
    },
  },
  mounted() {
    console.log('Burger ...', this)
  },
  methods: {
    toggleActive(): void {
      this.active = !this.active
      this.$emit('toggle', { active: this.active })
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  padding: 0 var(--padding-sm);

  .burger {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: var(--size-icon-m);
    height: var(--size-icon-m);

    .top-bun,
    .patty,
    .bottom-bun {
      // position: absolute;
      width: 100%;
      height: 1px;
      background-color: var(--color-white);
      transition: transform 0.25s cubic-bezier(0.2, 0.6, 0.3, 1),
        width 0.25s cubic-bezier(0.2, 0.6, 0.3, 1),
        background-color var(--animation-duration-m);
    }

    &.active {
      .top-bun,
      .patty,
      .bottom-bun {
        background-color: var(--color-black);
        transition: transform 0.25s cubic-bezier(0.2, 0.6, 0.3, 1),
          width 0.25s cubic-bezier(0.2, 0.6, 0.3, 1),
          background-color var(--animation-duration-xs);
      }

      .top-bun {
        transform: rotateZ(45deg);
        transform-style: preserve-3d;
        -webkit-transform-origin-x: left;
        -webkit-transform-origin-y: top;
      }

      .patty {
        transform: scale(0);
      }

      .bottom-bun {
        transform: rotateZ(-45deg);
        transform-style: preserve-3d;
        -webkit-transform-origin-x: left;
        -webkit-transform-origin-y: top;
      }
    }
  }
}
</style>
