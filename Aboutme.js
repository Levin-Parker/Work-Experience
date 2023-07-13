
let ptext = document.getElementById("popup")
let colour = document.getElementById("colour")
let textcolour = document.getElementById("textcolour")
let footer = document.getElementById("footer")
let header =document.getElementById("header")
let sidenav = document.getElementById("sidenav")
let button3 = document.getElementById("button3")
let backbutton = document.getElementById("backbutton")
let button = document.getElementById("button")


function function1(){
 console.log(ptext)
 ptext.classList.remove("hide");

 
}
function function2(){
    console.log(ptext)
    ptext.classList.add("hide") 
}


function function3(){
    console.log(colour)
   if(colour.style.backgroundColor=="white"){
    console.log("if")
    colour.style.backgroundColor="black";
    textcolour.style.color="white"
    footer.style.background ="rgb(31, 40,51)"
    header.style.background ="rgb(31, 40,51)"
    sidenav.style.background ="rgb(31, 40,51)" 
    button3.style.backgroundColor="black"
    button3.style.color="white"
    backbutton.style.backgroundColor="black"
    backbutton.style.color="white"
    button.style.backgroundColor="black"
    button.style.color="white"
}



   else{
    console.log("else")
    colour.style.backgroundColor="white";
    textcolour.style.color="black"
    footer.style.background ="grey"
    header.style.background ="grey"
    sidenav.style.background ="grey"
    button3.style.backgroundColor="grey"
    button3.style.color="white"
    backbutton.style.backgroundColor="grey"
    backbutton.style.color="black"
    button.style.backgroundColor="grey"
    button.style.color="white"
}
    
}
let button1=document.getElementById("button").addEventListener("mouseover",function1)
let button2=document.getElementById("button").addEventListener("mouseout",function2)
let button4=document.getElementById("button3").addEventListener("onclick",function1)