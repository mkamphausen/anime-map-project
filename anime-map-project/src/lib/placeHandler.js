import {db} from '../base'
import { collection, getDocs, addDoc, updateDoc, arrayUnion, doc } from 'firebase/firestore';

const placesCollectionRef = collection(db, 'places');

/**
 * fetches places data from firestor and returns places as array
 * @returns places from firebase as GeoJson
 */
export const getPlaces = async () => {
    const data = await getDocs(placesCollectionRef);
    const receavedPlaces = [];
    data.docs.map((doc) => {
        receavedPlaces.push({...doc.data(), id: doc.id})
    });
    return  placesIntoGeoJson(receavedPlaces);
}

/**
 * turns the fetched places data into GeoJson format for mapbox
 * @param {*} fetchedData 
 * @returns places as GeoJSon
 */
function placesIntoGeoJson(fetchedData){
    const GeoJsonifiedData = [];
    fetchedData.forEach(element => {
        const GJPlace = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": element?.coordinates
            },
            "properties": {
                "id":element?.id,
                "country":element?.country,
                "linkedAnime": element?.linkedAnime,
                "name":element?.name,
                "realPictureUrl":element?.realPictureUrl,
                "tags":element?.tags,
                "town":element?.town,
                'marker-color': '#3bb2d0',
                'marker-size': 'large',
                'marker-symbol': 'rocket'
            }
        }
        GeoJsonifiedData.push(GJPlace);
    });
    return GeoJsonifiedData;
}
/**
 * @param {*} placeCollection 
 * @param {*} newPlaceCoords 
 * @returns true, if specific place coords already exist in given placesCollection
 */
export function placeAlreadyExists(placeCollection, newPlaceCoords){
    return placeCollection.some(place => place.geometry.coordinates.every(coord => {
        return newPlaceCoords.includes(coord)
    })
)}

/**
 * Add Doc for given place
 * @param {*} place 
 * @returns DocRefference pointing to new created place doc
 */
export const createPlace = place => {
    //await placesCollectionRef.doc(placeID).set(place)
    // await db.collection('places').doc(placeID).set(place)
    return addDoc(placesCollectionRef, place )
}
/**
 * Add an animeID to the animeLink array of a given place
 * @param {*} placeID 
 * @param {*} animeID 
 */
export const addAnimelinkToPlace = (placeID, animeID) => {
    const animeRef = doc(placesCollectionRef, placeID)
    updateDoc(animeRef, {
        linkedAnime: arrayUnion(animeID)
    })
}
/**
 * @param {*} placeCollection 
 * @param {*} coords 
 * @returns 
 */
 export const searchPlaceByCoords = (placeCollection, coords) => {
    console.log(placeCollection)
    const foundPlace = placeCollection.find( element => element.geometry.coordinates.every((value, index) => value === coords[index]))
    console.log(foundPlace)
    return foundPlace;
}