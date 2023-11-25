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
