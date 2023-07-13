let colour = document.getElementById("colour")
let textcolour = document.getElementById("textcolour")
let textcolour2 = document.getElementById("textcolour2")
let footer = document.getElementById("footer")
let header =document.getElementById("header")
let sidenav = document.getElementById("sidenav")
let button3 = document.getElementById("button3")
let sidebutton1 = document.getElementById("sidebutton1")
let sidebutton2 = document.getElementById("sidebutton2")
let sidebutton3 = document.getElementById("sidebutton3")




function function3(){
    console.log(colour)
   if(colour.style.backgroundColor=="white"){
    console.log("if")
    colour.style.backgroundColor="black";
    textcolour.style.color="white"
    textcolour2.style.color="white"
    footer.style.background ="rgb(31, 40,51)"
    header.style.background ="rgb(31, 40,51)"
    sidenav.style.background ="rgb(31, 40,51)" 
    button3.style.backgroundColor="black"
    button3.style.color="white"
    sidebutton1.style.backgroundColor="black"
    sidebutton1.style.color="white"
    sidebutton2.style.backgroundColor="black"
    sidebutton2.style.color="white"
    sidebutton3.style.backgroundColor="black"
    sidebutton3.style.color="white"
    



}
   else{
    console.log("else")
    colour.style.backgroundColor="white";
    textcolour.style.color="black"
    textcolour2.style.color="black"
    footer.style.background ="grey"
    header.style.background ="grey"
    sidenav.style.background ="grey"
    button3.style.backgroundColor="grey"
    button3.style.color="white"
    sidebutton1.style.backgroundColor="grey"
    sidebutton1.style.color="black"
    sidebutton2.style.backgroundColor="grey"
    sidebutton2.style.color="black"
    sidebutton3.style.backgroundColor="grey"
    sidebutton3.style.color="black"
}
    
}

let button2=document.getElementById("button3").addEventListener("onclick",function1)

