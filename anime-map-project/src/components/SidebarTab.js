import React, { useState } from "react";
//import components
import AddplaceForm from './AddPlaceForm';
// import LoginHeader from "./LoginHeader"
import Data from "./Data"
//import boostrap
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';
//import react icons
import { IoPersonSharp, IoSearchSharp, IoDuplicateSharp } from "react-icons/io5";

const SidebarTab = ({addPlace, loadSamplePlaces}) => {
    const [key, setKey] = useState('search');

    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{'display': 'flex', 'flex-direction': 'row', 'justify-content':'space-evenly' }}
        >
            <Tab eventKey="search" title={<IoSearchSharp/>} style={{'flex':'1 0 auto'}}>
                <Data loadSamplePlaces={loadSamplePlaces}/>
            </Tab>
            <Tab eventKey="profile" title={<IoPersonSharp/>} style={{'flex':'1 0 auto'}}>
                {/* <LoginHeader/> */}
            </Tab>
            <Tab eventKey="add" title={<IoDuplicateSharp/>} style={{'flex':'1 0 auto'}}>
                <AddplaceForm addPlace={addPlace}/>
            </Tab>
        </Tabs>
    );
}

export default SidebarTab;