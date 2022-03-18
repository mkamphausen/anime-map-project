/**
 * get all anime that are linked to a certain place
 * @param {*} animeCollection 
 * @param {*} place 
 * @returns all anime that are linked to a certain place
 */
export function filterAnimeForPlace(animeCollection, place){
    return animeCollection.filter(anime => place.properties.linkedAnime.includes(anime.id) )
}

/**
 * get specific appearances from alle anime linked to a certain place, by looping over all linked     anime, filtering their appearances array for give places id
 * @param {*} linkedAnime 
 * @param {*} place 
 * @returns specific appearances from alle anime linked to a certain place
 */
export function filterAppearancesForPlace(linkedAnime, place){
    const data = []
    // const data = linkedAnime.map((anime)=> anime.appearances.filter((appearance) => appearance.placeID === place.properties.id))
    linkedAnime.map(anime => {
        anime.appearances.forEach(appearance => {
            if(appearance.placeID === place.properties.id){
                const newAnimeObject = {
                        id: anime?.id,
                        title: anime?.title,
                        animePictureUrl: appearance?.animePictureUrl,
                        episode: appearance?.episode,
                        description: appearance?.description,
                    }
                data.push(newAnimeObject);
            }
        });
    });
    return data;
}

/**
 * 
 * @param {arr} places 
 * @param {bool} filterBuilding 
 * @param {bool} filterNature 
 * @param {str} FilterAnimeID 
 * @returns filtered places array
 */
export function filterPlaces(places, filterBuildings, filterNature, FilterAnimeID){
    let filteredPlaces = [...places]
    if(filterBuildings){
        filteredPlaces = filteredPlaces.filter(place => !place.properties.tags?.includes('building') )
    }
    if(filterNature){
        filteredPlaces = filteredPlaces.filter(place => !place.properties.tags?.includes('nature') )
    }
    if(FilterAnimeID != ''){
        filteredPlaces = filteredPlaces.filter(place => place.properties.linkedAnime?.includes(FilterAnimeID) )
    }

    return filteredPlaces;
}