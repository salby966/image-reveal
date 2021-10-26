import "./Horizontal.css";
import React from 'react';
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";


class Horizontal extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger)

        let container = document.getElementById("container")
        
        gsap.to(container, {
          xPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: true,
            snap: true,
            end: () => "+=" + container.offsetWidth,
          }
        })
        
    }
    render(){
        return (

            <div id="container">
                <div class="module green"></div>
                <div class="module yellow"></div>
          </div>
        );
    }
}
export default Horizontal;
