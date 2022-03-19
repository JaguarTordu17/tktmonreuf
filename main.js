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

document.getElementById('home').onclick = function(){
    document.location.href = "https://tktmonreuf.tk";
}

document.getElementById('discord').onclick = function(){
    window.open("https://discord.gg/cqSj4htav3");
}
