import React, { useState } from "react";

import AddplaceForm from './AddPlaceForm';

import { Tabs, Tab } from 'react-bootstrap';

import { IoPersonSharp, IoSearchSharp, IoDuplicateSharp } from "react-icons/io5";

const SidebarTab = ({addPlace}) => {
    const [key, setKey] = useState('search');

    return (
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="serach" title={<IoSearchSharp/>}>
        test1
      </Tab>
      <Tab eventKey="profile" title={<IoPersonSharp/>}>
        test2
      </Tab>
      <Tab eventKey="add" title={<IoDuplicateSharp/>}>
        <AddplaceForm addPlace={addPlace}/>
      </Tab>
    </Tabs>
    );
}

export default SidebarTab;