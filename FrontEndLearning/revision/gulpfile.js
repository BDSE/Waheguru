var gulp = require("gulp");
var liveReloading = require("gulp-livereload");
var HTML_PATH = "./public/**/*.html";

gulp.task("html", function(){
    console.log("html task launched");
    return gulp.src(HTML_PATH).pipe(liveReloading());
});

gulp.task("default", ["html"], function(){
    
    console.log("deafult task launched");
    
});

gulp.task('watch', ["default"], function(){
    console.log("gul watch started ");
    require("./server.js");
    liveReloading.listen();
    gulp.watch(HTML_PATH, ["html"]);
    
})
