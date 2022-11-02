let num = [5,8,2]
console.log(num);

/* 
    ACRESCENTA VALORES 
*/

num[3] = 6     //acrescenta o valor 6 na posição 3
console.log(num);

num.push(7)    //acrescenta o valor 7 na ultima posição do array
console.log(num);

/* 
    COMPRIMENTO DO ARRAY
*/ 

console.log(`o vetor tem ${num.length} posições`); 

/* 
    CONSULTAR POSIÇÕES DO ARRAY
*/
console.log(`o primeiro valor do vetor é ${num[0]}`);


/* 
    ORDEM CRESCENTE 
*/

console.log(`ordem crescente ${num.sort()}`); //pega os elementos e põe em ordem crescente

/*
    BUSCAR UM VALOR DENTRO DO ARRAY
*/
console.log(`Indice do numero 7 é ${num.indexOf(7)}`); // posição 3 (depois do sort)
console.log(`Indice do numero 3 é ${num.indexOf(3)}`); // js pesquisou dentro do vetor e não encontrou, retorna -1 