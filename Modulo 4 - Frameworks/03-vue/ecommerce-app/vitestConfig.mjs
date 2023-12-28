import {
  defineConfigWithNuxtEnv
} from 'vitest-environment-nuxt/config'
import vue from "@vitejs/plugin-vue";

export default defineConfigWithNuxtEnv({
  test: {
    globals: true,
    plugins: [vue()]
  },
})