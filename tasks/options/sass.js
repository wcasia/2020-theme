const sass = require('node-sass');

module.exports = {
	all: {
		options: {
			implementation: sass,
			precision: 2,
			sourceMap: true
		},
		files: {
			'css/dest/wcasia-2020.css': 'css/sass/stylesheet.scss',
		}
	}
};
