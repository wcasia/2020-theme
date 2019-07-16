module.exports = {
	options: {
		banner: '/*! <%= pkg.title %> - v<%= pkg.version %>\n' +
		' * <%=pkg.homepage %>\n' +
		' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
		' * Licensed MIT' +
		' */\n'
	},
	minify: {
		files: [
			// Main theme
			{
				expand: true,
				cwd: 'css/dest/',
				src: ['wcasia-2020.css'],
				dest: 'css/dest/',
				ext: '.min.css'
			}
		]
	}
};
