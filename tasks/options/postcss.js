module.exports = {
	options: {
		processors: [
			require('autoprefixer')({browsers: 'last 2 versions'})
		]
	},
	dist: {
		src: 'css/dest/wcasia-2020.css'
	}
};
