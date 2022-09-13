

function botão() {

    const limiteDePeças = 10;
    let listaDePeças = [];
    contador = 0;
    nome = false;
    peso = false;
    nDePeças = false;

    while (contador != 10) {

        var nomeDaPeça = prompt("Digite o nome da peça para ser adicionada a lista:");
        if (nomeDaPeça.length > 3) {
            nome = true;
            document.getElementById("g").innerHTML =
                " Adicionado: " + nomeDaPeça;
        } else if (nomeDaPeça.length == 0) {
            alert("O nome da peça não pode ser vazio.")
        }
        else {
            alert("O nome da peça deve ter mais de 3 caracteres, digite o nome adequado")
        };
        var pesoDaPeça = prompt("Digite o peso do(a):" + nomeDaPeça)
        if (pesoDaPeça >= 100) {
            peso = true;
            alert('A peça possui o peso adequado')
        }
        else {
            alert('A peça deve pesar no mínimo 100g')

        };
        if (listaDePeças.length < limiteDePeças) {
            nDePeças = true;
            if (nome === true, peso === true, nDePeças === true) {
                listaDePeças.push(nomeDaPeça)
                alert(nomeDaPeça + ", Foi adicionado!")
                contador += 1
            }

        } else {
            nDePeças = false;
            if (contador == 10) {
                break;
            };
        };
    };

    alert("A lista já tem" + limiteDePeças + "itens cadastrados")
    alert("Sistema completo, obrigado!")

    i = 0;

    for (var i = 0; i < listaDePeças.length; i++) {
        alert(listaDePeças[i] + ".")
    }
}