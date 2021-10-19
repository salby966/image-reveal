import React from 'react';
import "./Screen.css";
import gsap from 'gsap';


gsap.utils.toArray(".slick-nav").forEach((a, i) => {
    a.clickElem = document.querySelector(a.hash);
    a.offset = a.clickElem.offsetTop;
    a.height = a.clickElem.offsetHeight;
    a.addEventListener("click", e => {
      e.preventDefault();
      gsap.to(window, {scrollTo: a.offset + a.height * (i + 1)})
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-trigger",
      duration: 1.5,
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=3000",
      toggleActions: "restart pause resume pause"
    }
  });

  // Slides Scroll Animation
  tl.from(
      "[data-slide='1'] ", {
        opacity: 0.5,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )

    .to(
      "[data-slide='1'] ", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      "[data-slide='2'] ", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      "[data-slide='2']", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      "[data-slide='3']", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      "[data-slide='3']", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      "[data-slide='4']", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      "[data-slide='4'] ", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      "[data-slide='5']", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      "[data-slide='5']", {
        opacity: 0,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

    .from(
      "[data-slide='6']", {
        opacity: 0,
        duration: 1,
        stagger: 2
      },
      "+=1"
    )
    .to(
      "[data-slide='6']", {
        opacity: 0.5,
        duration: 1,
        stagger: 2,
        ease: "power4"
      },
      "+=10"
    )

const Screen = () => {
    return (
        <>
        <div className="vh"></div>
        <section className="scroll-trigger">
        <ul className="slick-dots classname-display" role="tablist">
            <li className="slick-slide slide-1" role="presentation" data-slide="1">
            <a href="#section1" className="slick-nav">2003</a>
            </li>
            <li className="slick-slide slide-2" role="presentation" data-slide="2">
            <a href="#section2" className="slick-nav">2004</a>
            </li>
            <li className="slick-slide slide-3" role="presentation" data-slide="3">
            <a href="#section3" className="slick-nav">2005</a>
            </li>
            <li className="slick-slide slide-4" role="presentation" data-slide="4">
            <a href="#section4" className="slick-nav">2008</a>
            </li>
            <li className="slick-slide slide-5" role="presentation" data-slide="5">
            <a href="#section5" className="slick-nav">2013</a>
            </li>
            <li className="slick-slide slide-6" role="presentation" data-slide="6">
            <a href="#section6" className="slick-nav">2020</a>
            </li>
        </ul>

        <div className="slide-container">
            <div id="section1" className="slide" data-slide="1">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2003-timeline-banner.png"
                alt="Outfitters 2003" />
            <h4>Outfitters is born with the vision to uplift the western fashion industry in Pakistan</h4>
            </div>

            <div id="section2" className="slide" data-slide="2">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2004-timeline-banner.png"
                alt="Outfitters 2004 - multi-city brand" />
            <h4>Outfitters is a multi-city brand</h4>
            </div>

            <div id="section3" className="slide" data-slide="3">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2021/03/outfitters-2005-timeline-banner-v2.png"
                alt="Outfitters 2005 - Womenswear" />
            <h4>The first collection for Outfitters Womenswear launches in stores</h4>
            </div>

            <div id="section4" className="slide" data-slide="4">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2008-timeline-banner.png"
                alt="Outfitters 2008 - Outfitters" />
            <h4>Outfitters Juniors is introduced, a trendy fashion line for kids</h4>
            </div>

            <div id="section5" className="slide" data-slide="5">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2013-timeline-desktop.jpg"
                alt="Outfitters 2013 - Ethnic" />
            <h4>Outfitters Stores becomes an umbrella company and launches the much awaited eastern wear brand, Ethnic, in
                addition to Outfitters</h4>
            </div>

            <div id="section6" className="slide" data-slide="6">
            <img className="timeline-banner desktop-img"
                src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-2020-timeline-banner.png"
                alt="Outfitters 2020 - Bespoke Studio" />
            <h4>Outfitters launches its largest flagship store in Lahore with Pakistan’s first Bespoke Studio</h4>
            </div>
        </div>
        </section>
    <div className="vh"></div>
    </>
    )
}

export default Screen;