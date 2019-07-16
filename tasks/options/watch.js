module.exports = {
	livereload: {
		files: ['css/dest/*.css'],
		options: {
			livereload: true
		}
	},
	css: {
		files: ['css/sass/*.scss'],
		tasks: ['css'],
		options: {
			debounceDelay: 500
		}
	}
};
