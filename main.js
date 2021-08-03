let count =0;

function welcome(){
    var result = prompt('What is your name?');
    if(typeof result=='string'){
        document.getElementById("welcome").innerHTML +=result;

    }
   
    
    

}
function doStuff(){
    var yearElement = document.getElementById("year");
    var theYear = yearElement.value;
    if(isNaN(theYear)){
        document.getElementById("someDiv").innerHTML += "Not a number";
    }
    else if(theYear==1886){
        document.getElementById("someDiv").innerHTML += "Correct!";
        count++;
        document.getElementById("count").innerHTML = count;
        
    }
    else{
        document.getElementById("someDiv").innerHTML += "Wrong!";
        document.getElementById("count").innerHTML = count;
        return;

    }
    
}

function expensive(){
    var NameElement = document.getElementById("name");
    var theName = NameElement.value;
    var theName=theName.toLowerCase();

    if(theName=='pepe'){
        document.getElementById("expen").innerHTML += "Correct!";
        count++;
        document.getElementById("count").innerHTML = count;
        
    }
    else{
        document.getElementById("expen").innerHTML += "Wrong!";
        document.getElementById("count").innerHTML = count;
        return;

    }
    
}

function keeper(){
    var NameElement = document.getElementById("keeper");
    var theName = NameElement.value;
    var theName=theName.toLowerCase();

    if(theName=='leno' || theName=='bernd' || theName=='bernd leno'){
        document.getElementById("keep").innerHTML += "Correct!";
        count++;
        document.getElementById("count").innerHTML = count;
        
    }
    else{
        document.getElementById("keep").innerHTML += "Wrong!";
        document.getElementById("count").innerHTML = count;
        return;

    }
    
}