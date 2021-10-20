// Exercícios de JS realizados acompanhando o bootcamp. 

function comparaNumeros(num1, num2) {

    if(!num1 || !num2) return "Defina dois números";
    
 const primeiraFrase = criaPrimeiraFrase(num1, num2);   
 const segundaFrase = criaSegundaFrase(num1, num2);  
 
 return `${primeiraFrase}${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){

    let saoIguais = '';

    if(num1 != num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if (compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20}.`
}

console.log(comparaNumeros(0,0));
    
    
    //const saoIguais = num1 === num2;

    //const soma = num1 + num2;

    //if(saoIguais){
        // Se forem iguais, vai retornar...
        //return "São iguais";
    
// caso não sejam iguais terá esse retorno sem precisar colocar o else
  //  return "Não são iguais";


//If ternario seria

// return saoIguais ? "São iguais" : "não são iguais";
// LEIA-SE: Se são iguais, retorna São iguais. Caso contrário, retorna "Não são iguais".