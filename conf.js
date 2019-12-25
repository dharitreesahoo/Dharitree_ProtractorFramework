// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['specs/calculation_dataProviderEx.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: './resources/chromedriver_75.0.3770.80.exe',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  //Onprepare wll execute before any class
  onPrepare: function() {

    bActions = require('./actions/Actions.js');
    dataProvider = require('jasmine-data-provider');
    val1 = '';
    MAXWAITTIME = 40000;
    rootPath = __dirname;

    url = 'http://www.way2automation.com/angularjs-protractor/registeration/#/login';
    SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
            displayStacktrace: 'all'
        }
    }));

    //HTML report protractor-jasmine2-html-reporter
    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: 'result',
        screenshotsFolder: 'images',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        fileNamePrefix: 'Demo_MayBatch',
        consolidate: true,
        consolidateAll: true
    }));

    //PO references


    //html report  protractor-jasmine-screenshot-reporter
    var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

    jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
        dest: 'Reports/screenshots',
        filename: 'my-report.html'
    }));

    //allure Report

    AllureReporter = require('jasmine-allure-reporter');

    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: './allure-results'
    }));
    
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done) {
        browser.takeScreenshot().then(function(png) {
            allure.createAttachment('Screenshot', function() {
                return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
        })
    });

   
    ///XML report 

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults'
    }));

    var fs = require('fs-extra');
    fs.emptyDir('screenshots/', function(err) {
        console.log(err);
    });

    //loggers Config
    log4js = require('log4js');
    log4js.configure({
        appenders: { myApp: { type: 'file', filename: './logs/executionLog.log' } },
        categories: { default: { appenders: ['myApp'], level: 'ALL' } }
    });
    logger = log4js.getLogger('myApp');
},
};
