console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
console.log('========== ADD TO COLLECTION FUNCTION ==========')
let myCollection=[]; // an array of objects

function addToCollection(collection, title, artist, yearPublished){
  console.log( 'IN ADD TO COLLECTION FUNCTION' );
  collection = {}; // Telling the computer that collection is an object
  collection.title = title;
  collection.artist = artist;
  collection.yearPublished = yearPublished;
  myCollection.push(collection);
  return collection; // return newly created object
}

console.log('!!!!! addToCollection TEST !!!!!');
let sikKObject;
console.log(addToCollection(sikKObject, 'HEADLINER', 'SIK-K', 2020));
let btsObject;
console.log(addToCollection(btsObject, 'Lover Yourself Answer', 'BTS', 2018));
let highlightObject;
console.log(addToCollection(highlightObject, 'Fiction and Fact', 'Beast', 2011 ));
let dmtnObject;
console.log(addToCollection(dmtnObject, 'State of Emergency', 'DMTN', 2012));
let taeyeonObject;
console.log(addToCollection(taeyeonObject, 'INVU', 'Taeyeon', 2022));
let winnerObject;
console.log(addToCollection(winnerObject, '2014 S/S', 'Winner', '2014'));
console.log('LOG OF myCollection ARRAY:', myCollection);

console.log('========== SHOW COLLECTION FUNCTION ==========')
/* Create a function named showCollection. This function should:

Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
Loop through the collection and console.log each album's information formatted within a single string, like: TITLE by ARTIST, published in YEAR. */


function showCollection(anArray){
  //loop through an array
  let newString = "";
  for(i=0; i<anArray.length; i++){
    // console.log('IN SHOW COLLECTION FOR LOOP');
    let collection = anArray[i];
    let newString = console.log(collection.title + ' by ' + collection.artist + ', ' + 'published in ' + collection.yearPublished); 
  }
  return newString;
}

console.log( 'IN SHOW COLLECTION TEST', showCollection(myCollection)); // Test of showCollection Function

console.log('========== FIND BY ARTIST FUNCTION ==========')
/* Add a function named findByArtist. This function should:

- Take in a collection parameter. Remember, we want to be able to search any collection!
- Take in an artist (string) parameter.
- Create an empty array to hold any matching results, if any.
- Loop through the collection and add any album objects with a matching artist to the array.
- Return the array with the matching results. (If no results are found, an empty array should be returned.)
*/

//make the function for find the artist
function findByArtist(collectionArray, artist){
  console.log('IN FIND BY ARTIST FUNCTION');
  let foundAlbumList = [] // this is where the album by artist will be stored
  for(i=0; i<collectionArray.length; i++){
    if(collectionArray[i].artist === artist){
      foundAlbumList.push(collectionArray[i]);
    } // end of if-else statement
  } // end of for loop
  return foundAlbumList;
} // end of findByArtist function

console.log('=========FIND BY ARTIST TEST=========');
console.log(findByArtist( myCollection, "SIK-K"));
console.log(findByArtist( myCollection, "Taeyeon"));
console.log(findByArtist( myCollection, "Winner"));
console.log(findByArtist( myCollection, "2PM"));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
