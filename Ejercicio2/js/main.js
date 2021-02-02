
//Inicio las variables
var btn = document.querySelector("button")
var externo = document.getElementById("externo")
var medio = document.getElementById("medio")
var interno = document.getElementById("interno")
var body = document.querySelector("body")



externo.addEventListener('click', function(e) {
    let select = document.querySelector("select").value
    this.style.background = select   
},false  )

medio.addEventListener('click', function(e) {
    let check = document.querySelector("input")
    if(!check.checked ){
        e.stopPropagation()
    }
    let select = document.querySelector("select").value
    this.style.background = select
},false)

interno.addEventListener('click', function(e) {
    let check = document.querySelector("input")

    if(!check.checked ){
        e.stopPropagation()
    }
    
    let select = document.querySelector("select").value
    this.style.background = select
},false)


// Al iniciar la pantalla
window.onload = () => {
    if(innerWidth<500)
    {
        body.style.background="#eee"
    }
    else
    {
        body.style.background="#fff"
    }
}

// Al midificar el ancho de la pantalla

window.addEventListener("resize",()=>{

    if(innerWidth<500)
    {
        body.style.background="#eee"
    }
    else
    {
        body.style.background="#fff"
    }
})

//Reset
btn.addEventListener('click',()=>{

    externo.style.background = "#FFFFFF"
    interno.style.background = "#FFFFFF"
    medio.style.background = "#FFFFFF"

})



