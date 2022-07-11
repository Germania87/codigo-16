const hallarDivisoresComunes = (numero1, numero2) => {
    // para poder usar una funcion que he creado solanmente necista llamarla por su nombre

    // 1: Creo un array vacio
    const arrayDivisores = [];
    // 2: He creado una variable llamada primerosDivisores
    // 3: Quiero que esta variable se guarden los divisores del primer numero
    const primerosDivisores = hallarDivisores(numero1, arrayDivisores);
    //* primerosDivisores = [1, 2, 5, 10]
    // entonces la variable primerosDivisores es un array
    const segundosDivosores = hallarDivisores(numero2, primerosDivisores);
    // sort sirve para ordenar un array
    const arrayOrdernado = segundosDivosores.sort();
    console.log(arrayOrdernado);

    for (let i = 0; i < arrayOrdernado.length; i++) {
      if (arrayOrdernado[i] === arrayOrdernado[i + 1]) {
        console.log(arrayOrdernado[i]);
      }
    }
  };
  //! fin

  // para que funcion sea operativa debe retornar un arreglo con los numeros que son
  // divisores
  const hallarDivisores = (numero, divisores) => {
    for (let j = 1; j <= numero; j++) {
      if (numero % j === 0) {
        // push sirve para agregar un elemento en la ultima posicion a un array
        divisores.push(j);
      }
    }

    return divisores;
  };

  hallarDivisoresComunes(10, 11);
