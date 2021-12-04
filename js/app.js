search = () => {
    let inputText = document.querySelector('.query');
    let valueInput = inputText.value;
    
    let url ='https://www.google.com/search?q='+valueInput;
    window.open(url,'_self');
}

window.addEventListener('keydown', function(event) {
    if(event.key == "Enter"){
        let inputText = document.querySelector('.query');
        let valueInput = inputText.value;
        let url ='https://www.google.com/search?q='+valueInput;
        window.open(url,'_self');
    }
});



