var gulp = require('gulp');
var uglify = require('gulp-uglify');
var liveReload = require('gulp-livereload');
var gulpConcat = require('gulp-concat');
var cssMinify = require('gulp-minify-css');
var autoPrefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber'); // incase of error plumber will stop furthe execution of tha task and keep the gulp server runnig,error can be outputed as well
//with source maps we can see individual files instead of unified ones
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var babel = require('gulp-babel'); //not working yet
var size = require('gulp-size');
var del = require('del');
var zip = require('gulp-zip');

// Less plugins
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var lessAutoprefix = new LessAutoprefix({
	browsers: ['last 2 versions']
});

//Image min plugins
//var jpegoptim = require('imagemin-jpegoptim');
//var pngquant = require('imagemin-pngquant');
//var optipng = require('imagemin-optipng');
//var svgo = require('imagemin-svgo');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

//File path
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';
var HTML_PATH = 'public/**/*.html';
var IMAGE_PATH = 'public/images/**/*.{png,jpeg,jpg,svg,gif}';

var testfn = function () {
	console.log('used in default');
}

//HTML
gulp.task('html', function () {
	return gulp.src(HTML_PATH).pipe(liveReload());
});

//Styles
//gulp.task('styles', function () {
//
//	console.log("gulp styles started...");
//	return gulp.src(['public/css/reset.css', CSS_PATH]) //we want reset.css on the top,this way order can be modified
//		.pipe(plumber(function (err) {
//			console.log("error check kro paji");
//			console.log(err);
//			this.emit('end');
//		}))
//		.pipe(sourcemaps.init())
//		.pipe(gulpConcat('combinedStyles.css'))
//		.pipe(autoPrefixer({
//			//target specific browsers here
//		}))
//		.pipe(cssMinify())
//		.pipe(sourcemaps.write())
//		.pipe(gulp.dest('public/distribution'))
//		.pipe(liveReload());
//
//});

//Sass Styles
gulp.task('styles', function () {

	console.log("gulp sass styles started...");
	return gulp.src('public/scss/main.scss')
		.pipe(plumber(function (err) {
			console.log("error check kro paji");
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(autoPrefixer({
			//target specific browsers here
		}))
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/distribution'))
		.pipe(liveReload());

});

// Styles for Less
//gulp.task('styles', function () {
//
//	console.log("gulp sass styles started...");
//	return gulp.src('public/less/main.less')
//		.pipe(plumber(function (err) {
//			console.log("error check kro paji");
//			console.log(err);
//			this.emit('end');
//		}))
//		.pipe(sourcemaps.init())
//		.pipe(less({
//			plugins: [lessAutoprefix]
//		}))
//		.pipe(cssMinify())
//		.pipe(sourcemaps.write())
//		.pipe(gulp.dest('public/distribution'))
//		.pipe(liveReload());
//
//});

//Scripts
gulp.task('scripts', function () {
	console.log("scripts started amar...");

	return gulp.src(SCRIPTS_PATH)
		.pipe(plumber(function (err) {
			console.log("Javascript tutt gi je");
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		//		.pipe(babel({
		//			preset: ['es2015']
		//		}))
		.pipe(uglify())
		.pipe(gulpConcat('combinedJS.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/distribution'))
		.pipe(liveReload());

});

//Images
gulp.task('images', function () {
	//	return gulp.src(IMAGE_PATH)
	//		.pipe(pngquant({
	//			quality: '65-80',
	//			speed: 4
	//		})())
	//		.pipe(optipng({
	//			optimizationLevel: 3
	//		})())
	//		.pipe(jpegoptim({
	//         max: 70
	//        })())
	//		.pipe(svgo()())
	//		.pipe(gulp.dest('public/distribution/images'));
	return gulp.src(IMAGE_PATH)
		.pipe(size({
			title: 'uncompressed'
		}))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(size({
			title: 'compressed'
		}))
		.pipe(gulp.dest('public/distribution/images'));
});

//Clean
gulp.task('clean', function () {
	return del.sync(['public/distribution'])
});

//create a zip file
gulp.task('export', ['default'], function () {
	console.log('zipping.....');
	return gulp.src('public/**/*')
		.pipe(zip('public.zip'))
		.pipe(gulp.dest('./'));
});

//default
gulp.task('default', ['clean', 'images', 'html', 'styles', 'scripts'], function () {
	console.log('Running default task...');
});

//watch
gulp.task('watch', ['default'], function () {
	console.log("gulp watch started...");
	require('./server.js');
	liveReload.listen();
	//scripts
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	//styles
	//gulp.watch(CSS_PATH, ['styles']);
	//Sass
	gulp.watch('public/scss/**/*.scss', ['styles']);
	//Less
	//gulp.watch('public/less/**/*.less', ['styles']);
	gulp.watch(HTML_PATH, ['html']);

});