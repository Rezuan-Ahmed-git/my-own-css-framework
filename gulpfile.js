const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('myframework/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['myframework/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
