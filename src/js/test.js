
window.addEventListener('load', ()=> {
    const display = document.querySelector('.calculadora-display');
    const historial = document.querySelector('.historial-caption');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    const keypadButtonsArray = Array.from(keypadButtons);
    var operacion = ''
    keypadButtonsArray.forEach( (button) => {
        button.addEventListener('click', () => {
            calculadora(button, display, historial);
            boton = button.innerHTML
            operacion += boton.toString()
        })
    })
})


function calculadora(button, display, historial) {
    historial = historial.innerHTML
    var resultado = operacion.innerHTML
    console.log(resultado)
    /*localStorage.setItem("operacion", resultado)*/
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display, resultado, historial);
            break;

        default:
            actualizar(display, button); 
            
            break;
    }

}

let lista = []

function calcular(display, operacion, historial) {
    display.innerHTML = eval(display.innerHTML)
    var des = display.innerHTML
    des = des.toString()
    ope = operacion + '=' + des
    //document.getElementById("histo").innerHTML = ope;

    //Buscando en la lista
    lista.forEach(lista => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = `${lista}`;
        li.appendChild(p);
        ul.appendChild(li);
    });
   

    lista = [...lista, ope]

    guargar_localstorage(lista)
    obtener_localstorage(historial)
}

function actualizar(display,button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
    obtener_localstorage();
    //historial.innerHTML = button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0
}


function guargar_localstorage(lista){

    localStorage.setItem("operacion", JSON.stringify(lista))
}

function obtener_localstorage(historial){

    lista = JSON.parse(localStorage.getItem('operacion')) || [];



    //guargar_historial(lista, historial)
    
}

function guargar_historial(resultado, historial){
    
    historial.innerHTML = resultado;
}

