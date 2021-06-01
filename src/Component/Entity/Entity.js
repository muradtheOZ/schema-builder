import React from 'react';
import { Container, Tab,Row,Col, Nav,Item } from 'react-bootstrap';
import Customer from './SubPages/Customer/Customer';
import Post from './SubPages/Post/Post';
import User from './SubPages/User/User';

const Entity = () => {
    return (
        <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="">
        <Row  className= "ml-2 pt-4">
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="itemBorder">
                <Nav.Link className="text-primary" eventKey="first">Customer</Nav.Link>
              </Nav.Item>
              <Nav.Item className="itemBorder">
                <Nav.Link className="text-primary"  eventKey="second">Post</Nav.Link>
              </Nav.Item>
              <Nav.Item className="itemBorder">
                <Nav.Link className="text-primary" eventKey="third">User</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Customer/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Post/>
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                <User/>
              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
        </div>
    );
};

export default Entity;