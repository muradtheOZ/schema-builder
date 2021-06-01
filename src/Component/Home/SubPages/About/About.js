import { Tab } from "bootstrap";
import React from "react";
import { Tabs } from "react-bootstrap";
import Coustomer from "./AboutSubs/Coustomer";
import MainGoal from "./AboutSubs/MainGoal";
import Team from "./AboutSubs/Team";

const About = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Main Goal">
        <MainGoal/>
      </Tab>
      <Tab eventKey="profile" title="Team">
        <Team/>
      </Tab>
      <Tab eventKey="contact" title="Customer" >
      <Coustomer/>
      </Tab>
    </Tabs>
  );
};

export default About;
