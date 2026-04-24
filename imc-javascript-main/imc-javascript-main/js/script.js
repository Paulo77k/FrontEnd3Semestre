function calcular() {

  const nome = document.getElementById("nome").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  console.log(altura);
  console.log(peso);

  if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
    alert("Preencha todos os campos corretamente.");
    return false;
  }

  const imc = calcularIMC(altura, peso);
  const textoIMC = gerarTextoIMC(imc);

  console.log(nome);
  console.log(altura);
  console.log(peso);
  console.log(imc);
  console.log(textoIMC);

  const objIMC = {
    nome: nome,
    altura: altura,
    peso: peso,
    imc: imc,
    textoIMC: textoIMC
  }
  const retorno = cadastrarnaAPI(objIMC);//retorna true ou false
  if (retorno) {

    const tabela = document.getElementById("cadastro");



    cadastro.innerHTML += ` <td>${nome}</td>
                <td>1,80</td>
                <td>85</td>
                <td>26.234567901234566</td>
                <td>Sobrepeso</td>
                `;
  }
  else {
    alert("Erro ao cadastrar na API. Tente novamente mais tarde.");
  document.getElementById("nome").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
  alert(` ${nome} foi cadastrado no banco:
  nome: ${nome}
  altura: ${altura}
  peso: ${peso}`
  );
  }

}


async function cadastrarnaAPI(objIMC) {

  try {
    const resposta = await fetch("http://localhost:3000/imc", {
      method: "POST",
      body: JSON.stringify(objIMC),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
    return true;
  }
  catch (e) {
    console.log("Erro ao cadastrar na API: " + e);
    return false;
  }

}



function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}
async function cadastrarMNApi(objetoCadastro) {

  console.log(objetoCadastro);
  //aqui você pode adicionar o código para enviar os dados para um servidor ou armazená-los localmente
  let resposta = await fetch("http://localhost:3000/contatos", {
    method: "POST",
    body: json.stringify(objetoCadastro),
    headers: {
      "Content-Type": "application-json; charset=UTF-8"
    }
  });
}



function gerarTextoIMC(imc) {
  if (imc < 16.5) {
    return "Magreza grave";
  } else if (imc < 18.5) {
    return "Magreza leve";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else if (imc < 35) {
    return "Obesidade";
  } else if (imc < 38.5) {
    return "Obesidade grave";
  }
}

async function BuscarImc() {
  //aqui você pode adicionar o código para enviar os dados para um servidor ou armazená-los localmente
  try {
    const retorno = await fetch("http://localhost:3000/imc");
    const dadosRetornados = await retorno.json();
    console.log(retorno.json());
let template = "";
    for (let i = 0; i < dadosRetornados.length; i++) {
      const tabela = document.getElementById("cadastro");
      tabela.innerHTML += ` <td>${dadosRetornados[i].nome}</td>
                <td>${dadosRetornados[i].altura}</td>
                <td>${dadosRetornados[i].peso}</td>
                <td>${dadosRetornados[i].imc}</td>
                <td>${dadosRetornados[i].textoIMC}</td>
                
                `;
                
    }
    tabela.innerHTML = template;
  } catch (e) {
    console.log("Erro ao buscar IMC: " + e);
  }
}
  



