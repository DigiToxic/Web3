import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";
import meter9 from "../assets/img/meter9.png";
import meter10 from "../assets/img/meter10.png";
import meter11 from "../assets/img/meter11.png";
import meter12 from "../assets/img/meter12.png";
import meter13 from "../assets/img/meter13.svg";
import meter14 from "../assets/img/meter14.png";
import meter15 from "../assets/img/meter15.png";
import meter16 from "../assets/img/meter16.png";
import meter17 from "../assets/img/meter17.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a full-stack developer, I can handle everything related to
                front-end and back-end with the tools listed below.<br /> Feel free to
                take a look!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Solidity</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter11} alt="" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="" />
                  <h5>Open AI api</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="" />
                  <h5>Voiceflow</h5>
                </div>
                <div className="item">
                  <img src={meter12} alt="" />
                  <h5>Go High Level</h5>
                </div>
                <div className="item">
                  <img src={meter13} alt="" />
                  <h5>Twilio api</h5>
                </div>
                <div className="item">
                  <img src={meter15} alt="" />
                  <h5>Zapier automation</h5>
                </div>
                <div className="item">
                  <img src={meter14} alt="" />
                  <h5>Image generating</h5>
                </div>
                <div className="item">
                  <img src={meter16} alt="" />
                  <h5>Make.com automation</h5>
                </div>
                <div className="item">
                  <img src={meter17} alt="" />
                  <h5>Flutterflow</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
