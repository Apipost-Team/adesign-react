const gulp = require('gulp');
const gulpLess = require('gulp-less');
const lessPluginNpmImport = require('less-plugin-npm-import');
const lessAutoPreFix = require('less-plugin-autoprefix');
const cssMinify = require('gulp-css-minify');
const concat = require('gulp-concat');
const lessFunctions = require('less-plugin-functions');

const npmImport = new lessPluginNpmImport({ prefix: '~' });
const autoprefix = new lessAutoPreFix();
const lessfn = new lessFunctions();

function defaultTask(cb) {
  gulp
    .src('src/style/default.less', { allowEmpty: true })
    .pipe(concat('default.css'))
    .pipe(gulpLess())
    .pipe(gulp.dest('dist/'));
  cb();
}

// function defaultTask(cb) {
//   gulp
//     .src('src/Button/style/index.less', { allowEmpty: true })
//     .pipe(concat('style.css'))
//     .pipe(gulpLess())
//     // .pipe(cssMinify())
//     .pipe(gulp.dest('dist/'));
//   cb();
// }

exports.default = defaultTask;
