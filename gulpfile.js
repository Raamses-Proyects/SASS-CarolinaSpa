const { src, dest, watch, series } = require('gulp');

// CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');

// Imagenes
const squoosh = require('gulp-libsquoosh');

function css(done) {
    src('src/sass/app.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss( [ autoprefixer(), cssnano() ] ) )
        .pipe( sourcemaps.write('.') )
        .pipe( dest('build/css') )
        done();
}

function imagenesmin() {
    return src('src/img/**/*')
        .pipe( squoosh() )
        .pipe( dest('build/img') )
}

function versionesWebpAvif() {
    return src('src/img/**/*.{png,jpg}')
        .pipe( squoosh({
            webp: {},
            avif: {}
        }))
        .pipe( dest('build/img') )
}

function dev() {
    watch('src/sass/**/*.scss', css);
    // watch('src/img/**/*', imagenesmin);
}

exports.css = css;
exports.imagenesmin = imagenesmin;
exports.versionesWebpAvif = versionesWebpAvif;
exports.dev = dev;
exports.default = series( imagenesmin, versionesWebpAvif, css, dev );


