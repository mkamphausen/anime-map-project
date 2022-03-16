import {db} from '../base'
import { collection, getDocs, addDoc } from 'firebase/firestore';

const animeCollectionRef = collection(db, 'anime');


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
//checks if a specific anime title already exists
export function animeAlreadyExists(animeCollection, newTitle){
        return animeCollection.some(anime => anime.title === newTitle);
}

//create new anime in db
export const createAnime = async (title) => {
    await addDoc(animeCollectionRef,{
        title: title,
        appearences:[]
    } )
    
}