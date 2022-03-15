// This is just some sample data

//structure:
// {
//         'title':'',
//         'animeID':'',
//         'pictures':[
//             {
//                 'placeID': 1,
//                 'pictureUrl':'',
//                 'episode':''
//             },
//             {
//                 'placeID': 1,
//                 'pictureUrl':'',
//                 'episode':''
//             }
//         ]
// }

const testAnime = {
    anime1: {
        title:'Detective Conan',
        appearences:[
            {
                placeID: 'place1',
                animePictureUrl:'https://www.detectiveconanworld.com/wiki/images/a/ac/Movie_20_Gin_Berlin.jpg',
                episode:'episode1',
                description:'description1'
            },
            {
                placeID: 'place2',
                animePictureUrl:'https://www.detectiveconanworld.com/wiki/images/d/d6/Movie_20_London.jpeg',
                episode:'episode2',
                description:'description2'
            }
        ]
    }
}

export default testAnime;