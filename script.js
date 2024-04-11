const count = document.getElementById("count");
const err = document.getElementById("err");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const clear = document.getElementById("clear");

let a = 0;
if (a===0 || a<0){
        err.style.display="block";
        clear.style.display="none";
        dec.disabled = true;

    }
function display(){
    count.textContent=a;
    if (a===0 || a<0){
        err.style.display="block";
        clear.style.display="none";
        dec.disabled = true;

    }
    else{
        err.style.display="none";
        clear.style.display="inline";
        dec.disabled = false;
    }
    
}
inc.addEventListener("click",function(){
    a++;
    display();
})
dec.addEventListener("click",function(){
    a--;
    display();
})
clear.addEventListener("click",function(){
    a=0;
    display();
})
