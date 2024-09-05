//criar a função para coletar o cep do input 
function Coletar(){
    let input = document.querySelector('.input-cep').value
  console.log(input)
   dados(input)
}
//função para consumir API via Cep
async function dados(input){
let dados= await fetch(`https://viacep.com.br/ws/${input}/json/`).then(Response=>Response.json())
console.log(dados)
ExibirDados(dados)
}

//função inserir dados na tela
function ExibirDados(dados){
    document.querySelector('.Estado').value = dados.uf
    document.querySelector('.Cidade').value = dados.localidade
    document.querySelector('.Endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
}

