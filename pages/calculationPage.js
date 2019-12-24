class calculation{
    constructor(){
        this.firstTextBox =  element(by.model('first')),
        this.secondTextBox = element(by.model('second')),
        this.button = element(by.id('gobutton'))
        
    }
    calculations(data){
        console.log('entered=========');
        bActions.type( this.firstTextBox,data.firstNumber,'Enter 4 in first Name');
        bActions.type(this.secondTextBox,data.secondNumber,'Enter 5 in last Name');
        bActions.clickOn(this.button,'Click on Add  button');
        
    }
}
module.exports = new calculation();