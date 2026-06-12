console.log("5teste")

console.log('Comando de saída')

//COMENTÁRIO DE LNHA SIMPLES 

/*
    COMENTÁRIO DE MÚLTIPLAS LINHAS,
    OU SEJA, POSSO DESCREVER ALGO
    NESSE TIPO DE COMENTÁRIO...
*/

    //CRIANDO VÁRIAVEIS
  let num = 50
  var num2 = 180
  const num3 = 450

  console.log(num)
  console.group(num2)
  console.log(num3)
  
if (true){
    let num4 = 420
    var num5 = 18-

    console.log(num4)

    console.log(num)
}    

console.log (num5)

num = 5 

console.log(num)

num2 = 6 

console.log(num2)

//num3 = 12

//CONCATENAÇÃO
console.log("Valor de num" + num)
console.log('Valor dde num3' , num3)
console.log(`Valor de num2 ${num2}`)
console.log('A soma dosd números ', + 15 + 8)
console.log('A somadosd números ',  15 + 8)
console.log(`A soma dos números ${15+8}`)
console.log('A soma dos números ' + num + num2)
console.log(' A soma dos números ', num2 + 8)
console.log(`A soma dos números ${num3 - num2}`)

//OPERADORES MATEMÁTICOS
/*
     + SOMA
     - SUBTRAÇÃO
     * MULTIPLICAÇÃO
     / DIVISÃO
     % MÓDULO (RESTO DA DIVISÃO)
     */

     console.log('SOMA DAS VARIÁVEIS', num + num2)
     console.log('SUBTRAÇÃO DAS VARIÁVEIS', num3 - num)
     console.log('MULTIPLICAÇÃO ', num5 * 2)
     console.log('DIVISÃO DE VALORES ', num2 / 5)
     console.log('RESTO DA DIVISÃO ', num2 % 2)
     console.log(`RESTO DA DIVISÃO ${num3 % 3}`)

     //OPERADORES RELACONADOS 
     /*
         == IGUAL
         > MAIOR
         < MENOR
         >= MAIOR IGUAL
         <= MENOR IGUAL
         != DIFERENTE
    */

    //OPERADORES LÓGICO
    /* 
         && E 
         || OU
    */

console.log('TESTE DE RELACIONAIS ', 10 == 5)
console.log('TESTE RELACIONAIS ', 10 != 5)
console.log('TESTE RELACIONAIS ', 10 > 5)
console.log('TESTE RELACIONAIS ', 10 < 5)
console.log('TESTE RELACIONAIS ', 10 >= 5)
console.log('TESTE RELACIONAIS', 10 <= 5)
console.log('TESTE LÓGICO', (10 > 5) && (15 < 8)) 
console.log('TESTE LÓGICO ', (10 > 5) || (15 < 8))

//TESTE LÓGICO 
let idade = 25

if(idade >= 18){
    console.log('Maior de idade')
}else{
    console.log('Menor de idade')
}

/** 
 * RENOVAÇÃO DE CNH
     MENOR QUE 18 - NÃO PERMITIDO
     18 ATÉ 49 - 10 ANOS
     50 ATÉ 69 - 5 ANOS
     70 ACIMA - 3 ANOS
*/

if (idade < 18){
    console.log(`COM A IDADE DE ${idade}, NÃO É PERMITIDO POSSUIR CNH`)
}else if(idade < 50){
         console.log(`COM IDADE DE ${idade}, 10 ANOS PARA RENOVAR`)
}else if(idade < 70) {
    console.log(`COM A IDADE DE ${idade}, 5 ANOS PARA RENOVAR`)
}else {
    console.log(`COM A IDADE DE ${idade}, 3 ANOS PARA RENOVAR`)
}   