module.exports = function () {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';

  var config = {
    /* file paths */
    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    client: client,
    css: temp + 'style.css',
    index: client + 'index.html',
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'
    ],
    sass: client + 'styles/style.scss',
    temp: temp,

    /* bower and npm */
    bower: {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
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
