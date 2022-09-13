function botão() {

    const limiteDePessoas = 1;
    let listaDePessoas = [];
    contador = 0;
    nome = false;
    nDePessoas = false;

    while (contador != 1) {

        var nomeConvidado = prompt("Digite o nome do(a) convidado(a)");
        if (nomeConvidado.length > 3) {
            nome = true;
            document.getElementById("g").innerHTML =
                " Adicionado: " + nomeConvidado;
        } else if (nomeConvidado.length == 0) {
            alert("O nome do(a) convidado não pode ser vazio.")
        }
        else {
            alert("O nome do(a) convidado(a) deve ter mais de 3 caracteres, digite um nome adequado")
        };
        var idade = prompt("Digite a idade:" + nomeConvidado)
        if (idade >= 18) {
            alert('O convidado possui idade adequada')
        }
        else {
            alert('O convidado tem de ser maior de 18 anos!')

        };
        if (listaDePessoas.length < limiteDePessoas) {
            nDePessoas = true;
            if (nome === true, nDePessoas === true) {
                listaDePessoas.push(nomeConvidado)
                alert(nomeConvidado + ", Foi adicionado!")
                contador += 1
            }

        } else {
            nDePessoas = false;
            if (contador == 1) {
                break;
            };
        };
    };

    alert("A lista já tem" + limiteDePessoas + "convidados cadastrados")
    alert("Sistema completo, obrigado!")

    i = 0;

    for (var i = 0; i < listaDePessoas.length; i++) {
        alert(listaDePessoas[i] + ".")
    }
}