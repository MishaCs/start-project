const gulp = require('gulp')

module.exports = function exp(done) {
    let buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('build'));

    let BuildCss = gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('build/css'));

    let BuildJs = gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'));
        
    let BuildFonts = gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));

    let BuildImg = gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('build/img'));  

    done();
}