import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Générateur de QR Code",
    },
  },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  modules: ["nuxt-qrcode", "@nuxtjs/google-fonts"],
});
