<template>
  <MainPage class="page"> </MainPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainPage from '@/components/pages/MainPage.vue'

export default defineComponent({
  name: 'What we do',
  components: { MainPage },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';

.page {
  min-height: 100vh;
  background-color: var(--color-white);
  background-image: url(./../assets/bg/bg-me-in-paris.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 40%;
  background-attachment: scroll;
}
</style>
