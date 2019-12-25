
var calculatePage = require('../pages/calculationPage.js');
var data = require('../resources/data.json');


describe('EndToEndFlow', function () {

    beforeAll(function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

        it('add two numbers ', function () {
            console.log("name is ======="+data.name);
            calculatePage.calculationsAdd(data);
        });
    
        it('multiply two numbers ', function () {
            calculatePage.calculationsSubtract(data);
        });
  });