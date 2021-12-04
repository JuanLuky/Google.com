function Pesquisar() {
    let inputText = document.querySelector('.query');
    let valueInput = inputText.value;
    
    let url ='https://www.google.com/search?q='+valueInput;

    if(valueInput == "") {
        window.addEventListener("load")
    } else {
        window.open(url,'_self');
    }

}


click = () => {
   Pesquisar();
}
window.addEventListener('keyup', function(event) {
    if(event.key == "Enter"){
        Pesquisar();
    }
});



