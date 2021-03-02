//can't write HTML in JS

let states = [
    {
        li: "I can read your mind",
        button: "NEXT",

    },
    {
        li: "Pick a number from 01 - 99",
        button: "NEXT",
    },
    {
        li: "Add both digits together to get a new number",
        button: "NEXT",
    },
    {
        li: ""
    }

];

let li = document.getElementById ("1");
let button = document.getElementById ("2");

li.innerHTML= states[0].li 
button.innerHTML = states[1].button