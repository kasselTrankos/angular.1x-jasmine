
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
          'karma-browserify',
          'karma-browserify-preprocessor'
        ],

        preprocessors: {
          //'app/**/*.js': ['coverage', 'browserify'],
          'app/main.js':['coverage', 'browserify'],
          'test/*':['browserify']
        },

        browserify: {
          watch:true,
          debug: true,
          transform: ['browserify-istanbul']
        },

        reporters: ['progress','coverage'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false,
        coverageReporter: {
          // specify a common output directory
          dir: 'coverage',
          reporters: [
            // reporters not supporting the `file` property
            { type: 'html', subdir: 'report-html' }
          ]
        }
    });
};
