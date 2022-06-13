function maquinaEscreverAnimation(txt, elemento) {
     for (let i=0; i < txt.length; i++) {
         setTimeout(() => {
             let letra = document.createTextNode(txt[i])
             elemento.appendChild(letra)
         }, 75 * i);
     
     }
}

let h1Poema = document.querySelector("#poema > h1")
let btn = document.querySelector("#txt-final > button")

maquinaEscreverAnimation("A Menina Do Cabelo Azul", h1Poema)

btn.addEventListener("click", function() {
     btn.parentNode.removeChild(btn)
     let pTextoFinal = document.querySelector("#txt-final > p")
     maquinaEscreverAnimation("Você é a melhor coisa que aconteceu em minha vida", pTextoFinal)
})
