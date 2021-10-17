<template>
  <div
    v-if="show"
    :class="['popup-wrapper', dismissed ? 'dismissed' : '']"
    @click="dismissPopup"
  >
    <div
      class="popup"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="ariaLabelledby"
      :aria-describedby="ariaDescribedby"
      :aria-hidden="!show || dismissed"
    >
      <div ref="document" role="document">
        <slot />
      </div>

      <button
        ref="closeBtn"
        type="button"
        class="popup__close-btn"
        aria-label="No thanks, close the dialog."
      ></button>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue'
import styles from '@/styles/modules.scss'

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    ariaLabelledby: {
      type: String,
      default: '',
    },
    ariaDescribedby: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
      dismissed: false,
    }
  },
  watch: {
    active(newVal: boolean) {
      newVal ? this.showPopup() : this.dismissPopup()
    },
  },
  emits: {
    dismissed() {
      return true
    },
  },
  mounted() {
    this.addKeyupListener()
  },
  unmounted() {
    this.removeKeyupListener()
  },
  methods: {
    addKeyupListener() {
      window.addEventListener('keyup', this.keyupListenerCallback)
    },
    removeKeyupListener() {
      window.removeEventListener('keyup', this.keyupListenerCallback)
    },
    keyupListenerCallback(evt: KeyboardEvent) {
      console.log(evt)
      const keyCode: string = evt.code

      switch (keyCode) {
      case 'Escape':
        this.dismissPopup()
        break
      case 'Tab':
        this.resetKeyFocus(evt)
        break
      }
    },
    resetKeyFocus(evt: KeyboardEvent) {
      const closeBtn = this.$refs.closeBtn as HTMLElement
      if (evt.target === closeBtn && !evt.shiftKey) {
        evt.preventDefault()
        const el = this.$refs.document as HTMLElement
        el.focus()
      }
    },
    showPopup() {
      this.show = true
      const el = this.$refs.document as HTMLElement
      if (el) el.focus()
    },
    dismissPopup() {
      this.dismissed = true

      const duration1 =
        Number(styles['global-animation-duration-s'].split('s')[0]) * 1000
      const duration2 =
        Number(styles['global-animation-duration-xs'].split('s')[0]) * 1000
      const totalDuration = duration1 + duration2

      window.setTimeout(() => {
        this.$emit('dismissed')
        this.dismissed = false
        this.show = false
      }, totalDuration)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/modules.scss';

.popup-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background: var(--color-black-030);
  transition: opacity $animation-duration-s $animation-duration-xs;

  .popup {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: var(--color-white);
    padding: var(--padding-page-v-top) var(--padding-page-h-s);
    border-top-left-radius: var(--radius-l);
    border-top-right-radius: var(--radius-l);
    box-shadow: $box-shadow-base;
    animation: popup-from-bottom $animation-duration-s $animation-duration-xs
      both;
  }

  &.dismissed {
    opacity: 0;

    .popup {
      animation: popup-dismissed $animation-duration-s both;
    }
  }
}

@keyframes popup-from-bottom {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes popup-dismissed {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
}
</style>
