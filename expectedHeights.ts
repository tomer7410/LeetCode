function sort(arr:number[]){
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for(var i=0; i < arr.length; i++) {
      if(arr[i] < arr[i-1]) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        sorted = false;
      }
    }
  }
  return arr
}
function countConflict(arr:number[]){
  let counter = 0 ;
  let temp =arr.slice()
  const expected = sort(temp)
  for (let i = 0; i <arr.length; i++) {
    if(expected[i] !== arr[i]) counter++
  }
  return counter
}

console.log(countConflict([1,1,4,2,1,3]));