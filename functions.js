function subArray(array, subarray) {
  
  let tamanhosub = subarray.length
  let tamanho = array.length

  const SimOuNao =[];
  
  for(let i=0; i<tamanhosub;i++){
    for(let j=0; j<tamanho;j++){
      if(subArray[i] == array[j]){
        SimOuNao[i]="sim"
      }
    }
  }
  return SimOuNao
  
  
}

console.log(subArray([1,4,3,5],[1,2,4]))