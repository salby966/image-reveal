import "./Move.css";
import People from "../images/people.webp";
import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { Power2 } from "gsap";

class Move extends React.Component{
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);
        //move gambar
        // let tween = gsap.to(".move", {
        //     x: 200,
        //     ease: "none"
        // }),
        // st = ScrollTrigger.create({
        //     trigger: ".move",
        //     start: "top top",
        //     end:"bottom 700px",
        //     markers: true,
        //     scrub: true,
        //     toggleActions: "start none none none",
        //     animation: tween
        // });
        gsap.to(".move", {
            scrollTrigger: {
                trigger: ".move",
                scrub: true,
                // pin: true,
                start: "top 70%",
                end : "bottom 30%",
                markers: true,
                // toggleActions: "restart"
            },
            x: 400,
            ease: "linear",
            // duration: 3
        });

        // let move = gsap.timeline();
        // ScrollTrigger.create({
        //     animation: move,
        //     trigger: ".scrollElement",
        //     start: "top top",
        //     end:"bottom 700px",
        //     markers: true,
        //     scrub: 1,
        // });
        // move.to("#move", {x:200}, 50 )

        //reveal gambar
        let revealContainers = document.querySelectorAll(".reveal");

        revealContainers.forEach((container) => {
          let image = container.querySelector("img");
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              toggleActions: "restart none none reset"
            }
          });
        
          tl.set(container, { autoAlpha: 1 });
          tl.from(container, 1.5, {
            xPercent: -100,
            ease: Power2.out
          });
          tl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
          });
        });

        //line Animasi
        gsap.from(".line-1", {
            scrollTrigger: {
              trigger: ".line-1",
              scrub: true,
              start: "top bottom",
              end: "top top"
            },
            scaleX: 0,
            transformOrigin: "left center", 
            ease: "none"
          });

    }
    render(){
        return (
            <>
            {/* <div className="move">
                    <img width="200px" height="200px" src={People} />
            </div>
            */}
            <div className='container'>
                    <div className='move'>
                    <img src={People} />
            </div>
            </div>
            <div className='container'>
                <span className="line line-1"></span>
            <div className='reveal'>
            <img width="200px" height="200px" src={People} />
            </div>
            </div>
            <div className='container'>
            <div className='reveal'>
            <img width="200px" height="200px" src={People} />
            </div>
            </div>
            <div className='container'>
            <div className='reveal'>
            <img width="200px" height="200px" src={People} />
            </div>
            </div>
            </>
        );
    }
}
export default Move;
