var gulp = require('gulp');

var liveReload = require('gulp-livereload');


var SCRIPTS_PATH = 'public/js/design.js';
var HTML_PATH = 'public/index.html';


//HTML
gulp.task('html', function () {
    return gulp.src(HTML_PATH).pipe(liveReload());
});


//Scripts
gulp.task('scripts', function () {
    console.log("scripts started amar...");

    return gulp.src(SCRIPTS_PATH)
        .pipe(liveReload());

});

//watch
gulp.task('watch', function () {
    console.log("gulp watch started...");
    require('./server.js');
    liveReload.listen();
    //scripts
    gulp.watch(SCRIPTS_PATH, ['scripts']);

    gulp.watch(HTML_PATH, ['html']);

});
