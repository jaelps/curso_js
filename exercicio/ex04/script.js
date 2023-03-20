function contar(){
    var numb1 = window.document.querySelector('input#txtNumbIncio')
    var numb2 = window.document.querySelector('input#txtNumbFim')
    var numb3 = window.document.querySelector('input#txtNumbPasso')
    var result = window.document.querySelector('div#res')

        if (numb1.value.length == 0 || numb2.value.length == 0 || numb3.value.length == 0){
            window.alert('[erro] Falta dados!')
        } else {
            result.innerHTML = 'Contando:<br>'
            var n1 = Number(numb1.value)
            var n2 = Number(numb2.value)
            var n3 = Number(numb3.value)
            
            if (n3 <= 0){
                window.alert('Passo invalido')
                n3 = 1
            }

            if(n1 < n2){
                for (var c = n1; c <= n2; c += n3){
                    result.innerHTML += `${c} \u{1F600}`
                }
                result.innerHTML += '\u{1F3C1}'
            } else {
                for(var c = n1; c >= n2; c -= n3){
                    result.innerHTML += `${c} \u{1F449}`
                }
        } 

        result.innerHTML += `${c} \u{1F600}`
    }

    

    /*for (var i = n1;i <= n2;i += n3){
        result.innerHTML = `${i}`
    }*/
    /*var i = n1
    while (i <= n2){
        result.innerHTML = `${i}`
        var i =+ n3
    }*/

}