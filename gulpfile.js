var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync').create();
var config = require('./gulp.config')();
var del = require('del');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
  lazy: true
});

gulp.task('default', ['help']);

gulp.task('help', $.taskListing);

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

gulp.task('images', ['clean-images'], function () {
  log('Copying images');
  return gulp
    .src(config.images)
    .pipe($.imagemin({
      optimizationLevel: 4
    }))
    .pipe(gulp.dest(config.build + 'images'));
});

gulp.task('clean', function () {
  var delconfig = [].concat(config.build, config.temp);
  log($.util.colors.bgCyan.white('Cleaning: ' + delconfig));
  del(delconfig);
});

gulp.task('clean-images', function () {
  var files = config.build + 'images/**/*.*';
  clean(files);
});

gulp.task('clean-styles', function () {
  var files = config.temp + '**/*.css';
  clean(files);
});

gulp.task('clean-code', function () {
  var files = [].concat(
    config.temp + '**/*.js',
    config.build + '**/*.html',
    config.build + 'js/**/*.js'
  );
  clean(files);
});

gulp.task('style-watch', function () {
  gulp.watch([config.sass], ['styles']);
});

gulp.task('templatecache', ['clean-code'], function () {
  log('Creating AngularJS $templateCache');

  return gulp
    .src(config.htmltemplates)
    .pipe($.minifyHtml({
      empty: true
    }))
    .pipe($.angularTemplatecache(
      config.templateCache.file,
      config.templateCache.options
    ))
    .pipe(gulp.dest(config.temp));
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

gulp.task('inject', ['wiredep', 'styles', 'templatecache'], function () {
  log('Wire our css into index and call wiredep');
  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.css)))
    .pipe(gulp.dest(config.client));
});

gulp.task('optimize', ['inject', 'images'], function () {
  log('Optimizing the javascript, css, html');

  var assets = $.useref.assets({
    searchPath: './'
  });
  var templateCache = config.temp + config.templateCache.file;
  var cssFilter = $.filter('**/*.css');
  var jsFilter = $.filter('**/*.js');

  return gulp
    .src(config.index)
    .pipe($.plumber())
    .pipe($.inject(gulp.src(templateCache, {read: false}), {starttag: '<!-- inject:templates:js -->'}))
    .pipe(assets)
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(jsFilter)
    .pipe($.uglify())
    .pipe(jsFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest(config.build));
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
    logLevel: 'info',
    logPrefix: 'jmp',
    notify: true,
    reloadDelay: 0 //1000
  });

  gulp.watch([config.sass], ['styles']);
  // gulp.watch(config.index).on('change', reload());
});

gulp.task('serve-build', ['optimize'], function () {
  startBrowserSync(false);
});

gulp.task('serve-dev', ['inject'], function () {
  startBrowserSync(true);
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

function changeEvent(event) {
  var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
  log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function startBrowserSync(isDev) {

  log('Starting browser-sync');
  if (args.nosync || browserSync.active) {
    return;
  }

  if (isDev) {
    gulp.watch([config.sass], ['styles']);
  } else {
    gulp.watch([config.sass, config.js, config.html], ['optimize']);
  }

  var options = {
    server: {
      baseDir: isDev ? [config.client] : [config.build],
      routes: {
        '/bower_components': 'bower_components',
        '/src': 'src',
        '/.tmp': '.tmp'
      }
    },
    files: isDev ? [
      config.client + '**/*.*',
      '!' + config.sass,
      config.temp + '**/*.css'
    ] : [],
    ghostMode: {
      clicks: true,
      location: false,
      forms: true,
      scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'info',
    logPrefix: 'jmp',
    notify: true,
    reloadDelay: 0 //1000
  };

  browserSync.init(options);
}
