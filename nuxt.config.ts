// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true }, // Pouze client-side rendering
  ssr: false, // Add a comma here
  css: ["@provetcloud/css"],
  build: {
    transpile: ["@provetcloud/web-components"],
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          // Povolit všechny custom elements s pomlčkou (např. <provet-button>)
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    },
  },
})
