var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync').create();
var config = require('./gulp.config')();
var del = require('del');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
  lazy: true
});

gulp.task('vet', function () {
  log('Analyzing source with JSHint and JSCS');

  gulp.src(config.alljs)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', ['clean-styles'], function () {
  log('Compiling Sass --> CSS');

  return gulp
    .src(config.sass)
    .pipe($.plumber())
    .pipe($.sass.sync())
    .pipe($.autoprefixer({
      browsers: ['last 2 version', '> 5%']
    }))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(config.temp))
    .pipe(browserSync.stream());
});

gulp.task('clean-styles', function () {
  var files = config.temp + '**/*.css';
  clean(files);
});

gulp.task('style-watch', function () {
  gulp.watch([config.sass], ['styles']);
});

gulp.task('wiredep', function () {
  var options = config.wiredepOptions();
  var wiredep = require('wiredep').stream;

  return gulp
    .src(config.index)
    .pipe(wiredep(options))
    .pipe($.inject(gulp.src(config.js)))
    .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function () {
  log('Wire our css into index and call wiredep');
  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.css)))
    .pipe(gulp.dest(config.client));
});

gulp.task('serve', ['styles'], function () {

  browserSync.init({
    server: {
      baseDir: [config.client],
      routes: {
        '/bower_components': 'bower_components',
        '/src': 'src',
        '/.tmp': '.tmp'
      }
    },
    files: [
      config.client + '**/*.*',
      '!' + config.sass,
      config.temp + '**/*.css'
    ],    
    ghostMode: {
      clicks: true,
      location: false,
      forms: true,
      scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'debug',
    logPrefix: 'jmp',
    notify: true,
    reloadDelay: 0 //1000
  });

  gulp.watch([config.sass], ['styles']);
  // gulp.watch(config.index).on('change', reload());
});

// Functions //
function clean(path) {
  log($.util.colors.bgCyan.white('Cleaning: ' + path));
  return del(path);
}

function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.yellow(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.yellow(msg));
  }
}
