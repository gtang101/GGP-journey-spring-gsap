import { useRef } from 'react';
import topImg from './img/top-img.png';
import oneSvg from './img/1_svg.svg';
import twoSvg from './img/2_svg.svg';
import threeSvg from './img/3_svg.svg';
import fourSvg from './img/4_svg.svg';
// import oneABackground from './img/1A_Gradient-background.png';
// import oneDBackground from './img/1D_Gradient-background.png';
// import twoBackground from './img/2_Gradient-background.png';
// import oneAGirl from './img/1A_Girl-and-reflection.png';
// import oneDGirl from './img/1D_Art.png';
// import twoGirl from './img/2_Girl.png';
// import twoIcon1 from './img/2_Book.png';
// import twoIcon2 from './img/2_Fist.png';
// import twoIcon3 from './img/2_Global-girl-globe.png';
// import twoStars from './img/2_stars.png';
// import twoDoor from './img/2_door.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from "react";

function App() {
  
  const ref = useRef();
  
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.from(element.querySelector(".twoIcon"), {
  //     scale: 0,
  //     opacity: 0,
  //     x: 0,
  //     y: 0,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: element.querySelector(".pageThree"),
  //       scrub: true,
  //       start: "top center",
  //       end: "top top"
  //     }
  //   });
  // }, []);

  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, {scale: 1.3 });
  // } ;

  // const onLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, {scale: 1 });
  // };

  return (
    <div>
      <Parallax pages={9} ref={ref}>
      {/* Background */}
        <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundColor: `var(--bg-color-2)`,
            }}></ParallaxLayer>

          <ParallaxLayer
          offset={6}
          speed={1}
          factor={5}
          style={{
            backgroundColor: `var(--bg-color-3)`,
          }}
        ></ParallaxLayer>

      {/* Page 1 */}

        <ParallaxLayer
          className='center-grid'
          offset={0.1}
          speed={0}>
          <h1>The Journey of a Girl</h1>
          <h2>Scroll to learn more</h2>
        </ParallaxLayer>

        <ParallaxLayer
          className='center-grid'
          id='top-img'
          offset={0.2}
          speed={-0.3}>
          <img src={topImg} alt=""/>
        </ParallaxLayer>

        <ParallaxLayer
          className='center-grid'
          offset={1.2}
          speed={0.4}>
          <img id='one-svg' src='https://drive.google.com/uc?id=1SKEoISOf__jkQ794Jnp78-XRySgU9toq' alt=""/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.2}
          className={"center-grid"}>
          <div className="text-content-container">
            <h2>1. What a girl's life is like</h2>
            <p>The girls who participate in the Global Girl Project Leadership Initiative are keen to make the most of all opportunities. They are resilient, determined and powerful.</p>
            <p>However, they also face many challenges and barriers:</p>
            <h3>Isolation and lack of independence</h3>
            <p>Often, our girls experience a lack of independence and have limited access to the outside world. Their worlds are often quite isolated, involving just school and home. They have little access to extracurricular activities, mobile phones or the internet.</p>
            <h3>Gendered roles</h3>
            <p>Frequently girls are subject to gendered roles in society. This means they are typically expected to fill the role of a mother and a wife, or certain types of employment. Many girls do want to be mothers and wives. However, there are additional roles girls want to fill but cannot because of gendered expectations.</p>
            <h3>Political unrest and instability</h3>
            <p>Many girls, like our girls from Haiti, can be dealing with political unrest and instability which plays itself out in the form of violence in the streets.</p>
          </div>
        </ParallaxLayer>

        {/* Page 2 */}
        
        <ParallaxLayer
          className='center-grid'
          offset={2.1}
          speed={0.1}>
          <img id='two-svg' src={twoSvg} alt=""/>
        </ParallaxLayer>

         <ParallaxLayer
          sticky={ {start: 2.7, end: 2.7} }
          className={"center-grid"}>
          <div className="text-content-container">
            <h2>2. Girls are given an opportunity</h2>
            <p>Girls are given an opportunity to become a part of the Global Girl Ecosystem for Social Change. They begin their journey with a leadership programme called the Global Girl Leadership Initiative. Attending is often the first time our girls have an opportunity to:</p>
            <ul>
              <li>have an activity that is their own</li>
              <li>learn about leadership</li>
              <li>meet and connect with girls from other parts of the world</li>
              <li>participate in an international education program in their own language</li>
            </ul>
          </div>
        </ParallaxLayer>
        
        {/* Page 3 */}

        <ParallaxLayer
          className='center-grid'
          offset={3.1}
          speed={-0.1}>
          <img id='three-svg' src={threeSvg} alt=""/>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={ {start: 3.6, end: 3.7} }
          className={"center-grid"}>
          <div className="text-content-container">
            <h2>3. Critical engagement with community issues</h2>
            <p>Global Girl Project encourages girls to think critically about their role in their community, including their place in religion, work, and home, and how it differs from men and boys. This is often the first time girls have been asked for their opinions, and they are encouraged to research and discuss issues they care about in their community. The organisation does not advise on which issues to choose, ensuring that change comes from within the community.</p>
            <p>Finally, the girls collaborate to select one issue and organise a community event, requiring discussion, compromise, and decision-making as a group.</p>
          </div>
        </ParallaxLayer>
        
        {/* Page 4 */}

        <ParallaxLayer
          className='center-grid'
          offset={4.1}
          speed={-0.1}>
          <img id='four-svg' src={fourSvg} alt=""/>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={ {start: 4.7, end: 4.7} }
          className={"center-grid"}>
          <div className="text-content-container">
            <h2>4. Redefinition of leadership & Voice</h2>
            <p>This part of our program helps girls to reframe who they perceive as leaders, and redefine what they think leadership means. From a common perception that only males or corrupt politicians are leaders, the girls broaden their understanding of what leadership means.</p>
            <p>The girls are introduced to different elements of voice: listening, speaking, and writing. We also introduce them to social media as a tool for change. Girls practice listening to each other and speaking about themselves and their ideas. This is often the first time they have been asked to stand up and speak for and about themselves.</p>
            <div className='quote-block'>
              <p className='quote'>“Leadership is helping others.”</p>
              <p className='quote-credit'>– Clyfane, facilitator in Haiti</p>
            </div>
          </div>
        </ParallaxLayer>

        {/* Page 5 */}

        <ParallaxLayer
          className='center-grid'
          offset={5.3}
          speed={0.2}>
          <div className="placeholder center-grid">This is a placeholder</div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={ {start: 5.7, end: 5.7} }
          className={"center-grid"}>
          <div className="text-content-container">
            <h2>5. Actioning ideas & changing what people think girls can do</h2>
            <p>Our girls organise events on self-chosen social issues, creating a platform for discussions with community members on important topics such as early marriage, education access, gang violence, drug use, waste disposal, and violence against women and girls.</p>
            <p>The events foster a change in attitude towards girls in families and communities, with lasting effects on beliefs about what girls can achieve. For example, two fathers in India changed their minds about their daughters' future after witnessing their event leadership, allowing them to complete school or delay marriage, a major shift from previous ideas of their daughters' role and future. These events are often the first time community members see girls leading and realise the potential for their leadership.</p>
          </div>
        </ParallaxLayer>
        
        {/* Page 6 */}

        <ParallaxLayer
          className='center-grid'
          offset={6.3}
          speed={0.1}>
          <div className="placeholder center-grid">This is a placeholder</div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={ {start: 6.7, end: 6.8} }
          className={"center-grid"}>
          <div className="text-content-container">
            <h2>6. International network & ecosystem</h2>
            <p>Global Girl Project has a lasting and sustainable impact as our girls make changes worldwide with support from each other. They join Global Graduates Connect (GGC) Network, a dynamic ecosystem offering opportunities to make an impact, led by the girls.</p>
            <p>This includes: project grants for girls to run local initiatives, storytelling to share experiences, perspectives and ideas, networking, and leadership opportunities through internships, teaching, supporting others, or advisory roles on committees.</p>
            <div className='quote-block'>
              <p className='quote'>“The girls see girls around the world doing different things, and they know that they can do the same.”</p>
              <p className='quote-credit'>– Clyfane, facilitator in Haiti</p>
            </div>
          </div>
        </ParallaxLayer>
        
        {/* Page 7 */}

        <ParallaxLayer
          className='center-grid'
          offset={7.6}
          speed={0.1}>
          <div className="placeholder center-grid">This is a placeholder</div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={ {start: 8, end: 8.2} }
          className={"center-grid"}>
          <div className="text-content-container">
            <h2>7. Impact</h2>
            <p>Our partners and program create significant impact: boosting our girls' confidence and self-worth, developing their leadership skills, and empowering them to lead in their communities. They use their voice, speaking up about their needs and concerns, turning their ideas into reality, connecting them to a global network of girls for inspiration and support. They now see themselves as leaders!</p>
            <div className='quote-block'>
              <p className='quote'>"Now I think I can achieve anything that I want to. Being a girl, it’s our responsibility to make our society a better place to live."</p>
              <p className='quote-credit'>— Global Girl Graduate</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start: 0.3, end: 8 }}
        className={"flex slide-control"}>
          <div className="control-group flex flex-column">
            <div className="control-item" onClick={() => ref.current.scrollTo(1)}>1</div>
            <div className="control-item" onClick={() => ref.current.scrollTo(2)}>2</div>
            <div className="control-item" onClick={() => ref.current.scrollTo(3)}>3</div>
            <div className="control-item" onClick={() => ref.current.scrollTo(4)}>4</div>
            <div className="control-item" onClick={() => ref.current.scrollTo(5)}>5</div>
            <div className="control-item" onClick={() => ref.current.scrollTo(6)}>6</div>
            <div className="control-item" onClick={() => ref.current.scrollTo(7.5)}>7</div>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
