let x = document.getElementById('x')
let y = document.getElementById('y')
console.log(x.innerText)
console.log(x.innerHTML)
y.innerHTML=x.innerHTML;



let xx = document.getElementById('password')
let yy = document.getElementById('putton')
function CC(){
    if ( putton.innerHTML=="SHOW"){
        xx.type="text";
       yy.innerHTML="HIDE"
   }
   else{
       xx.type="password";
       yy.innerHTML="SHOW"
    }
}

let input = document.querySelectorAll('#input1')
let btn = document.querySelector("#button")

btn.addEventListener('click', ()=>{
   let input1=Number(input[0].value);
   let input2=Number(input[1].value);
   let input3=input1+input2;

   input[2].value=input3;
})
let container = document.getElementsByClassName("main")
let atn = document.getElementsByClassName("btn")
let items=container;

function btnn(){
   for(let items of container){
    items.style.background="red";
    items.style.transition= "all 2s linear 0s";
  }
} 


let model= document.getElementsByClassName(".model")
let sutn = document.getElementsByClassName(".sutton")
let span = document.querySelector("span")

 sutn.addEventListener('Click',()=>{
     model.classList.add('showModel')
     alert("hello ck everythink is ok")
 } )
 span.addEventListener('click',()=>{
     model.classList.remove('showModel')
 } )
function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
     alert("hello ck everythink is ok")
}