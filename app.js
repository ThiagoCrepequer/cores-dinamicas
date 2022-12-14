var criador = document.getElementById('criador')

document.getElementById('cor_rgb').addEventListener('change', function() {
    var cor = document.getElementById('cor_rgb').value;
    document.body.style.backgroundColor = cor;
    
    if(cor == 'black') {
        criador.style.color = 'white';
    } else {
        criador.style.color = 'black';
    }
}); 

function cor(valor) {
    var cor = document.getElementById('cor_rgb')
    cor.value = valor
    document.body.style.backgroundColor = valor;

    criador.style.color = 'black';
}

document.getElementById('green').addEventListener('click', function() {
    cor('green')
})
document.getElementById('red').addEventListener('click', function() {
    cor('red')
})
document.getElementById('yellow').addEventListener('click', function() {
    cor('yellow')
})
document.getElementById('blue').addEventListener('click', function() {
    cor('blue')
})
