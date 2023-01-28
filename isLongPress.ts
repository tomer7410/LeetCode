function isLongPress(name:string, typed:string){
  let nameIndex = 0, typedIndex = 0;
  if(name.length>typed.length) return false;
  if(name[nameIndex]!==typed[typedIndex]) return false;
  while (nameIndex<name.length){
    typedIndex++;
    while (name[nameIndex]===typed[typedIndex] && typedIndex<typed.length){
      typedIndex ++;
    }
    if(typedIndex===typed.length){
      if(nameIndex === name.length -1) return true;
      return false;
    }
    else{
      if(typed[typedIndex]!==name[nameIndex+1]) return false;
      nameIndex++
    }
  }
  return  true
}

console.log(isLongPress('aleex','alex'));