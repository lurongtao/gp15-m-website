// commonjs
const { src, dest, series, parallel } = require('gulp')
const connect = require('gulp-connect')
const sass = require('gulp-sass')

// copyhtml
function copyhtml() {
  return src('./src/*.html')
    .pipe(dest('./dev/'))
}

// 启动server
function gulpServer() {
  return connect.server({
    name: 'Dist App',
    root: './dev',
    port: 8000,
    livereload: true
  })
}

// 编译sass
function packSCSS() {
  return src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dev/styles/'))
}

exports.default = series(parallel(copyhtml, packSCSS), gulpServer)

