const gulp = require('gulp');
const gulpLess = require('gulp-less');
const lessPluginNpmImport = require('less-plugin-npm-import');
const lessAutoPreFix = require('less-plugin-autoprefix');
const cssMinify = require('gulp-css-minify');
const concat = require('gulp-concat');

function defaultTask(cb) {
  gulp
    .src('src/**/*.less', { allowEmpty: true })
    .pipe(concat('style.css'))
    .pipe(
      gulpLess({
        paths: ['node_modules'],
        plugins: [[lessPluginNpmImport({ prefix: '~' })], [lessAutoPreFix()]],
        relativeUrls: true,
        javascriptEnabled: true,
      })
    )
    .pipe(cssMinify())
    .pipe(gulp.dest('dist/'));

  cb();
}

exports.default = defaultTask;
