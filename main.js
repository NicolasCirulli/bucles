const mentores = [
    {
        nombre: 'Nicolas',
        edad : 28,
        apellido: 'Cirulli',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Lucrecia',
        edad : 27,
        apellido: 'Gillone',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Florencia',
        edad : 22,
        apellido: 'Puñales',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Vue']
    },
    {
        nombre: 'Camila',
        edad : 28,
        apellido: 'Domato',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Bootstrap']
    },
    {
        nombre: 'Kevin',
        edad : 30,
        apellido: 'Darnet',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'JavaScript']
    },
    {
        nombre: 'Guillermo',
        edad : 26,
        apellido: 'Bonutto',
        rol: 'Mentor/a',
        especialidad : ['Java', 'Vue']
    },
]



/* FOR */

const mentoresReact = []

for( let i = mentores.length - 1; i >= 0 ; i--  ){
    if( mentores[i].especialidad.includes( "React" ) ){
        mentoresReact.unshift( mentores[i] )
    }
}




let indiceCami
for( let i = 0; i < mentores.length; i++ ){
    if( mentores[i].nombre == 'Camila' ){
        indiceCami = i
        break
    }

}

for( let i = 0; i < mentores.length; i++ ){
    if( mentores[i].nombre === 'Nicolás Catriel' ){
        continue
    }
    console.log(mentores[i].nombre)
}

function buscarIndice( lista , nombre ){
    for( let i = 0; i < lista.length; i++ ){
        if( lista[i].nombre == nombre ){
            return i
        }
    }
}



const indiceLucre = buscarIndice( mentores, 'Lucrecia' )
const indiceNico = buscarIndice( mentoresReact, 'Nicolás Catriel' )



/* const numeros = [1,2,3,4,5,6,7,8,9,10]

for( let numero of numeros ){
    console.log(numero)
    continue
    console.log('es impar')
} */







/* FOR OF */

function obtenerNombres( lista ){
    
    let aux = []

    for( let elemento of lista ){
        aux.push( `${elemento.nombre} ${elemento.apellido}` )
    }
    
    return aux

}

const nombresMentores = obtenerNombres( mentoresReact )
/* console.log( nombresMentores ) */

function filtrarPorEdad( lista , edad ){
    let fitlrados = []
    for( let elemento of lista ){
        if( elemento.edad >= edad ){
            fitlrados.push( elemento )
        }
    }
    return fitlrados
}

const mayores28 = filtrarPorEdad( mentores, 28 )

/* console.log( mayores28 ) */

/* FOR IN */
/* console.log(mentores[0])
for( let propiedad in mentores[0] ){
    console.log( propiedad )
} */

/* WHILE */

/* let i = 0
let indice */
/* while ( i < mentores.length && !indice ) {
    if(mentores[i].nombre == 'Camila'){
        indice = i
    }
    console.log(i)
    i++
}
console.log(indice) */

/* DO WHILE */
/* do{
    if(mentores[i].nombre == 'Camila'){
        indice = i
    }
    console.log(i)
    i++
}while(i < mentores.length && !indice ) */


function crearCards( array ){
    let template = ''
    for( let elemento of array ){
        template +=  `<div class="card border-primary col-3">
        <img class="card-img-top" src="holder.js/100px180/" alt="Title">
        <div class="card-body">
          <h4 class="card-title">${elemento.nombre}</h4>
          <p class="card-text">Text</p>
        </div>
      </div>`
        
    }
    return template
}

const templateCards = crearCards( mentoresReact ) 



