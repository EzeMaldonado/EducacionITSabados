     
var btnBack = window.document.querySelectorAll('button')[0]
 
var btnNext = window.document.querySelectorAll('button')[1]
 
var arrayDeColores = ["red","blue","green","brown"]
 
document.getElementById('caja').style.backgroundColor = arrayDeColores[0]
document.getElementById('nombre-color').innerText = arrayDeColores[0]
 
var colorBack = () => {
    let valorBackground = document.getElementById("caja").style.backgroundColor.toString()
    let posicionBackground = arrayDeColores.indexOf(valorBackground)
    let posFinal
 
    if(posicionBackground != 0){
        posFinal = posicionBackground - 1
    }
    else{
        posFinal = arrayDeColores.length - 1 
    }
 
    document.getElementById("caja").style.backgroundColor = arrayDeColores[posFinal]
    document.getElementById('nombre-color').innerText = arrayDeColores[posFinal]

}
 
var colorNext = () => {
    let valorBackground = document.getElementById("caja").style.backgroundColor.toString()
    let posicionBackground = arrayDeColores.indexOf(valorBackground)
    let posFinal
 
    if(posicionBackground != arrayDeColores.length - 1){
        posFinal = posicionBackground + 1
    }
    else{
        posFinal = 0
    }
 
    document.getElementById("caja").style.backgroundColor = arrayDeColores[posFinal]
    document.getElementById('nombre-color').innerText = arrayDeColores[posFinal]
 
}
 
btnBack.addEventListener('click', colorBack)
btnNext.addEventListener('click', colorNext)