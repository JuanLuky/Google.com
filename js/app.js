function Pesquisar() {
    let inputText = document.querySelector('.query');
    let valueInput = inputText.value;
    
    let url ='https://www.google.com/search?q='+valueInput;

    if(valueInput == "") {
        alert('Please enter')
    } else {
        window.open(url,'_self');
    }
}

function clickSearch() {
   Pesquisar();
}
window.addEventListener('keyup', function(event) {
    if(event.key == "Enter"){
        Pesquisar();
    }
});

window.addEventListener("load")

