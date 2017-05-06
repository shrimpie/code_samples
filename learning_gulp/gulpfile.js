var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('process-styles', function() {
    sass('src/styles/main.scss', {
            style: 'expanded'
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('dest/styles/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minify())
        .pipe(gulp.dest('dest/styles/'))
});

gulp.task('process-scripts', function() {
    return gulp.src('src/scripts/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dest/scripts/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dest/scripts/'))
})


gulp.task('watch', function() {
    gulp.watch('src/scripts/*.js', ['process-scripts'])
})

gulp.task('default', function() {
    console.log('I have configured a gulpfile');
});