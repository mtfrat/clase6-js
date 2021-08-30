function auto(marca,modelo,color,año,km) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.año = año
    this.km = km
}

function ingresoDatos(){
    marcaIngreasada = prompt("Ingrese marca:")
    modeloIngreasado = prompt("Ingrese modelo:")
    colorIngresado = prompt("Ingrese color:")
    añoIngreasado = prompt("Ingrese año:")
    kmIngreasado = prompt("Ingrese kilometraje:")

    auto1 = new auto(mayuscula(marcaIngreasada),mayuscula(modeloIngreasado),colorIngresado,añoIngreasado,kmIngreasado)
    arrays(marcaIngreasada,modeloIngreasado,colorIngresado,añoIngreasado,kmIngreasado)
}

const arrayMarcas = []
const arrayModelos = []
const arrayColores = []
const arrayAños = []
const arrayKm = []

function arrays(marca,modelo,color,año,km) {
    arrayMarcas.push(marca)
    arrayModelos.push(modelo)
    arrayColores.push(color)
    arrayAños.push(año)
    arrayKm.push(km)
}

function mayuscula(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
}

let confirmacion = "y"
let auto1

console.log("...:::Concesionario de autos:::...")
while (confirmacion == "y"){
    confirmacion = "n"
    ingresoDatos()
    console.log("Se registro su",auto1.marca,auto1.modelo,"de color",auto1.color,"comprado en el año",auto1.año,"con",auto1.km, "kilómetros")
    confirmacion = prompt("Ingrese 'y' si desea agregar otro vehículo\nEn caso contrario ingrese cualquier tecla")
}

console.log("Ingreso de autos finalizado")
console.log("Autos filtrados por marca:")
console.log(arrayMarcas)
console.log("Autos filtrados por modelo:")
console.log(arrayModelos)
console.log("Autos filtrados por color:")
console.log(arrayColores)
console.log("Autos filtrados por año de compra:")
console.log(arrayAños)
console.log("Autos filtrados por kilometraje:")
console.log(arrayKm)