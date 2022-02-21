// This is just some sample data
////https://picsum.photos/400

const samplePlaces ={
    place1:{ 
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [13.409444, 52.520833],
        },
            properties: {
            animeTitle:"Detective Conan",	
            animeImg:"https://www.detectiveconanworld.com/wiki/images/a/ac/Movie_20_Gin_Berlin.jpg", 
            realImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Berlin_-_Berliner_Fernsehturm1.jpg/150px-Berlin_-_Berliner_Fernsehturm1.jpg",
            placeName:"Fernsehturm",	 
            city:"Berlin", 
            country:"GERMANY"
        },
  },
    place2:{ 
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-0.12509050234678804, 51.5010622073421],
        },
        properties: {	
            animeTitle:"Detective Conan",	
            animeImg:"https://www.detectiveconanworld.com/wiki/images/d/d6/Movie_20_London.jpeg", 
            realImg:"https://media-cdn.tripadvisor.com/media/photo-s/07/20/bb/d7/parliament-square.jpg",
            placeName:"Big Ben", 
            city:"London", 
            country:"ENGLAND" 
        },
    },
    place3:{ 
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-0.454342785250037, 51.47013740427179],
        },
        properties: {
            animeTitle:"Detective Conan",	
            animeImg:"https://conanwiki.org/images/f/f6/Episode_616-11.png", 
            realImg:"https://cdn.images.express.co.uk/img/dynamic/1/590x/heathrow-449152.jpg",
            placeName:"Heathrow", 
            city:"London", 
            country:"ENGLAND" 
        },
    }
}



export default samplePlaces;


// const samplePlaces ={
//     place1: { 
//         longitude:[13.409444],	
//         latitude:[52.520833],	
//         animeTitle:"Detective Conan",	
//         animeImg:"https://www.detectiveconanworld.com/wiki/images/a/ac/Movie_20_Gin_Berlin.jpg", 
//         realImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Berlin_-_Berliner_Fernsehturm1.jpg/150px-Berlin_-_Berliner_Fernsehturm1.jpg",
//         placeName:"Fernsehturm",	 
//         city:"Berlin", 
//         country:"GERMANY" 
//     },
//     place2:{ 
//         longitude:[-0.12509050234678804],	
//         latitude:[51.5010622073421],	
//         animeTitle:"Detective Conan",	
//         animeImg:"https://www.detectiveconanworld.com/wiki/images/d/d6/Movie_20_London.jpeg", 
//         realImg:"https://media-cdn.tripadvisor.com/media/photo-s/07/20/bb/d7/parliament-square.jpg",
//         placeName:"Big Ben", 
//         city:"London", 
//         country:"ENGLAND" 
//     },
//     place3:{ 
//         longitude:[-0.454342785250037],	
//         latitude:[51.47013740427179],	
//         animeTitle:"Detective Conan",	
//         animeImg:"https://conanwiki.org/images/f/f6/Episode_616-11.png", 
//         realImg:"https://cdn.images.express.co.uk/img/dynamic/1/590x/heathrow-449152.jpg",
//         placeName:"Heathrow", 
//         city:"London", 
//         country:"ENGLAND" 
//     }
// }