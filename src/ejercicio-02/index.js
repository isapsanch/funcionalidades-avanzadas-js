// Escribe tu código aquí:

const person = {
    name: 'John',
    greet: function () {
        console.log(`Hola, soy ${this.name}`)
    }
}
person.greet()

const person2 = {
    name:'Alice',
    greet: () => { 
        console.log(`Hola, soy ${this.name}`)
    }
}
person2.greet()