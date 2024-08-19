function duplicates(arreglo){
    let numeros = []
    let duplicados = []
    for(let i = 0; i<arreglo.length; i++){
        if(! numeros.includes(arreglo[i])){
            numeros.push(arreglo[i])
        }
        else{
            if(! duplicados.includes(arreglo[i])){
                duplicados.push(arreglo[i])
            }
        }
    }
    console.log(duplicados.length)
}

let arreglo = [1, 1, 2, 3, 4, 5, 5, 5, 5, 6]
duplicates(arreglo)