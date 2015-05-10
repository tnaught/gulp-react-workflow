var gulp       = require('gulp');
var react      = require('gulp-react');
var browserify = require('gulp-browserify');
var compass    = require('gulp-compass');
var uglify     = require('gulp-uglify');
var minifycss  = require('gulp-minify-css');
var gutil      = require('gulp-util');

gulp.task('build_js', function() {
  gulp.src('./src/jsx/**/*.jsx')
    .pipe(react().on('error', gutil.log))    
    .pipe(browserify({ transform: ['reactify'], extensions: ['.jsx'] }).on('error', gutil.log))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js/'));
});

gulp.task('build_css', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(compass({css: './dest/css', sass: './src/sass', image: './dest/image', style: 'compact', comments: false }).on('error', gutil.log))
    .pipe(minifycss())
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('build_image', function () {
  gulp.src('./src/image/**/*').pipe(gulp.dest('./dest/image/'));
});

gulp.task('watch', ['build_js', 'build_css', 'build_image'], function() {
  gulp.watch(['./src/jsx/**/*.jsx'],   ['build_js']);
  gulp.watch(['./src/sass/**/*.scss'], ['build_css']);
  gulp.watch(['./src/image/**/*'],     ['build_image']);
});

gulp.task('default', ['watch', 'build_js', 'build_css', 'build_image']);