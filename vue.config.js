module.exports = {
	configureWebpack: {
		output: {
			chunkFilename: "[name].[chunkhash].js",
		},
	},
};
