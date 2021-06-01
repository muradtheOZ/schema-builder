import { Tab } from 'bootstrap';
import React from 'react';
import { Tabs } from 'react-bootstrap';
import CustomerNaming from './CustomerSubs/CustomerNaming';
import Field from './CustomerSubs/Field';
import Index from './CustomerSubs/Index';

const Customer = () => {
    return (
        <Tabs
        defaultActiveKey="customer"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
        <Tab eventKey="customer" title="Customer">
          <CustomerNaming/>
        </Tab>
        <Tab eventKey="field" title="Field">
          <Field/>
        </Tab>
        <Tab eventKey="index" title="Index" >
        <Index/>
        </Tab>
      </Tabs>
    );
};

export default Customer;