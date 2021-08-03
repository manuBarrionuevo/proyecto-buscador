//Variables 
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//contenedor para los resultados
const resultado = document.querySelector('#resultado')



const max = new Date().getFullYear()//devuelve el año acutal
const min = max - 11


//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)//Muestra los autos al cargar el documento

    //LLena las opciones de años
    llenarSelect()

})

//Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value

    filtrarAuto()

})
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value)

    filtrarAuto()
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value

    filtrarAuto()
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value

    filtrarAuto()
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)

    filtrarAuto()
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value

    filtrarAuto()
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value

    filtrarAuto()

})

//Funciones

//Incerta parrfo con la info de los autos en el div (resultado)
function mostrarAutos(autos) {

    //Elimino el HTML previo
    limpiarHTML()


    autos.forEach(auto => {

        const { marca, modelo, year, precio, puertas, color, transmision } = auto

        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
        
            ${marca} - ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision}

        `
        resultado.appendChild(autoHTML)
    });

}

//Limpiar HTML
function limpiarHTML() {

    //borra el primer hijo
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

//Guarda los años del select
function llenarSelect() {

    for (i = max; i >= min; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)//Agrag cada opciones de año
    }

}

//Filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuerta).filter(filtrarTransmision).filter(filtrarColor)


    if (resultado.length) {
        mostrarAutos(resultado)

    } else {
        noResultado()
    }

}

//muestra msj al no tener resultados para mostrar de busqueda

function noResultado() {
    limpiarHTML()
    const noResultado=document.createElement('div')
    noResultado.classList.add('alerta','error')
    noResultado.textContent='No Hay Resultados, Intenta Con Otros Terminos de Busqueda'
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda
    if (marca) {
        return auto.marca === marca
    }
    return auto

}

function filtrarYear(auto) {
    const { year } = datosBusqueda
    if (year) {
        return auto.year === year
    }
    return auto
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda
    if (minimo) {
        return auto.precio >= minimo
    }

    return auto
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda
    if (maximo) {
        return auto.precio <= maximo
    }

    return auto
}
function filtrarPuerta(auto) {
    const { puertas } = datosBusqueda
    if (puertas) {
        return auto.puertas === puertas
    }
    return auto
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda
    if (transmision) {
        return auto.transmision === transmision
    }
    return auto
}
function filtrarColor(auto) {
    const { color } = datosBusqueda
    if (color) {
        return auto.color === color
    }
    return auto
}

