const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const uglifycss = require('gulp-uglifycss');

const terser = require('gulp-terser');

function es() {
  return gulp.src('./js/**/*.js').pipe(terser()).pipe(gulp.dest('./dist/'));
}

exports.default = es;

function style() {
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    browser: 'google chrome',
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

async function mincss() {
  gulp
    .src('./css/**/*.css')
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(gulp.dest('./dist/'));
}

exports.style = style;
exports.watch = watch;
exports.mincss = mincss;
