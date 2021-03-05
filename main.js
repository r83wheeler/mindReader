// global - Set default vars & const
const backGo = document.getElementById("backGo");

const nextReveal = document.getElementById("nextReveal");




 

//Assign the multiples of 9 the same Icon
//All others get random Icons

function randomizeSymbolString (){
    // create an empty str to return
    let str = "";
    // need a list of symbols
    let symbols = ["@", "&", "$", "#", "~", "+", "*", ">", "<", "^"];
    
    // pick a random symbol
    // calling the defined function 
    let symbol = symbols[0]; // is @
    for(let i = 0; i < 99; i++){
        // loop thru numbers
        // if % 9, we use the symbol
        if(i % 9 === 0){
            str += i + ' - ' + symbol + ' ';
        } else {
            // else we use something other than the symbol
            str += i + ' - ' + symbols[Math.floor(Math.random() * 10)] + ' ';
        
        }
    }
    return str;
}
// definition
function randomSymbol (allSymbols){
    // choose a random symbol from allSymbols
   
    return allSymbols[ Math.floor(Math.random() * 10)];
}


//creates an array with the given length, and then joins it with the given string to repeat. 
function init(){
    let s = randomizeSymbolString();
    //console.log(s);
    states[4].headingText=s;
    iterator= 0;
    currentState=states[iterator];
    render()
}

//change view after NEXT button is clicked
function stateChange() {
    document.getElementById("nextReveal").innerHTML = "nextReveal";
}

// create the states array that holds the different views
let states = [
    {
        headingText: "I can read your mind",
        buttonText: "GO",
        thirdArea: "",
        startOver: ""
    },
    {
        headingText: "Pick a number from 01 - 99",
        buttonText: "NEXT",
        thirdArea: "when you have your number click next",
        startOver: "Start Over"
    },
    {
        headingText: "Add both digits together to get a new number",
        buttonText: "NEXT",
        thirdArea: "Ex: 14 is 1 + 4 = 5",
        startOver: "Start Over"
    },
    {
        headingText: "Subtract your new number from the original number",
        buttonText: "NEXT",
        thirdArea: "Ex: 14 - 5 = 9",
        startOver: "Start Over"
    },
    {
        headingText: null,
        buttonText: "REVEAL",
        thirdArea: "Find your new number. Note the symbol beside the number",
        startOver: "Start Over"
    },

    {
        headingText: null,
        buttonText: "",
        thirdArea: "Find your new number. Note the symbol beside the number",
        startOver: "Start Over"

    }


];

let currentState = null;
let iterator = 0;

let headingText = document.getElementById ("headingText");
let buttonText = document.getElementById ("nextReveal");
let thirdArea = document.getElementById ("thirdArea");
let startOver = document.getElementById ("startOver");


function next() {
    //incriment the current state 
    //render (display)
    iterator++;
    currentState = states[iterator];
    render();
}

function reset() {
    //set the state back to 0
    //render (display)
    init();
}

function render() {
    //take data from current state and populate the view
    headingText.innerHTML=currentState.headingText;
    buttonText.innerHTML=currentState.buttonText; 
    thirdArea.innerHTML=currentState.thirdArea;
    startOver.innerHTML=currentState.startOver;
    
    //show/hide button based on the strings length  if === 0, hide button
    //else, show the button and use button text to change the innerHTML
    console.log(currentState.buttonText.length);
    if (currentState.buttonText.length === 0) {
        button.hidden = true;
        button.value = currentState.buttonText;
    }else {
        button.hidden = false; 
    }
    if (currentState.startOver.length === 0) {
        startOver.hidden = true;
        startOver.value = currentState.startOver;
    }else {
        startOver.hidden = false; 
    }

}






document.body.onload=init;





