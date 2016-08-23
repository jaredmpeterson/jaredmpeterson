// REQUIRE DEPENDENCIES // ===================================================
var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var path = require('path');
var order = require('gulp-order');

// DECLARE FILE PATHS // ======================================================
var paths = {
  jsSource: ['./app/jmp.js', './app/core/core.js', './src/client/app/layout/layout.module.js', './app/**/*.js'],
  // We need to change where the file paths according to our file structure.
  sassSource: ['./styles/main.scss'],
	sassWatchSource: ['./styles/*.scss', './styles/**/*.scss'],
  bundleSource: ['./src/dist']
  // Add to array or change current path to './public/styles/**/*.scss' to use Scss
  //lessSource: ['./public/styles/**/*.less'] //Uncomment if using Less
};

// DEFINE TASKS // ============================================================
gulp.task('es6', function() {
  return gulp.src(paths.jsSource)
  .pipe(sourcemaps.init())
  .pipe(babel({'presets': ['es2015']}))
  // .pipe(order(["js/app.js", "js/ctrl.js", "js/service.js"]))
  .pipe(concat('all.js'))
  .pipe(annotate())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('live'));
});

gulp.task('sass', function () {
  return gulp.src(paths.sassSource)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('live'));
});

// WATCH TASKS // ============================================================
gulp.watch('css/*.scss', ['sass']);
gulp.watch(['js/*.js'], ['es6']);

// RUN DEFAULT TASK // ======================================================
gulp.task('default', ['es6', 'sass']);
