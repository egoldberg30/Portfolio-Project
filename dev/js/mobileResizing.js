import { gsap } from "gsap";

export function displayWindowSize(){

   // check the view port view and see if the menu needs to be moved
   if(document.documentElement.clientWidth <= 1024){
    // console.log("hide");
    gsap.set("#nav-container",{right: 0});
    }
    else{
        // console.log("un-hide");
        gsap.set("#nav-container",{alpha:1});
    }

    if(document.documentElement.clientWidth > 1024){
        gsap.set("#nav-container",{alpha:1});
    }
}