 
let valores = [8,1,7,4,2,9]

for(let pos=0 ; pos<valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// ---------------------------------- //

/*
    para(for) cada posição dentro(in) de num
    for in só funciona para arrays
*/

let num = [7,5,3,1,9,4,6,2,8]
num.sort()

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

