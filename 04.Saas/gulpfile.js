const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('t01_interpolation/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./t01_interpolation/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));