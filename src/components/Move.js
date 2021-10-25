import "./Move.css";
import People from "../images/people.webp";
import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { nodeName } from "jquery";

class Move extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: ".move",
            start: "top top",
            end:"bottom 500px",
            markers: true,
            scrub: 1,
        });
        // gsap.to(".move", {
        //     scrollTrigger: {
        //         trigger: ".move",
        //         start: "top top",
        //         end : "bootom 500px",
        //         markers: 1,
        //         scrub: true,
        //         // toggleActions: "restart"
        //     },
        //     x: 200,
        //     ease: "none",
        //     // duration: 3
        // });
    }
    render(){
        return (
            <div className="move">
                    <img width="200px" height="200px" src={People} />
            </div>
        );
    }
}
export default Move;

// ReactDom.render( <Move />, document.getElementById("root"));