var arr = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO',
'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];
var one = '';
var two = '';
var thee = '';
var four = '';
console.log("Given these 15 words");
console.log(arr);

for(var item in arr){
  if(arr[item].includes('R') && arr[item].includes('O') && arr[item].includes('M') && arr[item].includes('R'))
  {
    one += arr[item] + '-';
  }

  if(arr[item].includes('A') && arr[item].includes('L') && arr[item].includes('E') && arr[item].includes('X') && arr[item].includes('I') && arr[item].includes('S'))
  {
    two += arr[item] + '-';
  }

  if(arr[item].includes('M') && arr[item].includes('O') && arr[item].includes('N') && arr[item].includes('J') && arr[item].includes('A'))
  {
    thee += arr[item] + '-';
  }

  if(arr[item].includes('E') && arr[item].includes('S') && arr[item].includes('P') && arr[item].includes('O') && arr[item].includes('N') && arr[item].includes('J') && arr[item].includes('A'))
  {
    four += arr[item] + '-';
  }
}

console.log("Print something like");
console.log(one.substring(0,one.length-1));
console.log(two.substring(0,two.length-1));
console.log(thee.substring(0,thee.length-1));
console.log(four.substring(0,four.length-1));
