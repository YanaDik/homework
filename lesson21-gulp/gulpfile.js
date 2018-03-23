var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rigger = require('gulp-rigger');

//task for html
gulp.task('html', function() {
	return gulp.src('./src/*.html').pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest('./build'));
});

//task for sass
gulp.task('css', function() {
	return gulp.src('./src/css/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./build/css'));
});

/*Task for JS*/
gulp.task('js', () => {
	gulp
		.src([
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/slick-carousel/slick/slick.js',
			'./src/js/slick.js',
			'./src/js/main.js'
			
		])
		.pipe(concat('main.js'))
		.pipe(
			minify({
				ext: {
					min: '.js'
				},
				compress: true,
				noSource: true
			})
		)
		.pipe(gulp.dest('./build/js'));
	// .pipe(reload({ stream: true }));
});


// for html
gulp.task('rightml', function() {
	gulp.src('src/**/*.html').pipe(rigger()).pipe(gulp.dest('build/'));
});

/* Task Build */
gulp.task('build', [ 'html', 'css', 'js', 'rightml' ]);
/* Task Watch */
gulp.task('watch', () => {
	watch('./src/*.html', () => gulp.run('html'));
	watch('./src/css/**/*.scss', () => gulp.run('css'));
	watch('./src/js/main.js', () => gulp.run('js'));
});
/* default task */
gulp.task('default', [ 'build', 'watch' ]);
