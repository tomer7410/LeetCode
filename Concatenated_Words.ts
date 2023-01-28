function a(words:string[]){
  let foundes = []
  let alreadyCombined : {[word:string]:boolean} = {}
  for (let i = 0; i < words.length ; i++) {
    let matches = 0
    let firstMatchedWord = '',secondMatchedWord = '';
    let stopSetWord = false
    for (let j = 0; j < words.length; j++) {
      if (words[i] !== words[j] && !alreadyCombined[words[j]]){
        if(isWordInWord(words[i],words[j])){
          matches ++
          if(!stopSetWord){
            firstMatchedWord = words[j];
            stopSetWord = true
          }
        }
        if (matches === 2){
          foundes.push(words[i])
          secondMatchedWord = words[j]
          alreadyCombined[firstMatchedWord] = true;
          alreadyCombined[secondMatchedWord] = true;
          break;
        }
      }
    }
  }
  return foundes
}
function isWordInWord(bigWord:string,smallWord: string){
  let firstSmallLetterIndex = bigWord.indexOf(smallWord[0]);
  const smallWordLength = smallWord.length;
  const bigWordLength = bigWord.length;
  if(firstSmallLetterIndex === -1) return false;
  if(firstSmallLetterIndex + smallWordLength > bigWord.length) return false;
  let currentSmallWordIndex = 1; // first is already found
  firstSmallLetterIndex++;
  let matchesLetters = 1
  while (currentSmallWordIndex < bigWord.length && matchesLetters < smallWordLength){
     if(smallWord[currentSmallWordIndex++] != bigWord[firstSmallLetterIndex++]) return  false
     matchesLetters ++
  }
  return true;


}

console.log(a(["a","b","ab","abc"]))