import {gsap} from "gsap";

export const menuAnimation = new gsap.timeline({paused:true});
menuAnimation.to("#nav-container",{alpha:1, duration:0.5});