function aula1() {
    alert('Ativado');
}

function aula2() {
    var nome = document.querySelector('input[id=nome]');

    
    alert(nome.value);
}

function aula3() {
    var linkE = document.createElement('a');
    linkE.setAttribute('href', 'https://www.google.com.br/');

    var textE = document.createTextNode('Google');
    linkE.appendChild(textE);

    var containerElement = document.querySelector('#app');
    containerElement.appendChild(textE);

}


function aula4() {
    
    var cor = document.querySelector('input[id=cor]').value; 
    var bodyColor = document.querySelector('body');

    bodyColor.style.backgroundColor = cor;
    
}