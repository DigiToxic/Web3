import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1, ProjectCard2 } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import website1 from "../assets/img/website1.png";
import website2 from "../assets/img/website2.png";
import website3 from "../assets/img/website3.png";
import website4 from "../assets/img/website4.png";
import website6 from "../assets/img/website6.PNG";
import website7 from "../assets/img/website7.PNG";
import website8 from "../assets/img/website8.PNG";
import website9 from "../assets/img/website9.PNG";
import website10 from "../assets/img/Website10.PNG";
import website11 from "../assets/img/Website11.PNG";
import website12 from "../assets/img/website12.PNG";
import website13 from "../assets/img/website13.PNG";
import website14 from "../assets/img/website14.PNG";
import website15 from "../assets/img/website15.PNG";
import website16 from "../assets/img/website16.PNG";
import website17 from "../assets/img/website17.PNG";
import website18 from "../assets/img/website21.png";
import website19 from "../assets/img/website20.png";

export const Projects = () => {
  const projects1 = [
    {
      title: "GHL landing page",
      description: "KingsWood",
      imgUrl: website1,
      link: "https://kingswoodwillsfpl.co.uk/",
    },
    {
      title: "GHL landing page",
      description: "Lanai outdoor",
      imgUrl: website2,
      link: "https://app.gohighlevel.com/v2/preview/SJmQKbhB0Mk7bWy9eKBj?notrack=true",
    },
    {
      title: "GHL landing page",
      description: "Business energy claims",
      imgUrl: website4,
      link: "https://app.gohighlevel.com/v2/preview/fTdLF3wzsBqZXFrabesO",
    },
    {
      title: "Design Dynasty",
      description: "Agency request",
      imgUrl: website3,
      link: "https://art-psi-nine.vercel.app/",
    },
    {
      title: "Lethal Lizards",
      description: "NFT Project #4",
      imgUrl: website6,
      link: "https://lethallizards.com/",
    },
    {
      title: "We are exhausted",
      description: "NFT Project #5",
      imgUrl: website7,
      link: "https://www.exhaustednft.io/",
    },
    {
      title: "Casper Agency",
      description: "Agency request",
      imgUrl: website8,
      link: "https://caspers-labs.vercel.app/",
    },
    {
      title: "DeVinci",
      description: "My own Dev Agency",
      imgUrl: website9,
      link: "https://devinci.vercel.app/",
    },
    {
      title: "Gulo",
      description: "NFT Project #6",
      imgUrl: website10,
      link: "https://gulo-psi.vercel.app/",
    },
    {
      title: "W3bster",
      description: "Agency request",
      imgUrl: website11,
      link: "https://www.w3bster.io/",
    },
    {
      title: "DeVinci-AI",
      description: "My own AI Agency",
      imgUrl: website17,
      link: "https://devinci-ai.vercel.app/",
    },
    {
      title: "Crutox",
      description: "Website for their mobile app",
      imgUrl: website18,
      link: "https://crutox.com/",
    },
  ];

  const projects2 = [
    {
      title: "NFT gated",
      description: "Website gated by a nft",
      imgUrl: website12,
      link: "https://nft-gated-showcase.vercel.app/",
    },
    {
      title: "Early token analytic",
      description: "Analysing shitcoin token",
      imgUrl: website13,
      link: "https://www.kharks.io/",
    },
    {
      title: "Website similitude checker",
      description: "Comparing two website design/structure with their url link",
      imgUrl: website14,
      link: "https://design-checker.vercel.app/",
    },
    {
      title: "Website authenticator",
      description: "Very small twitter clone with metamask auth",
      imgUrl: website15,
      link: "https://metamask-authentification.vercel.app/",
    },
    {
      title: "Web Game",
      description: "Space Invader like game",
      imgUrl: website16,
      link: "https://web-space-game.vercel.app/",
    },
    {
      title: "Telegram bot",
      description: "I made multiple tools for telegram bot",
      imgUrl: website19,
    },
  ];

  const projects3 = [
    {
      title: "BasicPublicOnly",
      description: "Fully public mint",
      imgUrl: projImg4,
    },
    {
      title: "BasicWhitelistOnly",
      description: "Fully whitelist mint",
      imgUrl: projImg5,
    },
    {
      title: "PublicDynamicPrice",
      description: "Fully public mint with 1 free and the rest payable",
      imgUrl: projImg6,
    },
    {
      title: "WL+PublicDynamicPrice",
      description: "Normal mint with 1 free and the rest payable",
      imgUrl: projImg7,
    },
    {
      title: "Whitelist+Public",
      description: "Normal mint",
      imgUrl: projImg8,
    },
    {
      title: "ERC-20 + taxes",
      description: "ERC-20",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" className="NavFirst">
                    Website request
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects request</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Smart contract</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>
                    This section showcases all the websites I have developed!
                  </p>
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard1 key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    This section showcases all the tools and bots I have
                    developed!
                  </p>
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard2 key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    This section showcases all the types of smart contracts I
                    have already developed.
                  </p>
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard2 key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};

export default Projects;
