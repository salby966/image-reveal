import React from 'react';
import "./Half.css";
import Newyork from "../images/new-york.webp";
import People from "../images/people.webp";
import ScrollOut from "scroll-out";
import $ from 'jquery';


$(document).ready(function($){
    console.clear();

    ScrollOut({
        cssProps:{
            visibleY: true,
            viewportY: true,
            scrollPercentY: true
        },
        threshold:0.2
    });
});

const Half = () =>{
    return(
        <div className="scrollhalf">
            <div className="scrollhalf_group" data-scroll>
                <div className="scrollhalf_image">
                    <img scr={People} />
                </div>
                <div className="scrollhalf_content">
                    <h1>Lorem Ipsum</h1>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
            </div>

            <div className="scrollhalf_group" data-scroll>
                <div className="scrollhalf_image">
                    <img src={Newyork} />
                </div>
                <div className="scrollhalf_content">
                    <h1>Why do we use it?</h1>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>
        

            <div className="scrollhalf_group" data-scroll>
                <div className="scrollhalf_image">
                    <img src={People} />
                </div>
                <div className="scrollhalf_content">
                    <h1>Where can I get some?</h1>
                    here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </div>
            </div>
        </div>
    )
}

export default Half;