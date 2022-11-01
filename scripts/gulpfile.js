const gulp = require('gulp');
const gulpLess = require('gulp-less');
const lessPluginNpmImport = require('less-plugin-npm-import');
const lessAutoPreFix = require('less-plugin-autoprefix');
const cssMinify = require('gulp-css-minify');
const concat = require('gulp-concat');
const lessFunctions = require('less-plugin-functions');
const colorList = require('../config/color');

const npmImport = new lessPluginNpmImport({ prefix: '~' });
const autoprefix = new lessAutoPreFix();
const lessfn = new lessFunctions();

function compileGlobalCss(cb) {
  for (let i = 0; i < colorList.length; i++) {
    gulp
      .src('src/style/default.less', { allowEmpty: true })
      .pipe(concat(`color-${colorList[i].name}.css`))
      .pipe(
        gulpLess({
          modifyVars: {
            baseBrandColor: colorList[i].color,
          },
        })
      )
      .pipe(cssMinify())
      .pipe(gulp.dest('libs/'));
  }

  cb();
}

function compileComponentCss(cb) {
  gulp
    .src('src/**/style/index.less')
    // .pipe(concat('style.css'))
    .pipe(gulpLess())
    // .pipe(cssMinify())
    .pipe(concat('global.css'))
    .pipe(cssMinify())
    .pipe(gulp.dest('libs/'));
  cb();
}

const main = gulp.series(compileComponentCss, compileGlobalCss);

exports.default = main;
