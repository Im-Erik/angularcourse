import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularcourse2023';

  constructor() {
    //Devuelve en un nuevo array los elementos indicados en la busqueda
    const testMap = [1, 2, 3, 4, 5, 6, 7, 8, 98].map((item) => item * 3);
    console.log(testMap);

    //
    const testForeach = [1, 2, 3, 4, 5, 6, 7, 8, 98].forEach((item) => item);
    console.log(testForeach);

    //Devuelve el elemento indicado
    const testFind = [0, 2, 5, 6, 8, 9].find((item) => item === 5);
    console.log(testFind);

    //Devuelve en un nuevo array los elementos que coincidan con lo indicado
    const testFilter = [0, 2, 5, 6, 8, 9].filter((item) => item % 2 === 0);
    console.log(testFilter);

    //Devuelve la posicion del elemente buscado dentro de un array - de no encontrar devolvera -1
    const testFindIndex = [0, 7, 5, 6, 8, 9].findIndex((item) => item === 7);
    console.log(testFindIndex);

    //Devuelve la posicion dentro de la cadena del elemento a buscar, funciona con arrays y cadenas - de no encontrar devolvera -1
    const testIndexOf = [0, 7, 300, 6, 8, 9].indexOf(300);
    console.log(testIndexOf);

    //Une los elementos devueltos mediante el parametro indicado
    const testJoin = [0, 7, 300, 6, 8, 9].join('---');
    console.log(testJoin);

    //Separa la cadena indicada y crea un nuevo array separado por el parametro indicado
    const testSplit = '1,2,3,4,5,6'.split(',');
    console.log(testSplit);

    //Crea un nuevo array a partir de la posicion indicada en el primer parametro seguido por la cantidad de elementos indicados como segundo parametro
    const testSplice = [8, 7, 6, 5, 4, 3, 2, 1, 0].splice(2, 5);
    console.log(testSplice);

    //Itera y acumula los valores pasando por cada posicion
    const testReduce = [0, 2, 300, 4, 3, 2].reduce((acc, value) => acc + value);
    console.log(testReduce);

    //
    const testEntries = { value: 'ricardo', key: 'RPC' };
    console.log('aaa', Object.entries(testEntries));
    console.log('bbb', Object.keys(testEntries));
    console.log('ccc', Object.values(testEntries));

    //Spread operator concatena mediante "..."
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1];

    const per1 = { name: 'marco', age: 30 };
    const per2 = { ciudad: 'santiago', ...per1 };

    console.log('Spread', array2, per2);

    //Desestructuracion Rescata solo la informacion que se necesita, ejemplo con json
    const per3 = {
      name: 'miguel',
      age: 34,
      ciudad: 'santiago',
    };
    const { name:nombre} = per3;
    console.log('El nombre es =', nombre);

  // Ejercicios
  //1.- Convertir a array y sumar los numeros pares
  //{1:'a',2:'b',3:'a',4:'a',5:'a',6:'a'}
  const a = {1:'a',2:'b',3:'a',4:'a',5:'a',6:'a'};
  const b = Object.keys(a).map(n => parseInt(n)).reduce((acc, value) =>{
    if (value % 2 === 0 ){
      acc = acc + value;
    }
    return acc;
  }, 0);
   console.log('El valor devuelto es :',b);
         // Tratar de realizar ejercicio 1 igualmente con Filter

//2.- Filtrar los numeros impares y mostrarlos como cadena
//[1,2,3,4,5,6]
console.log('Resultado numeros impares en cadena :', [1,2,3,4,5,6].filter(s => s%2 !== 0).join('-'))


  } // Fin constructor






}
