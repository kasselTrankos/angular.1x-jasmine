module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/main.js',
            'test/*'
        ],


        exclude: [
        ],
        plugins : [
          'karma-chrome-launcher',
          'karma-phantomjs-launcher',
          'karma-jasmine',
          'karma-coverage',
          'karma-browserify'
        ],

        preprocessors: {
          'app/main.js':['browserify']

        },

        browserify: {
          watch:true,
            debug: true
        },

        reporters: ['dots', 'progress', 'junit', 'growl', 'coverage'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false
    });
};
