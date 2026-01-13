import { Container } from "./styles";
import TusharSharma from "../../assets/TusharSharma.png";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import NodejsIcon from "../../assets/nodejs.png";
import tailwindIcon from "../../assets/tailwind.png";
export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
         Hi there! I'm Tushar Sharma, a BTech student at Maharaja Agrasen Institute of Technology, passionate about learning Data Structures & Algorithms and building modern web applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I focus on mastering data structures & algorithms and building responsive, efficient web applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor of Technology (BTech)</h4>
            <p>Maharaja Agrasen Institute of Technology, delhi | August 2024 - Present</p>
            <p>9.10CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
              <div className="experience">
        <h3>Experience:</h3>
        <h4>DSA Co-Head</h4>
        <p>BizByte Tech Society | Maharaja Agrasen Institute of Technology</p>
        <p>Delhi, India</p>
      </div>

        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={NodejsIcon}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          
          
         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={tailwindIcon} alt="tailwind" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={TusharSharma} alt="Tushar Sharma" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
