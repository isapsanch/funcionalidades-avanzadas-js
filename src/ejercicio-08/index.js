// Escribe tu código aquí:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
  }
  
  const result = sum(1, 2, 3, 4, 5)
  
  console.log(`La suma es: ${result}`)