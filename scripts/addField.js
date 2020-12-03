// Procurar o botao

document.querySelector("#add-time").addEventListener('click', cloneField)

// Quando clicar no botao

// Executar uma acao

function cloneField() {

    // Duplicar os campos. Que campos? 

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // PEgar os campos. Que campos?

    const fields = newFieldContainer.querySelectorAll("input")

    // Para cada campo, limpar.

    fields.forEach(function(field) {
        // Pegar o field do momento e limpa ele.

        field.value = ""

    })

    // Colcoar na pagina. Onde?

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
 
    
