function tabuada () {
    let num = document.getElementById('num')
    let tab = document.getElementById('select_tab')
    if (num.value.length == 0) { 
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // LIMPA TELA
        while (c <= 10) {
            let item = document.createElement('option') // MESMA COISA QUE CRIAR OPTIONS NO HTML
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}` // IMPORTANTE PARA OUTRAS LINGUAGENS
            tab.appendChild(item) 
            c++ 
        }
    }
}