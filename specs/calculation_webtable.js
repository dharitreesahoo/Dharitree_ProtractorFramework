
var calculatePage = require('../pages/calculationPage.js');

var testData = [{
    "firstNumber": "4",
    "secondNumber": "5"
}, {
    "firstNumber": "9",
    "secondNumber": "7"
},
{
    "firstNumber": "5",
    "secondNumber": "3"
},
{
    "firstNumber": "8",
    "secondNumber": "4"
}]


describe('EndToEndFlow', function () {

    beforeAll(function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    dataProvider(testData, function (data) {
        fit('add two numbers for a set of numbers ', function () {
            calculatePage.calculationsAdd(data);
        });
    });

    it('get all the values from webtable ', function () {
        let rows = element.all(by.repeater('result in memory'));
        browser.sleep(2000);
        rows.each(function (row) {
            let cell = row.$$('td');
            for (let index = 0; index < 3; index++) {
                cell.get(index).getText().then(function (cellVal) {
                    console.log(cellVal);
                })
            }
        });
    });

    it('get 3rd column values ', function () {
        let sum = 0;
        let rows = element.all(by.repeater('result in memory'));
        browser.sleep(2000);
        rows.each(function (row) {
            let cell = row.$$('td');
            cell.get(2).getText().then(function (cellVal) {
                console.log("cell values are " + cellVal);
            });
        });
    });
    it('get 3rd column value and sum it ', function () {
        var expectedCells = element.all(by.css('.table tr td:nth-of-type(3)'));
        var currentSum = 0;
        expectedCells.each((eachCell) => {
            eachCell.getText().then((cellText) => {
                currentSum += parseInt(cellText);
                console.log("number are" + cellText);
            });
        }).then(() => {
            expect(currentSum).toEqual(45);
        });
    });
    fit('add the number greater than 10 ', function () {
        var expectedCells = element.all(by.css('.table tr td:nth-of-type(3)'));
        var currentSum = 0;
        expectedCells.each((eachCell) => {
            eachCell.getText().then((cellText) => {
                console.log("number is"+parseInt(cellText));
                if (parseInt(cellText) > 10) {

                    currentSum += parseInt(cellText);
                }
            });
        }).then(() => {
            expect(currentSum).toEqual(28);
        });
    });
});