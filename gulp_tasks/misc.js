const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const ghPages = require('gulp-gh-pages');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);
gulp.task('deploy:gh-pages', deploy);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{css,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}

function deploy() {
  return gulp.src(path.join(conf.paths.dist, '/**/*'))
    .pipe(ghPages());
}
