var gulp       = require('gulp');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require("vinyl-source-stream");
var through    = require('through2');
var uglify     = require('gulp-uglify');
var compass    = require('gulp-compass');
var minifycss  = require('gulp-minify-css');
var gutil      = require('gulp-util');
var streamify  = require('gulp-streamify');

gulp.task('build_js', function() {
  var browserified = function() {
      return through.obj(function(chunk, enc, callback) {
          if(chunk.isBuffer()) {
              var b = browserify(chunk.path, {extensions: ['.jsx', '.js']});
              b.transform(reactify);
              chunk.contents = b.bundle();
              chunk.path = chunk.path.replace('.jsx', '.js');
              this.push(chunk);
          }
          callback();
      });
  };
  return gulp.src(['./src/jsx/**/*.jsx'])
      .pipe(browserified())
      // .pipe(streamify(uglify()))
      .pipe(gulp.dest('./dest/js'));
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