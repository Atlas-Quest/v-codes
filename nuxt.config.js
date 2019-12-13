module.exports = {
	mode: 'spa',
	/*
   ** Headers of the page
   */
	generate: {
		fallback: true
	},
	head: {
		title: 'Vanessa Dohnt | Full Stack Web Developer',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Personal Portfolio'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/Logo.png' }, { href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css', rel: 'stylesheet' }]
	},
	/*
   ** Customize the progress-bar color
   */
	loading: { color: '#fff' },
	/*
   ** Global CSS
   */
	css: [],
	/*
   ** Plugins to load before mounting the App
   */
	router: {
		middleware: 'menu'
	},
	plugins: ['~/plugins/vue-awesome-swiper'],
	/*
   ** Nuxt.js dev-modules
   */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
	/*
   ** Nuxt.js modules
   */
	modules: [],
	/*
   ** Build configuration
   */
	build: {
		/*
     ** You can extend webpack config here
     */
		extend(config, ctx) {}
	}
}