let RunningTotal = 0;
let state;
let Firstn = 0;
let ANS;
function getNumber(id) {
    console.log(id);
    if(id == "ANS"){
        id = ANS;
    }
    document.getElementById("answer_element").innerHTML = id;
    if (state == "+") {
        console.log(Firstn + id);
        document.getElementById("answer_element").innerHTML = Firstn + " + " + id ;
        document.getElementById("answer_element").innerHTML = Firstn + " + " + id + " = " + (Firstn + id);
        ANS = Firstn + id;
        state = 0; 
    } else if (state == "-") {
        console.log(Firstn - id);
        document.getElementById("answer_element").innerHTML = Firstn + " - " + id ;
        document.getElementById("answer_element").innerHTML = Firstn + " - " + id + " = " + (Firstn - id);
        ANS = Firstn - id;
        state = 0;
    } else if (state == "*") {
        console.log(Firstn * id);
        document.getElementById("answer_element").innerHTML = Firstn + " * " + id ;
        document.getElementById("answer_element").innerHTML = Firstn + " * " + id + " = " + (Firstn * id);
        ANS = Firstn * id;
        state = 0;
    } else if (state == "/") {
        console.log(Firstn / id);
        document.getElementById("answer_element").innerHTML = Firstn + " / " + id ;
        document.getElementById("answer_element").innerHTML = Firstn + " / " + id + " = " + (Firstn / id);
        ANS = Firstn / id;
        state = 0;
    } else if (state == "^x") {
        console.log(Math.pow(Firstn, id));
        document.getElementById("answer_element").innerHTML = Firstn + "^" + id ;
        document.getElementById("answer_element").innerHTML = Firstn + "^" + id + " = " + Math.pow(Firstn, id);
        ANS = Math.pow(Firstn, id);
        state = 0;
    }

    Firstn = id;
    // check this out Noah.
    // this is one way to grab an element on the html page and change
    //  its value from a javascript file.
    //  if you look in the html file, you'll find an element that i created named
    //  answer_space.  the code below grabs this element and sets the html text that 
    //  is contained in within the tag.
    
}

function add() {
    console.log("+");
    document.getElementById("answer_element").innerHTML = Firstn + " + ";
    state = "+";
}

function subt() {
    console.log("-");
    document.getElementById("answer_element").innerHTML = Firstn + " - ";
    state = "-";
}

function mult() {
    console.log("*");
    document.getElementById("answer_element").innerHTML = Firstn + " * ";
    state = "*";
}

function div() {
    console.log("/");
    document.getElementById("answer_element").innerHTML = Firstn + " / ";
    state = "/";
}

function AC() {
    console.clear();
}

function pow(){
    console.log("^x");
    document.getElementById("answer_element").innerHTML = Firstn + "^ ";
    state = "^x";
}

function Ans(){
    id = ANS;
}


