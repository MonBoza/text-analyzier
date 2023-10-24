//Business Logic

// function wordCounter(text){
    // let wordCount = 0;
    // const textArray = text.split(" ");
    // textArray.forEach(function(word){
        // wordCount++;
// });
// return wordCount;
// }
function wordCounter(text){
    if (text.trim().length === 0) {
         return 0;
     }
    let wordCount = 0;
    const textArray = text.split(" ");
     textArray.forEach(function(element){
        if (!Number(element)){
        wordCount++;  
      }     

     });
    return wordCount;
 }

function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element){
    if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++
     }
    });
    return wordCount;
}
function includesRarestLetter(word){
    if (word.toLowerCae().includes("q")) {
        return true 
    }
    return false;
}