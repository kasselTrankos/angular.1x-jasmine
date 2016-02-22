var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('./jasmine.json');

jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'appSpec.js',
        'requests/**/*[sS]pec.js',
        'utils/**/*[sS]pec.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});
var CustomReporter = require('jasmine-spec-reporter');
var customReporter = new CustomReporter({
  displayPendingSpec: true,
  displaySpecDuration: true,
  displaySuiteNumber: true
});

jasmine.addReporter(customReporter);
jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});
jasmine.execute();
