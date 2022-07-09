//Exercício 1
function exer1() {
    let valor = document.getElementById("ex1").value;
    let result = '';
    console.log(valor)
    if (valor == "") {
        document.getElementById("e1").innerHTML = `
        <p class="text-warning" >Número inválidos!<br> Por favor, digite corretamente!
        </p>
        `
    } else {
        if (valor < 0) {
            result = ' NEGATIVO'
        }
        else if (valor > 0) {
            result = ' POSITIVO'
        }
        else {
            result = ' ZERO'
        }
        document.getElementById("e1").innerHTML = `O valor = <b>${valor}</b> é  <b>${result}</b>`;
    }


    //Limpar forms
    limpar();
}

//Exercício 2
function exer2() {
    let valor = document.getElementById("ex2").value;
    console.log(valor);

    if (valor <= 9 && valor != "") {
        tabuada = "";
        for (i = 1; i < 10; i++) {
            tabuada += `<b>${valor}</b>X<b>${i}</b> = ${valor * i}<br>`
            // console.log(tabuada)
        }
        document.getElementById("e2").innerHTML = `
            <p style="margin-top: 15px;">Tabuada do <b>${valor}:</b> <br> </p>

            <p style="margin-top: 15px;"><br> ${tabuada}</p>
            `;
    } else {
        document.getElementById("e2").innerHTML = `
        <p class="text-danger" style="margin-top: 15px;">Número inválido!</p>
        `
    }

    limpar();
}

//Exercício 3

function exer3() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;


    if (!altura || !peso) {
        document.getElementById("e3").innerHTML = `
        <p class="text-warning" style="margin-top: 15px;" >Números inválidos!<br> Por favor, digite corretamente!
        </p>
        `
    }
    else {
        console.log(altura + peso);

        let IMC = peso / Math.pow(altura, 2);
        IMC = Math.round(IMC * 100) / 100;

        let situacao = '';

        if (IMC < 18.8) {
            situacao = "Você está abaixo do peso ideal";
        }
        else if (IMC >= 18.5 && IMC <= 24.9) {
            situacao = "Parabéns – Você está em seu peso normal!"
        }
        else if (IMC >= 25.0 && IMC <= 29.9) {
            situacao = "Você está acima de seu peso (sobrepeso)"
        }
        else if (IMC >= 30.0 && IMC <= 34.9) {
            situacao = "Obesidade grau I"
        }
        else if (IMC >= 35.0 && IMC <= 39.9) {
            situacao = "Obesidade grau II"
        }
        else {
            situacao = "Obesidade grau III"
        }

        document.getElementById("e3").innerHTML = `
            <p style="margin-top: 15px;">Seu IMC é ${IMC} -  ${situacao}
            </p>
            `

    }


    limpar();
}

//Exercício 4

function exer4() {
    custoFabrica = document.getElementById("ex4").value;

    if (custoFabrica == "") {
        document.getElementById("e4").innerHTML = `
        <p class="text-danger" style="margin-top: 15px;">Por favor, digite o custo!!
        </p>
        `
    }
    else {

        custoFabrica = custoFabrica.substring(3);
        custoFabrica = custoFabrica.replaceAll('.', '');
        custoFabrica = custoFabrica.replaceAll(',', '.');

        custoFabrica = parseFloat(custoFabrica);

        let distribuidor = (28 * custoFabrica) / 100;
        let imposto = (45 * custoFabrica) / 100;
        let custo_total = custoFabrica + distribuidor + imposto;

        custo_total = custo_total.toFixed(2);
        custo_total = custo_total.replaceAll('.', ',');

        document.getElementById("e4").innerHTML = `
        <p style="margin-top: 15px;">O custo final do consumidor é : R$ ${custo_total}
        </p>
        `
    }

    limpar();
}

//Exercício 5
function exer5() {
    let salario = document.getElementById("salario").value;
    let reajuste = document.getElementById("reajuste").value;

    if (salario == "" || reajuste == "") {
        document.getElementById("e5").innerHTML = `
        <p class="text-warning" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else if (reajuste > 100 || reajuste < 0) {
        alert("Valor não pode ser maior que menor que 0% e nem maior 100%");
    }
    else {

        salario = salario.substring(3);
        salario = salario.replaceAll('.', '');
        salario = salario.replaceAll(',', '.');
        salario = parseFloat(salario);

        reajuste = parseFloat(reajuste);
        salario += (salario * (reajuste / 100));

        salario = salario.toFixed(2);
        salario = salario.replaceAll('.', ',');

        document.getElementById("e5").innerHTML = `
        <p style="margin-top: 15px;">O salário final é : <b> R$ ${salario} </b>
        </p>
        `
    }
    limpar();
}

//Exercício 6
function exer6() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);


    if (!n1 || !n2 || !n3) {
        document.getElementById("e6").innerHTML = `
        <p class="text-danger" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else {
        let media = (n1 + n2 + n3) / 3;
        console.log(media);
        document.getElementById("e6").innerHTML = `<p style="margin-top: 15px;">A média das notas é <b>${media}</b></p>`
    }

}

//Exercício 7
function exer7() {
    let salario = document.getElementById("salario_hora").value;
    let horas = document.getElementById("horas_trabalhadas").value;

    if (!salario || !horas) {
        document.getElementById("e7").innerHTML = `
        <p class="text-warning" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else if (horas < 0) {
        alert("Hora não pode ser maior que menor que 0!");
    }
    else {

        salario = salario.substring(3);
        salario = salario.replaceAll('.', '');
        salario = salario.replaceAll(',', '.');
        salario = parseFloat(salario);

        horas = parseFloat(horas);
        let salario_regular = (salario * 160); //150 - por mês
        let hora_extra = horas - 160;
        let salario_final = 0;

        if (hora_extra >= 0) {
            salario_final = salario_regular + (hora_extra * (salario + 0.5));
        }
        else {
            salario_final = salario_regular;
        }

        salario_final = salario_final.toFixed(2);
        salario_final = salario_final.replaceAll('.', ',');

        document.getElementById("e7").innerHTML = `
        <p style="margin-top: 15px;">O salário final é : <b> R$ ${salario_final} </b>
        </p>
        `
    }
    limpar();
}

//Exercício 8
function exer8() {
    let salario, vendas, total = 0, diferenca = 0;

    salario = document.querySelector("#salario8").value;
    vendas = document.querySelector("#vendas").value;

    if (!salario || !vendas) {
        document.getElementById("e8").innerHTML = `
        <p class="text-danger" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else {
        salario = salario.substring(3);
        salario = salario.replaceAll('.', '');
        salario = salario.replaceAll(',', '.');
        salario = parseFloat(salario);

        vendas = vendas.substring(3);
        vendas = vendas.replaceAll('.', '');
        vendas = vendas.replaceAll(',', '.');
        vendas = parseFloat(vendas);

        if (vendas <= 1500) {
            total = salario + (0.03 * vendas);
            console.log(0.03 * vendas);
        } else {
            diferenca = vendas - 1500;
            total = salario + (0.03 * 1500) + (0.05 * diferenca);
        }

        document.getElementById("e8").innerHTML = `<p style="margin-top: 15px;">O salário será igual a R$ ${total}</p>`
    }

}


//Exercício 9
function exer9() {
    const gasolina = 3.30;
    const alcool = 2.90;

    let litro = document.getElementById("litros").value;
    let tipo = document.getElementById("tipo").value;

    if (!litro || !tipo) {
        document.getElementById("e9").innerHTML = `
        <p class="text-warning" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else {
        if (litro <= 20) {
            if (tipo == "Gasolina") {
                valor_pago = (litro * 0.04) * gasolina;
            }
            else {
                valor_pago = (litro * 0.03) * alcool;
            }
        }
        else {
            if (tipo == "Gasolina") {
                valor_pago = (litro * 0.06) * gasolina;
            }
            else {
                valor_pago = (litro * 0.04) * alcool;
            }
        }
        valor_pago = valor_pago.toFixed(2);
        valor_pago = valor_pago.replaceAll('.', ',');

        document.getElementById("e9").innerHTML = `
        <p style="margin-top: 15px;">O valor pago foi : <b> R$ ${valor_pago} </b>
        </p>
        `
    }

}

//Exercício 10
function exer10() {
    let nascimento = parseInt(document.querySelector("#nascimento").value);
    let ingesso = parseInt(document.querySelector("#ingresso").value);
    let situacao = '';

    if ((!nascimento) || (!ingesso)) {
        document.querySelector("#e10").innerHTML = `
        <p class="text-danger" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else {
        let idade_atual = 2022 - nascimento;
        let tempo_servico = 2022 - ingesso;

        if ((idade_atual >= 65 || tempo_servico >= 30) || ((idade_atual >= 60 && tempo_servico >= 25))) {

            situacao = 'REQUERER APOSENTADORIA!';
        }
        else {
            situacao = 'NÃO REQUERER APOSENTADORIA!';
        }

        document.querySelector("#e10").innerHTML = `
        <p style="margin-top: 15px;">O funcionário ${situacao}
        </p>
        `
    }

    limpar();
}

//Exercício 11
function exer11() {
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let cpf = document.querySelector("#cpf").value;
    let idade = document.querySelector("#idade").value;


    if ((!nome) || (!email) || (!cpf) || (!idade)) {
        document.querySelector("#e11").innerHTML = `
        <p class="text-warning" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else {
        document.querySelector("#e11").innerHTML = `
        <p> <br>
        <b> Dados digitados </b> <br> <br>
            <b>Nome : </b> ${nome} <br>
            <b>Email : </b>${email} <br>
            <b>CPF : </b>${cpf} <br>
            <b>Idade : </b>${idade} <br>
        </p>
        `
    }

    limpar();
}

//Exercício 12
function exer12() {
    let etanol = parseFloat(document.querySelector("#etanol_12").value);
    let gasolina = parseFloat(document.querySelector("#gasolina_12").value);

    if ((!etanol) || (!gasolina)) {
        document.querySelector("#e12").innerHTML = `
        <p class="text-danger" style="margin-top: 15px;">Por favor, digite um dos valores!!
        </p>
        `
    }
    else {
        valor = (etanol / gasolina) * 100;
        if (valor >= 70) {
            document.getElementById("i12").src = "./img/gasolina.png";
        } else {
            document.getElementById("i12").src = "./img/etanol.png";
        }
    }

    limpar();
}

//Exercício 13
exer13();

function exer13() {

    valor = Math.floor(Math.random() * 6 + 1)
    switch (valor) {
        case 1:
            document.getElementById("i13").src = "./img/face1.png";
            break;
        case 2:
            document.getElementById("i13").src = "./img/face2.png";
            break;
        case 3:
            document.getElementById("i13").src = "./img/face3.png";
            break;
        case 4:
            document.getElementById("i13").src = "./img/face4.png";
            break;
        case 5:
            document.getElementById("i13").src = "./img/face5.png";
            break;
        case 6:
            document.getElementById("i13").src = "./img/face6.png";
            break;
        default:
            console.log('Número Inválido!');
    }
}

//Exercício 15
function exer15() {

    data = document.querySelector("#date").value;

    let [ano, mes, dia] = data.split('-');
    let valor = "";
    if (!ano || !mes || !dia) {
        document.querySelector("#e15").innerHTML = `
        <p class="text-warning" style="margin-top: 15px;">Por favor, digite um data!!
        </p>
        `
    }
    else {

        switch (mes) {
            case "01":
                valor = 'Janeiro';
                break;
            case "02":
                valor = 'Fevereiro';
                break;
            case "03":
                valor = 'Março';
                break;
            case "04":
                valor = 'Abril';
                break;
            case "05":
                valor = 'Maio';
                break;
            case "06":
                valor = 'Junho';
                break;
            case "07":
                valor = 'Julho';
                break;
            case "08":
                valor = 'Agosto';
                break;
            case "09":
                valor = 'Setembro';
                break;
            case "10":
                valor = 'Outubro';
                break;
            case "11":
                valor = 'Novembro';
                break;
            case "12":
                valor = 'Dezembro';
                break;
            default:
                console.log('Data Inválida!');
        }
        document.querySelector("#e15").innerHTML = `
        <p style="margin-top: 15px;"> 
        ${dia} de ${valor} de ${ano}
        </p>
        `
    }
}


function limpar() {
    $("input").val("");
}

(function () {
    VMasker(document.getElementById("ex4")).maskMoney({ unit: 'R$' });
    VMasker(document.getElementById("salario")).maskMoney({ unit: 'R$' });
    VMasker(document.getElementById("salario_hora")).maskMoney({ unit: 'R$' });
    VMasker(document.getElementById("salario8")).maskMoney({ unit: 'R$' });
    VMasker(document.getElementById("vendas")).maskMoney({ unit: 'R$' });

})();

