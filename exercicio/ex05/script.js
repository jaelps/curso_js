function gerar(){
    var numeroBase = window.document.querySelector('input#txtn')
    var numb = Number(numeroBase.value)
    //var tabela = window.document.querySelector('table#tabela')
    var tabela = window.document.querySelector('select#seltab')

    if (numb <= 0){
        window.alert('Por favor, digitar numero!!')
    } else {
            tabela.innerHTML = ''
            for(var i = 1; i <= 10; i++){
            var multi = i * numb
            //tabela.innerHTML += `<tr><dt>${numb} x ${i} = ${multi}</dt></tr>`
            let item = document.createElement('option')
            item.text = `${numb} x ${i} = ${multi}`
            tabela.appendChild(item)
        }
    }
    
    
}