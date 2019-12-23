
var calculatePage = require('../pages/calculationPage.js');  
describe('EndToEndFlow', function () {

    beforeAll(function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    it('add two numbers ', function () {
        calculatePage.calculations();
        

	});


});