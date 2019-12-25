
var calculatePage = require('../pages/calculationPage.js');

var testData = [{
    "firstNumber": "4",
    "secondNumber": "5"
}, {
    "firstNumber": "9",
    "secondNumber": "7"
}]


describe('EndToEndFlow', function () {

    beforeAll(function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    dataProvider(testData, function (data) {
        it('add two numbers ', function () {
            calculatePage.calculationsAdd(data);
        });
    });

    dataProvider(testData, function (data) {
        it('multiply two numbers ', function () {
            calculatePage.calculationsSubtract(data);
        });
    });


});