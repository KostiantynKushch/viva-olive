module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/viva-olive/'
		: '/',
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/scss/_variables.scss";`
			}
		}
	}

}