const notas = [9,8,7,10,6];

console.log(notas[0])
console.log(notas[4])

console.log(notas.push(5))
console.log(notas)

console.log(notas.shift());
console.log(notas)



//*iteração*//

  let result = ''; 

for (let flag = 0; flag < notas.length; flag++) { 

    result += notas[flag] + ' ';

} 

//* média com o reduce   *//
console.log(result);

let soma = notas.reduce((addition, value)=> addition + value, 0)
let media = soma / notas.length

console.log(media)

//*  Notas maiores que 7 => Filter  *//
console.log(notas.filter((value) => value > 7));


// ordenando a lista
console.log(notas.sort((a,b)=> a - b )); 

// verificando se um número está incluído na lista

console.log(notas.includes(6.5))

//indice da nota

let indice = notas.indexOf(8)
console.log(indice)


//nova array elevado ao quadrado utilizando o Map

let array = [1, 2, 3, 4, 5, 6];

console.log(array.map((value) => value ** 2));
