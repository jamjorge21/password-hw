let valueNum= "0123456789";
let valueCap= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let valueLow= "abcdefghijklmnopqrstuvwxyz";
let valueSpecial= "!@#$%^&*()_+";
let valuePass="";
let pwd = "";
let userChoice="";
let userChoice2="";
let userChoice3="";
let userChoice4="";
let length = 0;

function cap(){
    userChoice = confirm("Uppercase letter click Ok if not press cancel");
    
         if ( userChoice === true){
             valuePass=valuePass+valueCap;
             if ( userChoice === false){
            valuePass=valuePass+"";            
            
         }
    }
}
function low(){
    userChoice2 = confirm("Lowercase letter click Ok if not press cancel");
    
         if ( userChoice2 === true){
             valuePass=valuePass+valueLow;
             if ( userChoice2 === false){
                valuePass=valuePass+"";        
            
        }
    }
}

function num(){
    userChoice3 = confirm("If user wants numbers click Ok if not press cancel");
    
    if ( userChoice3 === true){
        valuePass=valuePass+valueNum;
            if ( userChoice3 === false){
                valuePass=valuePass+"";
            
        }
        
        
    }
}

function special(){
    userChoice4 = confirm("If user wants special characters click Ok if not press cancel");
    
        if ( userChoice4 === true){
        valuePass=valuePass+valueSpecial;
         if ( userChoice4 === false){
            valuePass=valuePass+"";
            
        }
}
}
function generate(){
        length = prompt("Please enter a password length: ");
        if (length < 8 || length >128){
            alert("Password has to be longer than 8 and shorter than 128 characters");
        }else{ cap();
                low();
                num();
                special();
                
                console.log(valuePass);
                console.log(length);
            for (var i = 0; i < length; i++){
                pwd += valuePass.charAt(Math.floor(Math.random()* Math.floor(valuePass.length )));
            
               
            }
            document.querySelector("#password").value = pwd;
           
        console.log(pwd); 


}
}

function refresh(){
            
setTimeout(function(){
    
    window.location.reload(1);
 }, 0);
 
}