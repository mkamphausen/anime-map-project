import {db} from '../base'
import { collection, getDocs } from 'firebase/firestore';

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

//add anime