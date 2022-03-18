import {db} from '../base'
import { collection, getDocs, addDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';

const animeCollectionRef = collection(db, 'anime');

/**
 * fetches anime from database
 * @returns array of anime
 */
export const getAnime = async () => {
    const data = await getDocs(animeCollectionRef);
    const receavedAnime = [];
    data.docs.map((doc) => {
        // console.log({...doc.data(), id: doc.id})
        receavedAnime.push({...doc.data(), id: doc.id})
    });
    // console.log(receavedPlaces);
    return  receavedAnime;
}
/**
 * checks if a specific anime title already exists 
 * @param animeCollection 
 * @param title
 **/
export function animeAlreadyExists(animeCollection, newTitle){
        return animeCollection.some(anime => anime.title === newTitle);
}

/**
 * create new anime in db 
 * @param animeTitle
 **/
export const createAnime = async (title) => {
    await addDoc(animeCollectionRef,{
        title: title,
        appearences:[]
    } )
}
/**
 * add appearance to an anime doc 
 * @param animeID 
 * @param appearance
 **/
export const addAppearanceByID = (refference, appearance) => {
    const animeRef = doc(animeCollectionRef, refference)
    updateDoc(animeRef, {
        appearances: arrayUnion(appearance)
    })
}


// random array mit property string -> object alphabetisch zu sortieren
// bubble sort . verschachtelung
// nutzerverzeichnis sortieren (array nach string in object sortieren)