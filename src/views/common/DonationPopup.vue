<template>
  <BottomPopup
    :active="active"
    :aria-labelledby="'dialog-donation-popup-title'"
    :aria-describedby="'dialog-donation-popup-p'"
  >
    <h3
      id="dialog-donation-popup-title"
      :class="['text-center', 'donation-title']"
      >Would like to donate to Estelle?</h3
    >
    <p id="dialog-donation-popup-p" :class="['text-center mb-8', 'donation-p']"
      >Click and copy Estelle's address.</p
    >
    <ul class="flex justify-center items-center">
      <li v-for="(item, index) in coinList" :key="index" class="coin-item">
        <button
          type="button"
          :class="[
            'flex flex-col justify-center items-stretch',
            'coin-item__button',
          ]"
          :aria-label="`Copy Estelle's ${item.name} address.`"
          @click="() => handleCoinClick(item)"
        >
          <img
            :src="item.iconSrc"
            :alt="`${item.name} icon`"
            :class="[
              'flex justify-center items-center mb-1',
              'coin-item__icon',
            ]"
          />
          <span class="coin-item__label" aria-hidden="true">{{
            item.label
          }}</span>
        </button>
      </li>
    </ul>
  </BottomPopup>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import BottomPopup from '@/components/popups/BottomPopup.vue'

interface CoinItem {
  label: string
  name: string
  address: string
  iconSrc: string
}

export default defineComponent({
  components: { BottomPopup },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      coinList: [
        {
          label: 'BIT',
          name: 'Bitcoin',
          address: '',
          iconSrc: require('@/assets/icons/icon-currency-bit.svg'),
        },
        {
          label: 'ETH',
          name: 'Etherium',
          address: '',
          iconSrc: require('@/assets/icons/icon-currency-eth.svg'),
        },
        {
          label: 'BNB',
          name: 'Binance Coin',
          address: '',
          iconSrc: require('@/assets/icons/icon-currency-bnb.svg'),
        },
        {
          label: 'MANA',
          name: 'MANA',
          address: '',
          iconSrc: require('@/assets/icons/icon-currency-mana.svg'),
        },
        {
          label: 'BAT',
          name: 'Basic Attention Token',
          address: '',
          iconSrc: require('@/assets/icons/icon-currency-bat.svg'),
        },
      ],
    }
  },
  methods: {
    handleCoinClick(item: CoinItem) {
      console.log('handleCoinClick', item)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';

.donation-title {
  @extend %typography-en-h3;
}

.donation-p {
  @extend %typography-en-h3-subtitle;
}

.coin-item {
  &:not(:last-child) {
    margin-right: var(--size-horz2);
  }
  .coin-item__button {
    padding: 0 var(--size-horz1);

    .coin-item__icon {
      width: var(--size-icon-s-w);
      height: var(--size-icon-s-h);
      object-fit: contain;
    }
    .coin-item__label {
      @extend %typography-icon-label;
    }
  }
}
</style>
