const HAMBURGER = ID("hamburger");
const INNERLINKS = ID("inner-links");
const SYMBOLX = ID("symbolx");
const LEFTARROW = ID("left-arrow");
const RIGHTARROW = ID("right-arrow");

// const PLAYER = document.querySelector(".player-box");
let ScrollBox = document.querySelector(".develop-inner");
let translateValue = 0;



function Hamburger() {
    INNERLINKS.style.overflow = "";
    HAMBURGER.style.display = "none";
	INNERLINKS.style.height = "155px";
    SYMBOLX.style.display = "block";
}
function xsymbol(){
    HAMBURGER.style.display = "block";
    SYMBOLX.style.display = "none";
	INNERLINKS.style.height = "0px";
}
function developerScrollRight() {
    if(translateValue <= -80){
        translateValue = 0;
    }
    else{
        translateValue -= 20;
    }
    ScrollBox.style.transform = `translateX(${translateValue}%)`;
}
function developerScrollLeft() {
    if(translateValue != 0){
        translateValue += 20;
    }
    
    ScrollBox.style.transform = `translateX(${translateValue}%)`;
}

setInterval(developerScrollRight, 3000);

HAMBURGER.addEventListener("click",()=>{
	Hamburger();
});
SYMBOLX.addEventListener("click",()=>{
	xsymbol();
});
RIGHTARROW.addEventListener("click",()=>{
    developerScrollRight();
});
LEFTARROW.addEventListener("click",()=>{
    developerScrollLeft();
});



