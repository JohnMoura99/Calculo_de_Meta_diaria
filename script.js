let metaDiaria = document.getElementById('MetaDiaria') // Defina a meta diária desejada
let valorAtual = 0;

function adicionarValorDiario() {
  const inputValorDiario = document.getElementById('valorDiario');
  const resultadoElemento = document.getElementById('resultado');

  const valorDiario = parseFloat(inputValorDiario.value);



  if (isNaN(valorDiario) || valorDiario < 0) {
    alert('Insira um valor válido.');
    return;
  }

  valorAtual += valorDiario;

  if (valorAtual >= metaDiaria.value) {
    resultadoElemento.textContent = `Meta diária atingida! Valor acumulado: ${valorAtual}`;
     // Reinicia o valor acumulado para o próximo dia
  } else {
    resultadoElemento.textContent = `Valor acumulado no dia: R$${valorAtual}`;
  }

  inputValorDiario.value = ''; // Limpa o campo de entrada
  
  const lucro = document.getElementById('lucroo')
  let falta = document.getElementById('falta')
  let paraBater = metaDiaria.value - valorAtual
  let lucrar = valorAtual - metaDiaria.value
  
                                                                             
if(paraBater >= 0){
 falta.innerHTML = `para atingir a meta falta: R$${paraBater}`
 
}else if( lucrar >=0){
    lucro.innerHTML = `lucro de R$${lucrar}`
    falta.innerHTML ='meta batida'
}
 
}


// Função para formatar a data no formato YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Função para inicializar a data no campo de entrada de data
function inicializarDataAtual() {
  const inputDate = document.querySelector('input[type="date"]');
  const today = new Date();// Cria uma instância do objeto Date representando a data e hora atuais
  const formattedDate = formatDate(today);
  inputDate.value = formattedDate;
}

// Chamada para inicializar a data quando a página carrega
inicializarDataAtual();

