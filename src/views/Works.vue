<template>
  <MainPage class="page">
    <button @click="click">Popup</button>
    <DonationPopup :active="showDonationPopup" />
  </MainPage>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import MainPage from '@/components/pages/MainPage.vue'
import DonationPopup from '@/views/common/DonationPopup.vue'

export default defineComponent({
  components: { MainPage, DonationPopup },
  data() {
    return {
      showDonationPopup: false,
    }
  },
  mounted() {
    this.click()
  },
  methods: {
    click() {
      this.showDonationPopup = !this.showDonationPopup
    },
  },
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
