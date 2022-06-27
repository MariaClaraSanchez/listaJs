//Exercício 1
function exer1() {
    let valor = document.getElementById("ex1").value;
    console.log(valor);
    let result = '';

    if (valor < 0) {
        result = 'NEGATIVO'
    }
    else if (valor > 0) {
        result = 'POSITIVO'
    }
    else {
        result = 'ZERO'
    }
    document.getElementById("e1").innerHTML = `O valor = <b>${valor}</b> é <b> ${result}</b>`;

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
            <p>Tabuada do <b>${valor}:</b> <br> </p>

            <p><br> ${tabuada}</p>
            `;
    } else {
        document.getElementById("e2").innerHTML = `
        <p class="text-danger">Número inválido!</p>
        `
    }

    limpar();
}

//Exercício 3

function exer3() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;


    if (altura == "" || peso == "") {
        document.getElementById("e3").innerHTML = `
        <p class="text-warning">Números inválidos!<br> Por favor digite corretamente!
        </p>
        `
    }

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
        <p>Seu IMC é ${IMC} -  ${situacao}
        </p>
        `
    limpar();
}

//Exercício 4

function exer4() {
    custoFabrica = document.getElementById("ex4").value;

    if (custoFabrica == "") {
        document.getElementById("e4").innerHTML = `
        <p class="text-danger">Por favor digite o custo!!
        </p>
        `
    }
    else{

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
        <p>O custo final do consumidor é : R$ ${custo_total}
        </p>
        `
    }
    
    limpar();
}

//Exercício 5
function exer5() {
    salario = document.getElementById("salario").value;
    reajuste = document.getElementById("reajuste").value;

    if (salario == "" || reajuste == "") {
        document.getElementById("e5").innerHTML = `
        <p class="text-danger">Por favor digite um dos valores!!
        </p>
        `
    }
    else if(reajuste>100 || reajuste<0){
        alert("Valor não pode ser maior que menor que 0% e nem maior 100%");
    }
    else{

        salario = salario.substring(3);
        salario = salario.replaceAll('.', '');
        salario = salario.replaceAll(',', '.');
        salario = parseFloat(salario);

        reajuste = parseFloat(reajuste);        
        salario += (salario* (reajuste/100));
        
        salario = salario.toFixed(2);
        salario = salario.replaceAll('.', ',');

        document.getElementById("e5").innerHTML = `
        <p>O salário final é : <b> R$ ${salario} </b>
        </p>
        `
    }
    limpar();
}

//Exercício 6
function exer6() {
    
}


function limpar() {
    $("input").val("");
}

(function () {
    VMasker(document.getElementById("ex4")).maskMoney({ unit: 'R$' });
    VMasker(document.getElementById("salario")).maskMoney({ unit: 'R$' });
})();

