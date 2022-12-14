var criador = document.getElementById('criador')
var github = document.getElementById('github')

document.getElementById('cor_rgb').addEventListener('change', function() {
    var cor = document.getElementById('cor_rgb').value;
    document.body.style.backgroundColor = cor;
    
    if(cor == 'black') {
        criador.style.color = 'white';
        github.style.backgroundImage = "url('imgs/github_white.png')";
        github.style.paddingLeft =  '45px';
    } else {
        criador.style.color = 'black';
        github.style.backgroundImage = "url('imgs/github.png')";
        github.style.paddingLefteft =  '20px';
    }
}); 

function cor(valor) {
    var cor = document.getElementById('cor_rgb')
    

    cor.value = valor
    document.body.style.backgroundColor = valor;

    criador.style.color = 'black';
    github.style.backgroundImage = "url('imgs/github.png')"
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
