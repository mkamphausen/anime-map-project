import React, { useState } from "react";
//import components
import AddplaceForm from './AddPlaceForm';
import LoginHeader from "./LoginHeader"
import Search from "./Search"
//import boostrap
import { Tabs, Tab } from 'react-bootstrap';
//import react icons
import { IoPersonSharp, IoSearchSharp, IoDuplicateSharp } from "react-icons/io5";
//import Auth
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const SidebarTab = ({addPlace, places, animeCollection }) => {
    const [key, setKey] = useState('search');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    if (user) {
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{'display': 'flex', 'flex-direction': 'row', 'justify-content':'space-evenly', }}
        >
            <Tab eventKey="search" title={<IoSearchSharp/>} style={{'flex':'1 0 auto'}}>
                <Search></Search>
            </Tab>
            <Tab eventKey="profile" title={<IoPersonSharp/>} style={{'flex':'1 0 auto'}}>
                <LoginHeader/>
            </Tab>
            <Tab eventKey="add" title={<IoDuplicateSharp/>} style={{'flex':'1 0 auto'}}>
                <AddplaceForm 
                addPlace={addPlace}
                places={places}
                animeCollection={animeCollection}
                />
            </Tab>
        </Tabs>
    );
    } else {
        return (
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            style={{'display': 'flex', 'flex-direction': 'row', 'justify-content':'space-evenly', }}
            >
                <Tab eventKey="search" title={<IoSearchSharp/>} style={{'flex':'1 0 auto'}}>
                    <Search></Search>
                </Tab>
                <Tab eventKey="profile" title={<IoPersonSharp/>} style={{'flex':'1 0 auto'}}>
                    <LoginHeader/>
                </Tab>
            </Tabs>
        );  
    }
}

export default SidebarTab;