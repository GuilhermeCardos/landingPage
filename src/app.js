const segundosCont = document.querySelector('#segundos');
const minutosCont = document.querySelector('#minutos');
const horasCont = document.querySelector('#horas');
const diasCont = document.querySelector('#dias');


//Soma mais um ano ao atual 
const anoAtual = new Date().getFullYear();
const novoAnoAtual = new Date(`November 26 ${anoAtual} 00:00:00`);

const getUnidadeTempo = und => und < 10 ? '0' + und:und;

const inserirValContador = ({dias,horas,minutos,segundos }) => {
    segundosCont.textContent = getUnidadeTempo(segundos);
    minutosCont.textContent = getUnidadeTempo(minutos);
    horasCont.textContent = getUnidadeTempo(horas);
    diasCont.textContent = getUnidadeTempo(dias);
}

const atualizaContator = () => {
    // Tempo atual
    const tempoAtual = new Date();
    const diferenca = novoAnoAtual - tempoAtual;
    
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferenca / 1000 / 60 ) % 60;
    const segundos = Math.floor(diferenca / 1000 ) % 60;
    
    inserirValContador({dias,horas,minutos,segundos});
}


//Função para repetir diversas vez para atualizar o contador
//Passamos no Parâmetro a função e o tempo para atualização no caso 1 milissegundo 
setInterval(atualizaContator, 1000)
