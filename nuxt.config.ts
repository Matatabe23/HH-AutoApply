export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src/',
    nitro: {
        preset: 'static'
    },
    app: {
        baseURL: './'
    },
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
    plugins: [
        '@/shared/plugins/vuetify',
    ],
    css: ['@/app/style/index.scss'],
})