let count =0;

function welcome(){
    var result = prompt('What is your name?');
    while(isNaN(result)==false){
        alert("invalid input!");
        var result = prompt('What is your name?');
    }
    alert("Hi " + result);
    
    
}


let num=1;
function doStuff(){
    
    var yearElement = document.getElementById("year");
    var theYear = yearElement.value;
    if(theYear.length==0){
        document.getElementById("someDiv").innerHTML = "Field empty!";
    }
    else if(theYear==1905){
        document.getElementById("someDiv").innerHTML = "Correct!";
        while(num>0){
            count++;
            num--;
        }
        document.getElementById("count").innerHTML ="Your score is "+ count;
    }
    else{
        document.getElementById("someDiv").innerHTML = "Wrong!";
        document.getElementById("count").innerHTML ="Your score is "+ count;
        return;

    }
    
}

let exCount=1;
function expensive(){
    var NameElement = document.getElementById("name");
    var theName = NameElement.value;
    var theName=theName.toLowerCase();
    if(theName.length==0){
        document.getElementById("expen").innerHTML = "Field empty~";
    }
    else if(isNaN(theName)==false){
        document.getElementById("expen").innerHTML = "Invalid input!";

    }
    else if(theName=='kai' || theName=='havertz' || theName=='kai havertz'){
        document.getElementById("expen").innerHTML = "Correct!";
        while(exCount>0){
            count++;
            exCount--;
        }
        document.getElementById("count").innerHTML ="Your score is "+ count;
        
    }
    else{
        document.getElementById("expen").innerHTML = "Wrong!";
        document.getElementById("count").innerHTML ="Your score is "+ count;
        return;

    }
    
}
let keepCount=1
function keeper(){
    var NameElement = document.getElementById("keeper");
    var theName = NameElement.value;
    var theName=theName.toLowerCase();
    if(theName.length==0){
        document.getElementById("keep").innerHTML = "Field empty!";
    }
    else if(isNaN(theName)==false){
        document.getElementById("keep").innerHTML = "Invalid input!";

    }
    else if(theName=='edouard' || theName=='mendy' || theName=='edouard mendy'){
        document.getElementById("keep").innerHTML = "Correct!";
        while(keepCount>0){
            count++;
            keepCount--;
        }
        document.getElementById("count").innerHTML ="Your score is "+ count;
        
    }
    else{
        document.getElementById("keep").innerHTML = "Wrong!";
        document.getElementById("count").innerHTML ="Your score is "+ count;
        return;

    }
    
}

let coachCount=1;
function coach(){
    var CoachElement = document.getElementById("coach");
    var theName = CoachElement.value;
    var theName=theName.toLowerCase();
    if(theName.length==0){
        document.getElementById("coacher").innerHTML = "Field empty!";
    }
    else if(isNaN(theName)==false){
        document.getElementById("coacher").innerHTML = "Invalid input!";

    }
    else if(theName=='thomas' || theName=='tuchel' || theName=='thomas tuchel'){
        document.getElementById("coacher").innerHTML = "Correct!";
        while(coachCount>0){
            count++;
            coachCount--;
        }
        document.getElementById("count").innerHTML ="Your score is "+ count;
        
    }
    else{
        document.getElementById("coacher").innerHTML = "Wrong!";
        document.getElementById("count").innerHTML ="Your score is "+ count;
        return;

    }
    
}