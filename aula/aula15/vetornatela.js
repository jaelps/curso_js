let valores= [5, 9, 11, 1, 4, 3]

//console.log(valores[0])


/*for(let pos = 0; pos<valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

for( let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}