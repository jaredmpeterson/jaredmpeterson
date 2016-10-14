module.exports = function () {
  var client = './src/client/';
  var clientApp = client + 'app/';

  var config = {
    temp: '.tmp/',
    client: client,
    alljs: ['./*.js'],
    sass: client + 'styles/*.scss',
    index: 'index.html',
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
