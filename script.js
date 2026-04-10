let filmes=[];

document.getElementById("btnCadastrar").addEventListener("click", function(){
    let titulo = document.getElementById("titulo").value; // document -> Documento/"corpo" da página HTML;
    let ano = document.getElementById("ano").value; // getElementByID -> Pega um elemento atráves do ID atribuído a ele;
    let classificacao = document.getElementById("classificacao").value; // value -> Pega o valor de um input;

    if ((titulo === "") || (ano === "") || (classificacao === "")){
        alert("Preencha todos os cantos");
        return
    }
    let filme = {
        titulo:titulo,
        ano:Number(ano),
        classificacao:classificacao
    }
    
    filmes.push(filme);
    limparCampos();

    document.getElementById("confirma").innerText = "Filme cadastrado com sucesso!";
});

//FUNCOES

function listarFilmes(lista){
    let texto = lista.map(f=>`${f.titulo} (${f.ano}) - Classificação: ${f.classificacao}`).join("<br>"); // join -> Retorna um array em forma de String (pode customizar com separadores diferentes);
    document.getElementById("lista").innerHTML = "Resultado encontrado: " + "<br>" + texto;
};

function limparCampos(){
    document.getElementById("titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
}

//FILTROS

document.getElementById("btnFiltrarClas").addEventListener("click", function(){
    let valor = document.getElementById("filtrarClas").value;
    let resultado = filmes.filter(f=>f.classificacao === valor); // filter -> Cria um array a partir de elementos que passaram por uma condição específica;

    listarFilmes(resultado);
});

document.getElementById("btnFiltrarAno").addEventListener("click", function(){
    let valor = Number(document.getElementById("filtrarAno").value);

    let resultado = filmes.filter(f=>f.ano === valor); // == VS === -> Ambos comparam valores, mas == compara um valor independente do seu tipo (EX: 2 int = 2 String dá certo) e === compara um valor levando em conta seu tipo (EX: 2 int = 2 String não dá certo)

    listarFilmes(resultado);
});