<template>
  <header
    :class="[
      'header flex justify-between items-center',
      showNavMenu ? 'active' : '',
    ]"
  >
    <h1 class="header__logo"><router-link to="/">estelle</router-link></h1>
    <BurgerMenuButton
      :label="'Menu List'"
      :active="showNavMenu"
      @toggle="toggleNavMenu"
    />
    <nav :class="['flex justify-center items-start', 'nav']" aria-label="Main">
      <ul :class="['w-full flex flex-col justify-start items-stretch']">
        <!-- portfoli nav items -->
        <li v-for="(item, index) in menuList" :key="index" class="nav__item"
          ><a
            v-if="showNavMenu"
            :style="getAnimationDelayByIndex(index)"
            @click="() => handleNavItemClick(item)"
            >{{ item.label }}</a
          ></li
        >
      </ul>
    </nav>

    <!-- links to outside -->
    <nav
      v-if="showNavMenu"
      class="sns-links-wrapper"
      :style="getAnimationDelayByIndex(menuList.length + 1)"
    >
      <ul :class="['flex justify-between items-center']">
        <li
          v-for="(item, index) in snsList"
          :key="`sns-link-${index + 1}`"
          :class="['flex-none', 'sns-links-item']"
        >
          <a
            class="flex justify-center items-center"
            :href="item.href"
            :title="item.label"
            target="_blank"
          >
            <img :src="item.iconSrc" :alt="item.label" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BurgerMenuButton from '@/components/buttons/BurgerMenuButton.vue'
import styles from '@/styles/modules.scss'

interface NavItem {
  label: string
  to: string
}

// interface SNSLinkItem {
//   label: string
//   href: string
//   iconSrc: string
// }

export default defineComponent({
  components: { BurgerMenuButton },
  data() {
    return {
      showNavMenu: false,
      menuList: [
        {
          label: 'Home',
          to: '/',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Works',
          to: '/works',
        },
      ],
      snsList: [
        {
          label: 'Send email to Yujin',
          href: 'mailto:estele.choi@gmail.com',
          iconSrc: require('@/assets/icons/icon-sns-gmail-white.svg'),
        },
        {
          label: 'Instagram profile',
          href: 'https://www.instagram.com/sunkissedester/',
          iconSrc: require('@/assets/icons/icon-sns-instagram-white.svg'),
        },
        {
          label: 'Linkedin profile',
          href: 'https://www.linkedin.com/in/yujin-choi-460a931b2/',
          iconSrc: require('@/assets/icons/icon-sns-linkedin-white.svg'),
        },
        {
          label: 'Medium profile',
          href: 'https://medium.com/@estele.choi',
          iconSrc: require('@/assets/icons/icon-sns-medium-white.svg'),
        },
      ],
    }
  },
  methods: {
    toggleNavMenu(val: { active: boolean }) {
      this.showNavMenu = val.active
    },
    handleNavItemClick(item: NavItem) {
      const to = item.to
      this.toggleNavMenu({ active: false })
      this.$router.push({ path: to })
    },
    getAnimationDelayByIndex(index: number): string {
      const delay: string = styles['global-animation-duration-xs']
      const delayNumber = Number(delay.split('s')[0])
      return `animation-delay: ${delayNumber * (index + 1)}s`
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  width: 100vw;
  height: var(--size-header-h);
  z-index: 9999;
  color: var(--color-white);
  background-color: transparent;
  backdrop-filter: blur(6px) opacity(1);
  border-bottom: 1px solid var(--color-white);
  padding: 0 var(--size-horz2);
  transition: all $animation-duration-xs;

  .header__logo {
    @extend %typography-logo;
  }

  .nav {
    position: absolute;
    top: var(--size-header-h);
    left: 0;
    width: 100vw;
    height: calc(100vh - var(--size-header-h));
    background-color: transparent;
    -webkit-backdrop-filter: blur(6px) opacity(1);
    backdrop-filter: blur(6px) opacity(1);
    opacity: 0;
    z-index: -1;
    padding: var(--padding-page-v-top) var(--padding-page-h-m)
      calc((2 * var(--padding-page-v-top)) + var(--size-9));
    overflow: hidden auto;
    pointer-events: none;
    transition: all $animation-duration-xs;

    .nav__item {
      @extend %typography-menu-item;
      text-align: right;

      > a {
        @include animation-fade-in-up(
          $animation-duration-s,
          $animation-duration-xs
        );

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .sns-links-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--padding-page-v-top) var(--padding-page-h-m);
    @include animation-fade-in-up(
      $animation-duration-s,
      $animation-duration-xs
    );

    .sns-links-item {
      width: var(--size-9);
      height: var(--size-9);
      padding: var(--size-1);

      > a {
        width: 100%;
        height: 100%;

        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  &.active {
    background-color: var(--color-primary-light-o);
    backdrop-filter: none;

    .nav {
      opacity: 1;
      z-index: 0;
      pointer-events: initial;
    }
  }
}
</style>
