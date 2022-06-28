isEsotericOrSkeptical = (n) => {
  if(n % 3 === 0 && n % 5 === 0) {
    return 'É esotérico';
  } else {
    return 'É cético';
  }
}

isPrimeNumber = (n) => {
  for(i = 2; i < n; i++) {
    if(n % i === 0) {
      return 'Não é número primo'
    }
  }
  
  return 'É número primo'
}

const numberHere = 1

console.log(`O número ${numberHere} é...`);
console.log(isEsotericOrSkeptical(numberHere));
console.log(isPrimeNumber(numberHere));