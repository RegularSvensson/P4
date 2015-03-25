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
 
gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});