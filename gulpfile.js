var gulp = require('gulp');

gulp.task('default', function(){
	console.log('Hello World');
});

var uglify = require('gulp-uglify');
 
gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});