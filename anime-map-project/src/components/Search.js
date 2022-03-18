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
    const bla = filter.Buildings;
    const bli = filter.Nature;
    const blub = filter.AnimeID;

    const natureButtonHandler = () => {
        console.log("NATURE!!")
        if(natureButton){
            updatefilterNature( filter.buildings, false, filter.animeID)
            setNatureButton(false)
        }else{
            updatefilterNature(filter.buildings, true, filter.animeID)
            setNatureButton(true)
        }
        console.log(natureButton)
        // component.forceUpdate()
    }

    const buildingButtonHandler = () => {
        console.log("BUILDINGS!!")
        if(buildingButton){
            updateFilterBuildings(false, filter.nature, filter.animeID)
            setBuildingButton(false)
        }else{
            updateFilterBuildings(true, filter.nature, filter.animeID)
            setBuildingButton(true)
        }
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
            <div>
                <Button onClick={natureButtonHandler}>natural sites</Button>
                <Button onClick={buildingButtonHandler}>buildings</Button>
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
        </>
    )
}

export default Search;