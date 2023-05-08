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
      title: "Adnan F. Muhammad",
      meta: [{ name: "description", content: "Website Personal Branding" }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
});
