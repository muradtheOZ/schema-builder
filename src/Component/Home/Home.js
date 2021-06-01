import React from 'react';
import { Container, Tab,Row,Col, Nav,Item } from 'react-bootstrap';
import About from './SubPages/About/About';
import Overview from './SubPages/Overview';
import "./Home.css";

const Home = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="">
        <Row  className= "ml-2 pt-4">
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="itemBorder">
                <Nav.Link className="text-primary" eventKey="first">About</Nav.Link>
              </Nav.Item>
              <Nav.Item className="itemBorder">
                <Nav.Link className="text-primary"  eventKey="second">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item className="itemBorder">
                <Nav.Link className="text-primary" eventKey="third">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <About/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Overview/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
};

export default Home;