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
      meta: [{ name: "description", content: "Experienced UI/UX designer with over a year of experience, I specialize in creating user-friendly interfaces for digital products in Indonesia and across the ASEAN region. Whether you need a reliable user interface designer in Indonesia or a user experience designer with a deep understanding of the ASEAN market, I can help. With in-depth knowledge of the latest design trends and user needs in this region, I can develop effective and efficient digital products that excel in design and functionality. As an expert in user-centered design, I am committed to creating user interfaces that are not only visually appealing but also easy to use. If you are looking for a skilled and experienced UI/UX designer in Indonesia or the ASEAN region, I am here to help." }],
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
