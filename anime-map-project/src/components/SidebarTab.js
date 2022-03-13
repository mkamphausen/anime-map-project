import React, { useState } from "react";

import AddplaceForm from './AddPlaceForm';

import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';

import { IoPersonSharp, IoSearchSharp, IoDuplicateSharp } from "react-icons/io5";

const SidebarTab = ({addPlace}) => {
    const [key, setKey] = useState('search');

    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{'display': 'flex', 'flex-direction': 'row', 'justify-content':'space-evenly', 'align-self':'stretch' }}
        >
            <Tab eventKey="serach" title={<IoSearchSharp/>} style={{'width':'100px','flex':'1 0 auto'}}>
                test1
            </Tab>
            <Tab eventKey="profile" title={<IoPersonSharp/>} style={{'flex':'1 0 auto'}}>
                test2
            </Tab>
            <Tab eventKey="add" title={<IoDuplicateSharp/>} style={{'flex':'1 0 auto'}}>
                <AddplaceForm addPlace={addPlace}/>
            </Tab>
        </Tabs>
    );
}

export default SidebarTab;