import {gsap} from "gsap";

gsap.set(".burgerlines",{transformOrigin:"center"});

export const burgerTL = new gsap.timeline({paused:true});

const topTL = new gsap.timeline();
topTL.to(".burgerlines:nth-child(1)",{duration:0.2, y:"-=8"})
     .to(".burgerlines:nth-child(1)",{duration:0.2, rotation:45});

const middleTL = new gsap.timeline();
middleTL.to(".burgerlines:nth-child(2)",{duration:0.2, scale:0});

const bottomTL = new gsap.timeline();
bottomTL.to(".burgerlines:nth-child(3)",{duration:0.2, y:"+=8"})
        .to(".burgerlines:nth-child(3)",{duration:0.2, rotation:-45});

burgerTL.add(topTL,"burger")
        .add(middleTL,"burger")
        .add(bottomTL,"burger");