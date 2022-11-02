function contar () {
    let inicio =  document.getElementById('inicio')
    let fim =  document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pa = Number(passo.value)
        // QUANDO PASSO FOR 0 
        if (pa <= 0) {
            window.alert('Passo Inválido! Considerando passo 1')
            pa = 1
        }
        if (ini < fi) {
            // CONTAGEM CRESCENTE
            for(let c = ini ; c <= fi ; c += pa) {
                res.innerHTML += `${c} &#128073; ` 
             }   
        } else {
            //CONTAGEM REGRESSIVA 
            for (let c = ini ; c >= fi ; c -= pa) {
                res.innerHTML += `${c} &#128073 `
            }
        }
        res.innerHTML += `\u{1F6A9}`
    }
}