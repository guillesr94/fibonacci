// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

let array=[0,1]

fibonacci= (num)=>{
  for(let i=2; i<num; i++){
    array[i]=array[i-2]+array[i-1]
  }
  return array
}
console.log(fibonacci(10));


// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

