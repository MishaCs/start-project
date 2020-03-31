const gulp = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')
const rename = require("gulp-rename");

module.exports = function script() {
  return gulp.src('src/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/js'))
}

