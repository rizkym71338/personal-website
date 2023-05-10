// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Adnan F. Muhammad, Creative UI/UX Designer",
      meta: [{ name: "description", content: "UI/UX designer with expertise in user-friendly interfaces for digital products. Focused on user-centered design, creates efficient and visually appealing products. Available in Indonesia and across ASEAN region." }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  }
});
