const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const pkg = require('./package');
const date = new Date();
const header = require('gulp-header');

const header_str = `/* prism-tyranoscript.js v${pkg.version}
 * (c) ${date.getFullYear()} @ogihara88sai
 * Released under the MIT Licence */
`;

function build() {
  return gulp
    .src(['./src/prism-tyranoscript.js'])
    .pipe(header(header_str))
    .pipe(gulp.dest('./docs'))
    .pipe(uglify())
    .pipe(header(header_str))
    .pipe(
      rename({
        extname: '.min.js',
      })
    )
    .pipe(gulp.dest('./dist'));
}

exports.build = build;
