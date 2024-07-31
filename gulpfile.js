const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

/* Função para comprimmir as imagens usando o gulp-imagemin@7.1.0 */
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}
/* Função para comprimir e mascarar os codigos .Js com o gulp-uglify e o gulp-obfuscate */ 
function comprimaJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        
        .pipe(gulp.dest('./build/scripts'))
}
/* Função para transformar os arquivos scss em css e criar os mapas com gulp-sass/sass e gulp-sourcemaps */
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

/* Executa as funçoes sempre que tiver uma alteração em suas respectivas pastas apos o uso do comando "npm run gulp" */
exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(comprimaJavaScript))
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(comprimeImagens))
}
