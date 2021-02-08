"use strict"

window.addEventListener("load", start);

//Start
function start(){
    console.log("start");

    document.querySelector("#clear").addEventListener("click", clear);

    clickGenOutput();
}

//Make generate clickable
function clickGenOutput(){
    console.log("clickGenOutput");

    document.querySelector("#genoutput").addEventListener("click", processInput);
}

function readInput(){
    console.log("readInput");

    const input = document.querySelector("#input").value;
    return input
}

function processInput(){
    console.log("processInput");

    //collect input
    const input = readInput();

    const option = document.querySelector("#options").value;

    //read option
if (option == "opt1"){
        option1(input)
    }
    else if (option == "opt2"){
        option2(input)
    }
    else if (option == "opt3"){
        option3(input)
    }
    else if (option == "opt4"){
        option4(input)
    }
    else if (option == "opt5"){
        option5(input)
    }
    else if (option == "opt6"){
        option6(input)
    }
    else if (option == "opt7"){
        option7(input)
    }
    else if (option == "opt8"){
        option8(input)
    }
}


//funktioner til option
function option1(input){
    const showAnswer = input.substring(0, 1).toUpperCase() + input.substring(1);
    console.log(showAnswer);
    genOutput(showAnswer)
}

function option2(input){
    const firstSpace = input.indexOf(" ");
    const showAnswer = input.substring(0, firstSpace);
    console.log(showAnswer);

    genOutput(showAnswer)
}

function option3(input){
    const firstSpace = input.indexOf(" ");
    const showAnswer = input.substring(0, firstSpace).length;
    console.log(showAnswer);

    genOutput(showAnswer)
}

function option4(input){
    const firstSpace = input.indexOf(" ");
    const lastSpace = input.lastIndexOf(" ");
    const showAnswer = input.substring(firstSpace + 1, lastSpace).trim();
    console.log(showAnswer);

    genOutput(showAnswer)
}

 function option5(input){
    const lastPng = input.lastIndexOf(".");
    const lastJpg = input.lastIndexOf(".");
    const findPng = input.substring(lastPng + 1);
    const findJpg = input.substring(lastJpg + 1);

    if (findJpg === "jpg" || findPng === "png") {
        console.log("true");
        const showAnswer = input;
        console.log(showAnswer);
    }else {
     console.log("false - no filename");
     const showAnswer = "Error - no filename"
 }
    genOutput(showAnswer)
}  

function option6(input){
    const hidden = "*";
    const showAnswer = hidden.repeat(input.length);
    console.log(showAnswer);

    genOutput(showAnswer)
}

function option7(input){
    const capLetter = input.substring(0, 2).toLowerCase();
    const lowLetter = input[2].toUpperCase();
    const theRest = input.substring(3).toLowerCase();
    const showAnswer = capLetter + lowLetter + theRest;

    console.log(showAnswer);

    genOutput(showAnswer);
}

/* function option8(input){

    console.log(showAnswer);

    genOutput()
} */


//show answer
function genOutput(showAnswer){
    console.log(showAnswer);
    

    document.querySelector("#output").value = showAnswer.toString();
}

function clear() {
    console.log("clearOutput");
    document.querySelector("#output").innerHTML = "";
}
