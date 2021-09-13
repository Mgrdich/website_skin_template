const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const browserSync = require('browser-sync');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const sass = gulpSass(dartSass);


/**
 * @description compile scss into css
 * TASKS
 * 1. where is my scss
 * 2. pass that file into sass compiler
 * 3. where do i save it
 * 4. stream all browsers
 * */
function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./main'))
        .pipe(browserSync.stream())
}

/**
 * @description compile scss into css
 * TASKS
 * 1. where is my scss
 * 2. pass that file into js uglifier compiler
 * 3. where do i save it
 * 4. stream all browsers
 * */
function js() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./main'))
        .pipe(browserSync.stream())
}

/**
 * @description compile scss into css
 * TASKS
 * 1. where is my libs
 * 2. compile them into a single file
 * */
function jsLibs() {
    let libs = [
        "jquery.min.js",
        "bootstrap.min.js",
        "superfish.js",
        "jquery.easing.js",
        "wow.js",
        "jquery.isotope.min.js",
        "owl.carousel.min.js",
        "jquery.magnific-popup.js",
        "jflickrfeed.min.js",
        "jquery.fitvids.js",
        "jquery.fractionslider.min.js",
        "jquery-ui-1.10.4.custom.min.js",
        "SmoothScroll.js"
    ];

    let dir = "./libs/js/";

    libs = libs.map(function (item){
       item = dir + item;
       return item;
    });

    return gulp.src(...libs)
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./main/'))
        .pipe(browserSync.stream())
}

/**
 * @description watch for changes and run tasks
 * TASKS
 * 1. wathces both the scss and html files for changes
 * */
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js', js);
}

exports.style = style;
exports.watch = watch;
exports.js = js;
exports.jsLibs = jsLibs;