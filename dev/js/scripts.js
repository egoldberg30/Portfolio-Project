import {gsap} from "gsap";
import {burgerTL} from "./burgerAnimation";
import {menuAnimation} from "./mobileMenu";
import {displayWindowSize} from "./mobileResizing.js"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const mainTL = gsap.timeline();


var burgerButton = document.querySelector("#hamburger_icon");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse(),
        menuAnimation.reverse(),
        canISeeMenu = false
    }
}

function burgerClose(){
    if(document.documentElement.clientWidth > 1024){
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);


let navButtons = document.querySelectorAll(".nav-links");

for (const button of navButtons){
    button.addEventListener("click", openCloseMenu);
}


function displayNav(){
    if(document.documentElement.clientWidth > 1024){
        gsap.set("#nav-container",{alpha:1});
    }
    else{
        gsap.set("#nav-container",{alpha:0});
    }
}



function zoomin() {
  const tl = gsap.timeline()
gsap.set("#process", {alpha:.5, scaleX:.8, scaleY: .8})
tl.to("#maintain-content", {alpha:1, scaleX:1, scaleY:1, scrollTrigger:{trigger: "#tri-photo", scrub:true}})
}
ScrollTrigger.defaults({
    toggleActions: "restart pause resume none",
    scrub: true
})




mainTL.add(zoomin());



window.addEventListener("resize", displayNav);
window.addEventListener("load", displayNav);
window.addEventListener("resize", burgerClose);

// listen to window resize
window.addEventListener("resize", displayWindowSize);

// check the window size on load
window.addEventListener('load', displayWindowSize);