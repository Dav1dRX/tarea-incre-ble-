class tarea1 {
divisores(){

  let numero = parseInt(document.getElementById("numero").value);

  function encontrarDivisores(numero) {
    let i = 1;
    let divisores = [];
    while (i <= numero) {
      if (numero % i === 0 && i !== numero) {
        divisores.push(i);
      }
      i++;
    }
    return divisores;
  }
  
  function esNumeroPerfecto(numero) {
    let divisores = encontrarDivisores(numero); //llamamos a la otra funcion 
    let sumaDivisores = divisores.reduce((a, b) => a + b, 0);
  
    if (sumaDivisores === numero && sumaDivisores !== 0) {
      return "Es un número perfecto.";
    } else if (sumaDivisores === 0) {
      return "✭ El número es 0, por lo que no es un número perfecto ni no perfecto.";
    } else {
      return " No es un número perfecto.";
    }
  }
  let divisores = encontrarDivisores(numero)
  let perfectttt = esNumeroPerfecto(numero);


  document.getElementById("resp").innerHTML =`✭ Los divisores de ${numero} son: ${divisores.join(', ')} <br>✭ Ademas ${perfectttt}`;



}

//_________________________________________________________________________

primonum(){

function esPrimo(numero) {
  if (numero <= 1)
      return false;
  for (let i = 2; i * i <= numero; i++) {
      if (numero % i === 0) return false;
  }
  return true;
}

function sonPrimosGemelos(numero1, numero2) {
  if (esPrimo(numero1) && esPrimo(numero2)) {
      if (numero1 > numero2) {
          return numero1 - numero2 === 2;
      } else {
          return numero2 - numero1 === 2;
      }
  }
  return false;
}

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (esPrimo(num1)) {
      console.log(`El primer número (${num1}) es primo.`);
      document.getElementById("resp").innerHTML = `✭ El primer número (${num1}) es primo.`;
  } else {
      console.log(`El primer número (${num1}) no es primo.`);
      document.getElementById("resp").innerHTML = `✭ El primer número (${num1}) no es primo.`;
  }

  if (esPrimo(num2)) {
      console.log(`El segundo número (${num2}) es primo.`);
      document.getElementById("resp").innerHTML += `<br>✭ El segundo número (${num2}) es primo.`;
  } else {
      console.log(`El segundo número (${num2}) no es primo.`);
      document.getElementById("resp").innerHTML += `<br>✭ El segundo número (${num2}) no es primo.`;
  }

  if (sonPrimosGemelos(num1, num2)) {
      console.log(`${num1} y ${num2} son primos gemelos.`);
      document.getElementById("resp").innerHTML += `<br>✭ ${num1} y ${num2} son primos gemelos.`;
  } else {
      console.log(`${num1} y ${num2} no son primos gemelos.`);
      document.getElementById("resp").innerHTML += `<br>✭ ${num1} y ${num2} no son primos gemelos.`;
  }
}

//_______________________________________________________________________________________________________

cadenas1() {
  //1. concatenar 2 cadenas

    let palabra1 = document.getElementById("palabra1").value;
    let palabra2 = document.getElementById("palabra2").value;

    function concatenar(palabra1, palabra2) {
      return palabra1 + palabra2;
    }

    let nuevaCadena = concatenar(palabra1, palabra2);
    document.getElementById("resp").innerHTML = `${nuevaCadena}`;

    let buscar = document.getElementById("buscar").value;

    //2. buscar la subcadena

    function buscarSubcadena(frase, buscar) {
      let longitudFrase = frase.length;
      let longitudBuscar = buscar.length;

      for (let i = 0; i <= longitudFrase - longitudBuscar; i++) {
        let coincide = true;

        for (let j = 0; j < longitudBuscar; j++) {
          if (frase[i + j] !== buscar[j]) {
            coincide = false;
            break;
          }
        }

        if (coincide) {
          return i; // Devolver la posición donde se encuentra la subcadena
        }
      }

      return -1; // Devolver -1 si no se encuentra la subcadena
    }

    let posicion = buscarSubcadena(nuevaCadena, buscar);
    let nuevaCadenaConInsercion; // Declarar la variable fuera del bloque if yyyyyy que asi tenga mas acceso la tercera funcion(mas alcance)

    if (posicion !== -1) {
      console.log(`La subcadena "${buscar}" se encuentra en la posición ${posicion} de la frase.`);
      document.getElementById("resp").innerHTML += `<br>✭ La subcadena "${buscar}" se encunetra en la posición ${posicion} de la frase.`;

      let subcadenaInsertar = document.getElementById("subcadenaInsertar").value;
      let posicionInsercion = document.getElementById("posicionInsercion").value;

      function insertarSubcadenaEnPosicion(frase, subcadena, posicion) {
        if (posicion < 0 || posicion > frase.length) {
          console.log("La posición de inserción no es válida.");
          document.getElementById("resp").innerHTML += "<br><br>✭ La posición de inserción no es válida.";
          return frase;
        }

        let parte1 = frase.substring(0, posicion);
        let parte2 = frase.substring(posicion);

        return parte1 + subcadena + parte2;
      }

      nuevaCadenaConInsercion = insertarSubcadenaEnPosicion(nuevaCadena, subcadenaInsertar, posicionInsercion);

      console.log(`Nueva cadena con subcadena insertada: ${nuevaCadenaConInsercion}`);
      document.getElementById("resp").innerHTML += `<br><br>✭ Nueva cadena con subcadena insertada: ${nuevaCadenaConInsercion}`;
    } else {
      console.log(`La subcadena "${buscar}" no se encuentra en la frase.`);
      document.getElementById("resp").innerHTML += `<br><br>✭ La subcadena "${buscar}" no se encuentra en la frase.`;
    }

    //3. Aquí para eliminar un subcadena
    let subcadenaEliminar = document.getElementById("subcadenaEliminar").value;

    function eliminarSubcadena(frase, subcadena) {
      let posicion = frase.indexOf(subcadena);
      while (posicion !== -1) {
        let parte1 = frase.substring(0, posicion);
        let parte2 = frase.substring(posicion + subcadena.length);
        frase = parte1 + parte2;
        posicion = frase.indexOf(subcadena);
      }
      return frase;
    }

    let nuevaCadenaConEliminacion = eliminarSubcadena(nuevaCadenaConInsercion, subcadenaEliminar);
    document.getElementById("resp").innerHTML += `<br><br>✭ Nueva cadena con subcadena eliminada: ${nuevaCadenaConEliminacion}`;
  }

//finalmente adios cadenas


//arreglos_______________________________________________________________________________________
//de arrelo a cadena 


arreglooo() {
  // Números ingresados por el usuario
  let entradanum = document.getElementById("entradanum").value;

  // Llama a la función conver para convertir la entrada a un arreglo
  let arreglo1 = conver(entradanum);

  // Para encontrar el número más alto del arreglo 
  let numeromaxi = encontraralto(arreglo1);
  console.log(`El numero mas alto es ${numeromaxi}`);
  document.getElementById("resp").innerHTML += `<br>✭ El numero mas alto es ${numeromaxi}`;

  // Encontrar X número en un arreglo
  let numeroBuscar = parseInt(document.getElementById("numeroBuscar").value);

  if (!isNaN(numeroBuscar)) {
    let encontrado = buscarNumero(arreglo1, numeroBuscar);

    if (encontrado) {
      console.log(`El número ${numeroBuscar} está en el arreglo.`);
      document.getElementById("resp").innerHTML += `<br><br>✭ El número ${numeroBuscar} está en el arreglo.`;
    } else {
      console.log(`El número ${numeroBuscar} no está en el arreglo.`);
      document.getElementById("resp").innerHTML += `<br><br>✭ El número ${numeroBuscar} no está en el arreglo.`;
    }
  } else {
    console.log("Por favor, ingrese un número válido para buscar.");
    document.getElementById("resp").innerHTML += "<br><br>✭ Por favor, ingrese un número válido para buscar.";
  }

  // Ingresar numero en un arreglo 
  // Obtener el nuevo número ingresado
  let newnum = parseInt(document.getElementById("newnum").value);

  // Llama a la función para actualizar el arreglo después de ingresar un nuevo número
  arreglo1 = insertarNumero(arreglo1, newnum);

  // Actualizar la interfaz con el nuevo arreglo
  document.getElementById("resp").innerHTML += `<br><br>✭ Número ingresado: ${newnum} <br>✭ Arreglo actualizado: [${arreglo1}]`;


  // Eliminar número en una posición
  let posicionEliminar = parseInt(document.getElementById("posicionEliminar").value);
  arreglo1 = eliminarNumeroEnPosicion(arreglo1, posicionEliminar);

  // mostrar arreglo después de eliminar el número en la posición indicada
  document.getElementById("resp").innerHTML += `<br><br>✭ eliminar en la posición ${posicionEliminar}: [${arreglo1}]`;

  
  let cadena = acedena (arreglo1);
  document.getElementById("resp").innerHTML += `<br><br>✭ arreglo a cadena ${cadena}`;
  // de arreglom a cadena
  function acedena (arreglo1){
    let cadena = arreglo1.join(',');
    return cadena;
  
  }
  

// Función para convertir la entrada a un arreglo
function conver(entradanum){
  let arreglo = entradanum.split(',').map(Number);

  // Verificar si alguno de los elementos no es un número
  if (arreglo.some(isNaN)) {
    console.log("Por favor, ingrese solo números válidos :(");
    document.getElementById("resp").innerHTML = `✭<br> Ingrese solo números válidos :(`;
    return [];
  } else {
    // Convertir el array a una cadena
    let miCadena = arreglo.join(',');
    console.log(`Arreglo ingresado: [${miCadena}]`);
    document.getElementById("resp").innerHTML = `✭ <br> Arreglo ingresado: [${miCadena}]`;
    return arreglo;
  }
}

// Función para encontrar el número más alto de un arreglo
function encontraralto(arreglo) {
  let max = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > max) {
      max = arreglo[i];
    }
  }
  return max;
}

// Función para buscar un número en el arreglo
function buscarNumero(arreglo, numero) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === numero) {
      return true;
    }
  }
  return false;
}

// Función para insertar números en el arreglo
function insertarNumero(arreglo, numero) {
  if (!isNaN(numero)) {
    arreglo.push(numero);
  } else {
    console.log("Por favor, ingrese un número válido para insertar.");
    document.getElementById("resp").innerHTML += "<br>✭ Por favor, ingrese un número válido para insertar.";
  }

  return arreglo;
}


//funcion eliminar de arreglo 
function eliminarNumeroEnPosicion(arreglo, posicion) {
  if (!isNaN(posicion) && posicion >= 0 && posicion < arreglo.length) {
    arreglo.splice(posicion, 1); // Elimina 1 elemento en la posición indicada
  } else {
    console.log("Por favor, ingrese una posición válida para eliminar.");
    document.getElementById("resp").innerHTML += "<br>✭ Por favor, ingrese una posición válida para eliminar.";
  }

  return arreglo;
}


}
binario() {
  let numeroDecimal = parseInt(document.getElementById("numeroDecimal").value);
  let baseElegida = parseInt(document.getElementById("baseElegida").value);

  if (!isNaN(numeroDecimal) && !isNaN(baseElegida) && [2, 8, 16].includes(baseElegida)) {
    let resultado = this.decimalToBaseN(numeroDecimal, baseElegida);
    console.log(`El número ${numeroDecimal} en base ${baseElegida} es: ${resultado}`);

    document.getElementById("respDecimal").innerHTML = `✭ El número ${numeroDecimal} en base ${baseElegida} es: ${resultado}`;
  } else {
    alert("Entrada inválida. Por favor, ingrese un número entero positivo y una base válida (2, 8 o 16).");
  }
}

decimalToBaseN(decimalNumber, base) {
  if (isNaN(decimalNumber) || decimalNumber < 0 || decimalNumber % 1 !== 0 || [2, 8, 16].indexOf(base) === -1) {
    return "Entrada inválida";
  }

  if (decimalNumber === 0) {
    return "0";
  }

  let result = "";
  while (decimalNumber > 0) {
    let remainder = decimalNumber % base;
    result = (remainder < 10 ? remainder : (remainder - 10 + 'a')) + result;
    decimalNumber = (decimalNumber / base) | 0;
  }

  return result;
}

//_____________________________________________________________

//ME GUSTARIA DECLARARLE MI AMOR PERO SOLO PUEDO DECLARARLE VARIABLES :

binaaaaa() {
  let numeroBinario = document.getElementById("numeroBinario").value;
  let baseDestino = parseInt(document.getElementById("baseDestino").value);

  let resultado = this.convertirBinarioADiferenteBase(numeroBinario, baseDestino);

  if (resultado !== "Entrada inválida") {
    console.log(`El número binario ${numeroBinario} en base ${baseDestino} es: ${resultado}`);
    document.getElementById("respBinario").innerHTML = `✭ El número binario ${numeroBinario} en base ${baseDestino} es: ${resultado}`;
  } else {
    alert("Entrada inválida. Por favor, ingrese un número binario válido y una base destino válida (8, 10 o 16).");
  }
}

convertirBinarioADiferenteBase(numeroBinario, baseDestino) {
  let resultado = "";

  for (let i = 0; i < numeroBinario.length; i++) {
    if (numeroBinario[i] !== '0' && numeroBinario[i] !== '1') {
      return "Entrada inválida";
    }
  }

  if (baseDestino >= 2 && baseDestino <= 16 && baseDestino % 1 === 0) {
    resultado = parseInt(numeroBinario, 2).toString(baseDestino);
  } else {
    return "Entrada inválida";
  }

  return resultado;
}



}
// Uso de la clase
let ope = new tarea1();



