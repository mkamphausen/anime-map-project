//filter for places of certain anime

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
