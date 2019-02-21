let RunningTotal = 0;  
let state;
let Firstn = 0;
function getNumber(id){
    console.log(id);
    if(state == "+"){
        console.log(Firstn + id);
        state = 0;
    } else if (state == "-") {
        console.log(Firstn - id);
        state = 0;
    } else if (state == "*"){
        console.log(Firstn * id);
        state = 0;
    } else if (state == "/"){
        console.log(Firstn / id);
        state = 0;
    }

    Firstn = id;
}

function add(){
    console.log("+");
    state = "+";
}

function subt(){
    console.log("-");
    state = "-";
}

function mult(){
    console.log("*");
    state = "*";
}

function div(){
    console.log("/");
    state = "/";
}

function AC(){
    console.clear();
}


