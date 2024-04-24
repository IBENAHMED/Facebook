let gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass'));


gulp.task('WS', async () => {
    const prefix = await import('gulp-autoprefixer').then(module => module.default);

    return gulp.src(['src/scss/**/*.scss', 'src/scss/**/**/*.scss'])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(prefix('last 2 version'))
        // .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
});