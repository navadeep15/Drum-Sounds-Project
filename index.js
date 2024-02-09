var numofButtons=document.querySelectorAll(".drum").length;
for(let i=0;i<numofButtons;i++){
    // document.querySelectorAll("button")[i].addEventListener("click",handleClick);
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);  //WE CAN USE THIS ONE OR THE ABOVE ONE.
    //'THIS' REFERS TO THE BUTTON THAT GOT CLICKED 
}
//THE BELOW FUNCTION IS FOR WHEN THE BUTTON IS CLICKED IN THE WEB PAGE AND TO PLAY THE CORRESPONDING SOUND.
function handleClick(){
    //this.style.color="white";    TO MAKE THE COLOR OF THE CLIKED BUTTON WHITE.
    
    let buttonInnerhtml=this.innerHTML;  //'THIS' REFERS TO THE BUTTON THAT GOT CLICKED 
    makeSound(buttonInnerhtml);
}
//THE BELOW FUNCTION IS FOR WHEN THE BUTTON IS PRESSED IN THE USER'S KEYBOARD.
document.addEventListener("keypress",function(event){
    makeSound(event.key);
});
//THIS BELOW ONE CAN ALSO BE USED IN ALTERNATIVE TO THE ABOVE TWO LINES.
// document.addEventListener("keypress",keyhit);
// function keyhit(event){
//     makeSound(event.key);
// }

function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(buttonInnerhtml);
    }
}



