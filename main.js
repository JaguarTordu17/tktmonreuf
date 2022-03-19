function copyToClickBoard(){
    var content = document.getElementById('ip');

    navigator.clipboard.writeText(content.innerHTML)
        .then(() => {
        content.innerText = "IP copiée !";
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}