/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss' {
  export default {
    'global-animation-duration-xs': string,
    'global-animation-duration-s': string,
    'global-animation-duration-m': string,
    'global-animation-duration-l': string
  }
}
