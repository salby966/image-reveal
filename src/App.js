import React, {useRef, useEffect} from 'react';
import "./App.scss";
import Newyork from './images/new-york.webp';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite, Power2 } from 'gsap';
import Half from './components/Half';
import Move from './components/Move';

const App = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite()

  useEffect(() => {
    tl.to(container, 0, {css: {visibility:"visible"} });
    tl.to(imageReveal, 1.4, {width: "0%", ease: Power2.easeInOut});
    tl.from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.6})
  });
  return(
    <section className="main">
      <div ref={el => (container = el)} className="container">
        <>
          <div className="img-container">
            <img
            ref={el => (image = el)} alt="people" src={Newyork} />
          </div>
        </>
      </div>
      <Half />
      <Move />
    </section>
  );
};

export default App;