import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1, ProjectCard2 } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import etherscan from "../assets/img/etherscan.png";
import website1 from "../assets/img/website1.png";
import website2 from "../assets/img/website2.png";
import website3 from "../assets/img/website3.png";
import website4 from "../assets/img/website4.png";
import website5 from "../assets/img/website5.PNG";
import website6 from "../assets/img/website6.PNG";

export const Projects = () => {
  const projects1 = [
    {
      title: "The Krakenz",
      description: "NFT Project #1",
      imgUrl: website1,
      link: "https://thekrakenz.com/",
    },
    {
      title: "Don't worry by faded",
      description: "NFT Project #2",
      imgUrl: website2,
      link: "https://itsfaded.com/",
    },
    {
      title: "The Coliseum",
      description: "Prototype website",
      imgUrl: website3,
      link: "https://flourishing-lebkuchen-f6d72a.netlify.app/",
    },
    {
      title: "Kotaro",
      description: "NFT Project #3",
      imgUrl: website4,
      link: "https://dulcet-tiramisu-18bcd1.netlify.app",
    },
    {
      title: "Snug Pass",
      description: "Minting interface + smart contract connection",
      imgUrl: website5,
      link: "https://snugpass.club/",
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Kraken smart contract",
      description: "Mainnet",
      imgUrl: etherscan,
      link: "https://etherscan.io/address/0x6f5e46abfc5c4bd49c4c2cfec15bfc79c84e1d6a",
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
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
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
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
                    Main Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Smart contract deploy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Smart contract</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>This section shows all the projects I have done myself</p>
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard1 key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    This section shows all the smart contract linked to projects
                  </p>
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard2 key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    This section shows all the type of smart contract I have
                    already done
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
