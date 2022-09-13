let listaDePeças = new Array['Disco de Freio','Motor','Amortecedor', 'Filtro de ar','Roda','Pneu']
let peso = 0
let nomeDaPeça = 3;



if (listaDePecas.length < 10){
    console.log('É possível cadastrar mais peças!!!')
}
else{
    console.log('Não há mais espaço na caixa')
}
if (peso < 100){
    console.log('A peça deve pesar no mínimo 100g')
}
else{
    console.log('A peça possui o peso adequado')
}

let nomePeca = 'Freio'

if (nomePeca.length > 3){
    console.log('O nome da peça esta adequado para o cadastro')
}
else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio.")
}
else{
    console.log("O nome da peça deve ter mais de 3 caracteres, digite o nome adequado")
}



