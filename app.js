let RunningTotal = 0;
let state;
let Firstn = 0;
function getNumber(id) {
    console.log(id);
    if (state == "+") {
        console.log(Firstn + id);
        state = 0;
    } else if (state == "-") {
        console.log(Firstn - id);
        state = 0;
    } else if (state == "*") {
        console.log(Firstn * id);
        state = 0;
    } else if (state == "/") {
        console.log(Firstn / id);
        state = 0;
    }

    Firstn = id;
    // check this out Noah.
    // this is one way to grab an element on the html page and change
    //  its value from a javascript file.
    //  if you look in the html file, you'll find an element that i created named
    //  answer_space.  the code below grabs this element and sets the html text that 
    //  is contained in within the tag.
    document.getElementById("answer_element").innerHTML = "the answer";
}

function add() {
    console.log("+");
    state = "+";
}

function subt() {
    console.log("-");
    state = "-";
}

function mult() {
    console.log("*");
    state = "*";
}

function div() {
    console.log("/");
    state = "/";
}

function AC() {
    console.clear();
}


