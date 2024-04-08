const display = document.getElementById("display");
function appendToDisplay(input){
    display.value +=input;//.value property is a property of input elements in the Document Object Model (DOM). It is used to get or set the current value of an input element
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value = eval(display.value)//eval is a function which is it self a calculator.

    }
    catch(error){
        dislay.value = "Error";
    }
}