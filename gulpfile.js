var gulp = require('gulp');

var uglify    = require('gulp-uglify'),
    rename    = require('gulp-rename'),
    ts        = require('gulp-typescript');

gulp.task('default', function() {
  var tsStreams = gulp.src('V.ts').pipe(
    ts({
      declarationFiles: true,
      noExternalResolve: false,
      target: 'ES5'
    })
  );
  //tsStreams.dts.pipe(gulp.dest('.'))
  tsStreams.js
    .pipe(gulp.dest('.'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('.'));
});
