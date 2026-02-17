for (i = 0; i <= 10; i++) {
  if (i % 2 == 1){
   continue;
  }
  alert(i);
}


while (i < 3){
    alert( `number ${i}!` );
    i++;
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}

