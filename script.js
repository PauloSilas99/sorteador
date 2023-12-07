
const btn = document.querySelector('#botao');
function sorteio(e){
    e.preventDefault();
    let valorInput = parseInt(document.querySelector('#valor').value);
    let outroInput = parseInt(document.querySelector('#outroValor').value);
    let quantidadeInput = outroInput - valorInput + 1;
    document.querySelector('#quantidade').innerHTML = "Quantidade de itens selecionados: "+quantidadeInput;

    const div = document.querySelector('#container');
    if(div.style.display==='block'){
        div.style.display='none';
    }else{
        div.style.display='block'
    }
    
    let aleatorio = Math.floor(Math.random()*quantidadeInput)+valorInput;
    document.querySelector('#sorteado').innerHTML = "Número sorteado: "+ aleatorio;
    
    const novoBtn = document.querySelector('#btn2');
    if(novoBtn.style.display==='block'){
        novoBtn.style.display='none';
    }else{
        novoBtn.style.display='block';
    }
    novoBtn.addEventListener('click',()=>{
       let valorInput2 = aleatorio;
       valorInput2 =  Math.floor(Math.random()*quantidadeInput)+valorInput;
       document.querySelector('#sorteado').innerHTML = "Novo valor sorteado: "+valorInput2;
    })
}
btn.addEventListener('click',sorteio);

