module.exports = function () {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';
  var root = './';

  var config = {
    /* file paths */
    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    build: './build/',
    client: client,
    css: temp + 'style.css',
    html: clientApp + '**/*.html',
    htmltemplates: clientApp + '**/*.html',
    images: client + 'images/**/*.*',
    index: client + 'index.html',
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'
    ],
    root: root,
    sass: client + 'styles/style.scss',
    temp: temp,

    /* optimized files */
    optimized: {
      app: 'app.js',
      lib: 'lib.js'
    },

    /* bower and npm */
    bower: {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    },

    /* template cache */
    templateCache: {
      file: 'templates.js',
      options: {
        module: 'layout',
        standAlone: false,
        root: 'app/'
      }
    }

  };

  config.wiredepOptions = function () {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
    return options;
  };

  return config;
};
