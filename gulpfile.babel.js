import fs from 'fs'
import gulp from 'gulp'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import foreach from 'gulp-foreach'
import insert from 'gulp-insert'
import cleanCss from 'gulp-clean-css'

sass.compiler = require('node-sass')

const paths = {
  scripts: [
    'src/**/*.js',
    '!src/**/build/*.js'
  ],
  styles: [
    'src/**/*.scss',
    '!src/_includes/_assets/styles/_settings.scss',
  ],
}

export function scripts () {
  return gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename(path => {path.dirname += '/build'}))
    .pipe(gulp.dest(file => file.base))
}

export function styles () {
  const sassSettings = fs.readFileSync('src/_includes/_assets/styles/_settings.scss')
  return gulp.src(paths.styles)
    .pipe(foreach(stream => {
      return stream
        .pipe(insert.prepend(sassSettings))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(rename(path => {path.dirname += '/build'}))
        .pipe(gulp.dest(file => file.base))
    }))
}

export function watch () {
  gulp.watch(paths.scripts, scripts)
  gulp.watch('src/_includes/_assets/styles/_settings.scss', styles)
  gulp.watch(paths.styles, gulp.series(styles))
}

/*
 * Export a default task
 */
export default gulp.series(scripts, styles)
