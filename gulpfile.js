var gulp = require('gulp');

gulp.task('default', function(){
	console.log('Hello World');
});

var rename = require("gulp-rename");

gulp.src("./src/**/hello.txt")
    .pipe(rename(function (path) {
        path.dirname += "/ciao";
        path.basename += "-goodbye";
        path.extname = ".md"
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md 


var uglify = require('gulp-uglify');
 
gulp.task('compressJS', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});


var cssmin = require('gulp-cssmin');
 
gulp.task('compressCSS', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});