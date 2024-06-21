export default defineNuxtConfig({
  target: "static",
  router: {
    base: "/PageWidthAPI-01/",
  },
  devtools: { enabled: true },
  css: [`@/assets/styles/global.scss`],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/_color.scss" as *;
            @use "@/assets/styles/_fonts.scss" as *;
          `,
        },
      },
    },
  },
  app: {
    head: {
      title: "QTIM",
      meta: [{ name: "description", content: "QTIM test work" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
