var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

gulp.task('build', function() {
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});
