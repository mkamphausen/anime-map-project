//import react
import React, { useState } from "react";
import ReactDOM from 'react-dom'
//import components
import Map from './Map'
//import helper functions
//import bootstrap
import { Button } from "react-bootstrap";




const Search = ({animeCollection, filter, updateFilterBuildings, updatefilterNature, updatefilterAnimeID }) => {

    const [natureButton, setNatureButton ] = React.useState(true);
    const [buildingButton, setBuildingButton ] = React.useState(true);
    const [natureMode, setNatureMode] = React.useState('primary');
    const [buildingMode, setBuildingMode] = React.useState('primary');

    const natureButtonHandler = () => {
        console.log("NATURE!!")
        if(natureButton){
            //will erase filter
            updatefilterNature( filter.buildings, false, filter.animeID)
            setNatureButton(false)
            setNatureMode('primary')
        }else{
            //set filter
            updatefilterNature(filter.buildings, true, filter.animeID)
            setNatureButton(true)
            setNatureMode('secondary')
        }
        console.log(natureMode)
        console.log(natureButton)
        // component.forceUpdate()
    }

    const buildingButtonHandler = () => {
        console.log("BUILDINGS!!")
        if(buildingButton){
            //will erase filter
            updateFilterBuildings(false, filter.nature, filter.animeID)
            setBuildingButton(false)
            setBuildingMode('primary')
        }else{
            //set filter
            updateFilterBuildings(true, filter.nature, filter.animeID)
            setBuildingButton(true)
            setBuildingMode('secondary')
        }
        console.log(buildingMode)
        console.log(buildingButton)
        // component.forceUpdate()
    }

    const animeSelectHandler = event => {
        console.log("ANIME!!")
        console.log(event.target.value)
        updatefilterAnimeID( filter.buildings, filter.nature, event.target.value )
        // component.forceUpdate()
    }

    return (
        <>
            <div className="searchContainer">
                <div className="searchButtonContainer">
                    <Button className="searchButton" variant={natureMode} onClick={natureButtonHandler}>natural sites</Button>
                    <Button className="searchButton" variant={buildingMode} onClick={buildingButtonHandler}>buildings</Button>
                </div>
                    <div>
                    <span>Anime für Filter auswählen:</span>
                    <select name="animeSelect" id="animeSelect" onChange={animeSelectHandler}>
                        <option value='' key='default' defaultValue>kein Filter</option>
                        {animeCollection.map((anime) => (
                            <option value={anime.id} key={anime.id}>{anime.title}</option>
                        )
                        )};
                    </select>
                </div>
            </div>
        </>
    )
}

export default Search;