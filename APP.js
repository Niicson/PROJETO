    function pesquisar () {

let section = document.getElementById("resultados-pesquisa");


let campoPesquisa = document.getElementById("campo-pesquisa").value; 

if (campoPesquisa == "") {
    section.innerHTML = "Nenhum resultado encontrado."
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = " ";
let titulo = "";
let descrição = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição  = dado.descrição.toLowerCase()
    if (titulo.includes(campoPesquisa) || 
    descrição.includes(campoPesquisa)) {
        resultados += 
        `
          <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descrição-meta"> ${dado.descrição} </p>
          <a href="${dado.link}" target="_blank">R$ 9,99</a>
          </div>
       `

    }
}

section.innerHTML = resultados
    }


    
    