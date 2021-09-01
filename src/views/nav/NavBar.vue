<template>
  <nav
    :class="[
      'navbar flex justify-between items-center',
      showNavMenu ? 'active' : '',
    ]"
  >
    <div class="navbar__logo">estelle</div>
    <BurgerMenuButton @toggle="toggleNavMenu" />
    <ul :class="['flex flex-col justify-start items-center', 'navbar-menu']">
      <li class="navbar-menu__item"><router-link to="/">Home</router-link></li>
      <li class="navbar-menu__item"
        ><router-link to="/works">Works</router-link></li
      >
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BurgerMenuButton from '@/components/buttons/BurgerMenuButton.vue'

export default defineComponent({
  components: { BurgerMenuButton },
  data() {
    return {
      showNavMenu: false,
    }
  },
  methods: {
    toggleNavMenu(val: { active: boolean }) {
      console.log('toggleNavMenu', val)
      this.showNavMenu = val.active
      // ..
    },
  },
})
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  width: 100vw;
  height: var(--size-navbar-h);
  z-index: 9999;
  color: var(--color-white);
  background-color: transparent;
  backdrop-filter: blur(6px) opacity(1);
  border-bottom: 1px solid var(--color-white);
  padding: var(--padding-nav-v) var(--padding-nav-h);
  // transition: all 0.15s;

  .navbar__logo {
    font-size: 34px;
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-narrow);
  }

  .navbar-menu {
    position: fixed;
    top: var(--size-navbar-h);
    left: 0;
    width: 100vw;
    height: calc(100vh - var(--size-navbar-h));
    background-color: var(--color-white);
    opacity: 0;
    z-index: -1;
    transition: all var(--animation-duration-s);

    .navbar-menu__item {
      color: var(--color-black);
    }
  }

  &.active {
    color: var(--color-black);
    background-color: var(--color-white);
    backdrop-filter: none;

    .navbar-menu {
      opacity: 1;
      z-index: 0;
    }
  }
}
</style>
