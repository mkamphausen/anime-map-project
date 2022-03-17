//import react
import { useState } from "react";
//import components
//import helper functions
//import bootstrap
import { Form } from "react-bootstrap";



const Search = ({animeCollection, places}) => {

    const handler = () => {
        console.log("hi")
    }

    return (
        <>
            <div>
                <div>natural sites</div>
                <div>buildings</div>
            </div>
            <div>
            <select name="animeSelect" id="animeSelect" onChange={handler}>
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