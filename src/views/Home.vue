<template>
  <MainPage class="page">
    <div class="bg-video-wrapper">
      <video
        class="bg-video"
        loop
        playsinline
        autoplay
        muted
        poster="@/assets/bg/bg-bar-imun-video-poster.png"
        width="375"
      >
        <source src="@/assets/bg/bg-bar-imun.mp4" type="video/mp4" />
        <source src="@/assets/bg/bg-bar-imun.webm" type="video/webm" />
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can <a href="@/assets/bg/bg-bar-imun.mp4">download it</a>
        and watch it with your favorite video player!
      </video>
      <!-- src="@/assets/bg/bg-bar-imun.mp4" -->
      <!-- controls -->
      <!-- preload="auto" -->
    </div>
  </MainPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainPage from '@/components/pages/MainPage.vue'

export default defineComponent({
  name: 'home',
  components: { MainPage },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';

.page {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-white);
  // background-image: url(./../assets/bg/bg-me-in-paris.jpeg);
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position-x: 40%;
  // background-attachment: scroll;
  pointer-events: none;
}

.bg-video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 667px;
  width: 100vw;
  overflow: hidden;

  .bg-video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
  }
}
</style>
