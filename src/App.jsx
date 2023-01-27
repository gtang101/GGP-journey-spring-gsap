import { useEffect, useRef } from 'react';
import oneABackground from './img/1A_Gradient-background.png';
import oneDBackground from './img/1D_Gradient-background.png';
import twoBackground from './img/2_Gradient-background.png';
import oneAGirl from './img/1A_Girl-and-reflection.png';
import oneDGirl from './img/1D_Art.png';
import twoGirl from './img/2_Girl.png';
import twoIcon1 from './img/2_Book.png';
import twoIcon2 from './img/2_Fist.png';
import twoIcon3 from './img/2_Global-girl-globe.png';
import twoStars from './img/2_stars.png';
import twoDoor from './img/2_door.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  
  const ref = useRef();
  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".twoIcon"), {
      scale: 0,
      opacity: 0,
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: element.querySelector(".pageThree"),
        scrub: true,
        start: "top center",
        end: "top top"
      }
    });
  }, []);

  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, {scale: 1.3 });
  // } ;

  // const onLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, {scale: 1 });
  // };

  return (
    <div ref={ref}>
      <Parallax pages={3}>
      {/* Page 1 */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${oneABackground})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={ {start: 0.2, end: 0.7} }
          className={"flex flex-center}"}>
          <div className="text-content-container align-right">
            <h2>Isolation and lack of independence</h2>
            <p>Often, our girls experience a lack of independence and have limited access to the outside world. Many girls in India are not able to travel on their own to anything outside the house. The majority of our girls do not have their own phones so rely on fathers and brothers. Their worlds are often quite isolated, involving just school and home, and they have little access to extracurricular activities or the internet.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.4}
          speed={-0.1}>
          <img className="align-left" src={oneAGirl} alt="" />
        </ParallaxLayer>

        {/* Page 2 */}
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2.3}
          style={{
            backgroundColor: "#131f51"
          }}
        ></ParallaxLayer>
        
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1.7}
          style={{
            backgroundImage: `url(${oneDBackground})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>


        <ParallaxLayer
          sticky={ {start: 1.6, end: 1.} }
          className={"flex flex-center}"}>
          <div className="text-content-container align-left">
            <h2>Political unrest and instability</h2>
            <p>Many girls, like our girls from Haiti, can be dealing with political unrest and instability which plays itself out in the form of violence in the streets.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.2}>
            <img className="align-right" src={oneDGirl} alt="" />
        </ParallaxLayer>
        
        {/* Page 3 */}
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${twoBackground})`,
            backgroundSize: 'cover',
          }}
          className={"pageThree"}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={0.3}
          className={"flex flex-center}"}>
          <div className="text-content-container align-right dark-bg">
            <h2>2. Girls are given an opportunity</h2>
            <p>Girls are given an opportunity to become a part of the Global Girl Ecosystem for Social Change. They begin their journey with a three-month facilitated leadership programme called the Global Girl Leadership Initiative.</p>

            <p>Attending the Global Girl Leadership Initiative is often the first time our girls have an opportunity to:</p>
            <ul>
              <li>Have an activity that is their own</li>
              <li>Learn about leadership</li>
              <li>Meet and connect with girls from other parts of the world</li>
              <li>Participate in an international education program in their own language</li>
            </ul>
            <p>Over 12 weeks, our girls meet weekly for 2 hour long learning sessions. The curriculum is delivered by a local partner using one computer. A weekly video from Julia is also shown with subtitles in local language. The girls do leadership activities, have critical discussions and do research.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.3}
          speed={0.6}>
          <img className="align-left" src={twoDoor} alt=""/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.4}
          speed={0.7}
          style={{
            width: '30%',
            marginLeft: '20%',
            marginTop: '10%'
          }}>
            <img className="align-left" src={twoGirl} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.3}
          style={{
            width: '20%',
            marginLeft: '20%'
          }}>
            <div className="relative">
              <img id="twoOne" className="absolute twoIcon" src={twoIcon1} alt="" />
              <img id="twoTwo" className="absolute twoIcon" src={twoIcon2} alt="" />
              <img id="twoThree" className="absolute twoIcon" src={twoIcon3} alt="" />
            </div>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2.4}
          speed={0.3}
          style={{
            width: '20%',
            marginLeft: '3%',
          }}>
            
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.3}
          style={{
            width: '20%',
            marginLeft: '15%',
          }}>
            
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={2.2}
          speed={0.8}>
            <img className="align-left" src={twoStars} alt=""/>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
