let use=document.getElementById("un");
let psw=document.getElementById("ps");

function validateForm(){
    if(use.value==''){
        document.getElementById("para1").innerHTML="Username is Empty";    
    }
    else if(use.value.length<5){
        document.getElementById("para1").innerHTML="Username should be more than 5 characters";
    }
    if(psw.value==''){
        document.getElementById("para2").innerHTML="Password is Empty";
    }
    return false;
}