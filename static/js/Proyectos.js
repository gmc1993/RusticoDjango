const fila = document.querySelector('.contenedorCarrusel');
const posters =  document.querySelectorAll('.poster')

const flechaIzquierda = document.getElementById('flechaIzquierda');
const flechaDerecha = document.getElementById('flechaDerecha');


flechaDerecha.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
});

flechaIzquierda.addEventListener('click', () =>{
  fila.scrollLeft -= fila.offsetWidth;
  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.previousSibling){
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});


const cantPaginas = Math.ceil(posters.length / 4);

for (let i = 0; i < cantPaginas;i++){
  const indicador= document.createElement('button');

  if (i===0){
    indicador.classList.add('activo');
  }

  document.querySelector('.indicadores').appendChild(indicador);

  indicador.addEventListener('click', (e)=>{
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');

  });  
}


// Miniseries --------------------------------------



/*
const fila2 = document.querySelector('.contenedorCarrusel2');
const posters2 =  document.querySelectorAll('.poster2')

//const flechaIzquierda2 = document.getElementById('flechaIzquierda2');
//const flechaDerecha2 = document.getElementById('flechaDerecha2');


flechaDerecha2.addEventListener('click', () =>{
    fila2.scrollLeft += fila2.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores2 .activo');
    if (indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
});

flechaIzquierda2.addEventListener('click', () =>{
  fila2.scrollLeft -= fila2.offsetWidth;
  const indicadorActivo = document.querySelector('.indicadores2 .activo');
  if (indicadorActivo.previousSibling){
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});



const cantPaginas2 = Math.ceil(posters2.length / 4);

for (let i = 0; i < cantPaginas2;i++){
  const indicador= document.createElement('button');

  if (i===0){
    indicador.classList.add('activo');
  }

  document.querySelector('.indicadores').appendChild(indicador);

  indicador.addEventListener('click', (e)=>{
    fila2.scrollLeft = i * fila2.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');

  });  
}*/


//Documentales--------------------------------------
/*
const fila3 = document.querySelector('.contenedorCarrusel3');
const posters3 =  document.querySelectorAll('.poster3')

//const flechaIzquierda3 = document.getElementById('flechaIzquierda3');
//const flechaDerecha3 = document.getElementById('flechaDerecha3');



flechaDerecha3.addEventListener('click', () =>{
    fila3.scrollLeft += fila3.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores3 .activo');
    if (indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
});

flechaIzquierda3.addEventListener('click', () =>{
  fila2.scrollLeft -= fila2.offsetWidth;
  const indicadorActivo = document.querySelector('.indicadores3 .activo');
  if (indicadorActivo.previousSibling){
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});


const cantPaginas3 = Math.ceil(posters3.length / 4);

for (let i = 0; i < cantPaginas3;i++){
  const indicador= document.createElement('button');

  if (i===0){
    indicador.classList.add('activo');
  }

  document.querySelector('.indicadores').appendChild(indicador);

  indicador.addEventListener('click', (e)=>{
    fila3.scrollLeft = i * fila3.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');

  });  
}

*/
//POPUP--------------------------------------

let abrirPopUp = document.getElementById('botonAbrirPopUp');
let overlay = document.getElementById('overlay');
let popUp = document.getElementById('popUp');
let botonCerrar = document.getElementById('botonCerrar');

abrirPopUp.addEventListener('click', function() {
  overlay.classList.add('active');
  console.log("click")
});

botonCerrar.addEventListener('click', function() {
  overlay.classList.remove('active');
  console.log("click")
});

//POPUP vista--------------------------------------
let abrirPopUpVista = document.getElementById('botonAbrirPopUpVista');
let overlayVista = document.getElementById('overlayVista');
let popUpVista = document.getElementById('popUpVista');
let botonCerrarVista = document.getElementById('botonCerrarVista');

abrirPopUpVista.addEventListener('click', function() {
  overlayVista.classList.add('active');
  console.log("click")
});

botonCerrarVista.addEventListener('click', function() {
  overlayVista.classList.remove('active');
  console.log("click")
});

//POPUP Paramnesia--------------------------------------
let abrirPopUpParamnesia = document.getElementById('botonAbrirPopUpParamnesia');
let overlayParamnesia = document.getElementById('overlayParamnesia');
let popUpParamnesia = document.getElementById('popUpParamnesia');
let botonCerrarParamnesia = document.getElementById('botonCerrarParamnesia');

abrirPopUpParamnesia.addEventListener('click', function() {
  overlayParamnesia.classList.add('active');
  console.log("click")
});

botonCerrarParamnesia.addEventListener('click', function() {
  overlayParamnesia.classList.remove('active');
  console.log("click")
});

//POPUP DESCONOCER--------------------------------------
let abrirPopUpDesconocer = document.getElementById('botonAbrirPopUpDesconocer');
let overlayDesconocer = document.getElementById('overlayDesconocer');
let popUpDesconocer = document.getElementById('popUpDesconocer');
let botonCerrarDesconocer = document.getElementById('botonCerrarDesconocer');

abrirPopUpDesconocer.addEventListener('click', function() {
  overlayDesconocer.classList.add('active');
  console.log("click")
});

botonCerrarDesconocer.addEventListener('click', function() {
  overlayDesconocer.classList.remove('active');
  console.log("click")
});

//POPUP DESCONOCER--------------------------------------
let abrirPopUpInstrucciones = document.getElementById('botonAbrirPopUpInstrucciones');
let overlayInstrucciones = document.getElementById('overlayInstrucciones');
let popUpInstrucciones = document.getElementById('popUpInstrucciones');
let botonCerrarInstrucciones = document.getElementById('botonCerrarInstrucciones');

abrirPopUpInstrucciones.addEventListener('click', function() {
  overlayInstrucciones.classList.add('active');
  console.log("click")
});

botonCerrarInstrucciones.addEventListener('click', function() {
  overlayInstrucciones.classList.remove('active');
  console.log("click")
});

//POPUP Nocturna--------------------------------------
let abrirPopUpNocturna = document.getElementById('botonAbrirPopUpNocturna');
let overlayNocturna = document.getElementById('overlayNocturna');
let popUpNocturna = document.getElementById('popUpNocturna');
let botonCerrarNocturna = document.getElementById('botonCerrarNocturna');

abrirPopUpNocturna.addEventListener('click', function() {
  overlayNocturna.classList.add('active');
  console.log("click")
});

botonCerrarNocturna.addEventListener('click', function() {
  overlayNocturna.classList.remove('active');
  console.log("click")
});
//POPUP SomosJorge--------------------------------------
let abrirPopUpSomosJorge = document.getElementById('botonAbrirPopUpSomosJorge');
let overlaySomosJorge = document.getElementById('overlaySomosJorge');
let popUpSomosJorge = document.getElementById('popUpSomosJorge');
let botonCerrarSomosJorge = document.getElementById('botonCerrarSomosJorge');

abrirPopUpSomosJorge.addEventListener('click', function() {
  overlaySomosJorge.classList.add('active');
  console.log("click")
});

botonCerrarSomosJorge.addEventListener('click', function() {
  overlaySomosJorge.classList.remove('active');
  console.log("click")
});
//POPUP UltimoCuadroDorado--------------------------------------
let abrirPopUpUltimoCuadroDorado = document.getElementById('botonAbrirPopUpUltimoCuadroDorado');
let overlayUltimoCuadroDorado = document.getElementById('overlayUltimoCuadroDorado');
let popUpUltimoCuadroDorado = document.getElementById('popUpUltimoCuadroDorado');
let botonCerrarUltimoCuadroDorado = document.getElementById('botonCerrarUltimoCuadroDorado');

abrirPopUpUltimoCuadroDorado.addEventListener('click', function() {
  overlayUltimoCuadroDorado.classList.add('active');
  console.log("click")
});

botonCerrarUltimoCuadroDorado.addEventListener('click', function() {
  overlayUltimoCuadroDorado.classList.remove('active');
  console.log("click")
});
//POPUP ProyectoAvellaneda--------------------------------------
let abrirPopUpProyectoAvellaneda = document.getElementById('botonAbrirPopUpProyectoAvellaneda');
let overlayProyectoAvellaneda = document.getElementById('overlayProyectoAvellaneda');
let popUpProyectoAvellaneda = document.getElementById('popUpProyectoAvellaneda');
let botonCerrarProyectoAvellaneda = document.getElementById('botonCerrarProyectoAvellaneda');

abrirPopUpProyectoAvellaneda.addEventListener('click', function() {
  overlayProyectoAvellaneda.classList.add('active');
  console.log("click")
});

botonCerrarProyectoAvellaneda.addEventListener('click', function() {
  overlayProyectoAvellaneda.classList.remove('active');
  console.log("click")
});
//POPUP TiempoCuarentena--------------------------------------
let abrirPopUpTiempoCuarentena = document.getElementById('botonAbrirPopUpTiempoCuarentena');
let overlayTiempoCuarentena = document.getElementById('overlayTiempoCuarentena');
let popUpTiempoCuarentena = document.getElementById('popUpTiempoCuarentena');
let botonCerrarTiempoCuarentena = document.getElementById('botonCerrarTiempoCuarentena');

abrirPopUpTiempoCuarentena.addEventListener('click', function() {
  overlayTiempoCuarentena.classList.add('active');
  console.log("click")
});

botonCerrarTiempoCuarentena.addEventListener('click', function() {
  overlayTiempoCuarentena.classList.remove('active');
  console.log("click")
});
//POPUP LosNoventa--------------------------------------
let abrirPopUpLosNoventa = document.getElementById('botonAbrirPopUpLosNoventa');
let overlayLosNoventa = document.getElementById('overlayLosNoventa');
let popUpLosNoventa = document.getElementById('popUpLosNoventa');
let botonCerrarLosNoventa = document.getElementById('botonCerrarLosNoventa');

abrirPopUpLosNoventa.addEventListener('click', function() {
  overlayLosNoventa.classList.add('active');
  console.log("click")
});

botonCerrarLosNoventa.addEventListener('click', function() {
  overlayLosNoventa.classList.remove('active');
  console.log("click")
});
//POPUP 123Va--------------------------------------
let abrirPopUp123Va = document.getElementById('botonAbrirPopUp123Va');
let overlay123Va = document.getElementById('overlay123Va');
let popUp123Va = document.getElementById('popUp123Va');
let botonCerrar123Va = document.getElementById('botonCerrar123Va');

abrirPopUp123Va.addEventListener('click', function() {
  overlay123Va.classList.add('active');
  console.log("click")
});

botonCerrar123Va.addEventListener('click', function() {
  overlay123Va.classList.remove('active');
  console.log("click")
});