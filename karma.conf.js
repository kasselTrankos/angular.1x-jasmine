
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
          'karma-html-reporter',
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
          'test/*.js':['browserify']
        },
        htmlReporter: {
          outputDir: 'karma_html', // where to put the reports
          templatePath: null, // set if you moved jasmine_template.html
          focusOnFailures: true, // reports show failures on start
          namedFiles: false, // name files instead of creating sub-directories
          pageTitle: null, // page title for reports; browser info by default
          urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
          reportName: 'report-summary-filename', // report summary filename; browser info by default


          // experimental
          preserveDescribeNesting: false, // folded suites stay folded
          foldAll: false, // reports start folded (only with preserveDescribeNesting)
        },
        browserify: {
          watch:true,
          debug: true,
          transform: ['browserify-istanbul']
        },

        reporters: ['progress', 'html'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: true,
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
