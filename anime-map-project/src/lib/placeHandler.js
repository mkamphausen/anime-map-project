import {db} from '../base'
import { collection, getDocs, addDoc } from 'firebase/firestore';

const placesCollectionRef = collection(db, 'places');

//fetches places data from firestor and returns places as array
export const getPlaces = async () => {
    const data = await getDocs(placesCollectionRef);
    const receavedPlaces = [];
    data.docs.map((doc) => {
        receavedPlaces.push({...doc.data(), id: doc.id})
    });
    return  placesIntoGeoJson(receavedPlaces);
}

//a funktion that turns the fetched places data into GeoJson format for mapbox
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
            }
        }
        GeoJsonifiedData.push(GJPlace);
    });
    return GeoJsonifiedData;
}

//returns true, if place coords already exist
export function placeAlreadyExists(placeCollection, newPlaceCoords){
    return placeCollection.some(place => place.geometry.coordinates.every(coord => {
        return newPlaceCoords.includes(coord)
    })
)}

//create new place in db
export const createPlace = async (place) => {
    //await placesCollectionRef.doc(placeID).set(place)
    // await db.collection('places').doc(placeID).set(place)
    await addDoc(placesCollectionRef, place )
}