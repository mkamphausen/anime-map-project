import {db} from '../base'
import { collection, getDocs } from 'firebase/firestore';

const placesCollectionRef = collection(db, 'places');


export const getPlaces = async () => {
    const data = await getDocs(placesCollectionRef);
    const receavedPlaces = [];
    data.docs.map((doc) => {
        // console.log({...doc.data(), id: doc.id})
        receavedPlaces.push({...doc.data(), id: doc.id})
    });
    console.log(receavedPlaces);
}
