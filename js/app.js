search = () => {
    let inputText = document.querySelector('.query');
    let valueInput = inputText.value;
    
    let url ='https://www.google.com/search?q='+valueInput;
    window.open(url,'_self');
}