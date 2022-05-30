const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const purgecss = require('gulp-purgecss')

//compile, prefix, min scss and purge unused scss
function compilescss() {
    return src('scss/**/*.scss')
        .pipe(sass())   
        .pipe(prefix())
        .pipe(minify())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('dist/css'))
};

//watchtask
function watchTask(){
    watch('scss/**/*.scss', compilescss);
}

// Default Gulp task 
exports.default = series(
    compilescss,
    watchTask
);