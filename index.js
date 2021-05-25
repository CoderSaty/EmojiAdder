const userMessage = document.getElementById("userMessage");
const addEmoji = document.getElementById("transalateButton");
const outputMessage = document.getElementById("translatedMessage");
var url = "https://api.funtranslations.com/translate/emoji.json?text=";
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";
addEmoji.addEventListener('click', () => {
    url += userMessage.value;
    fetch(url).then(res => res.json()).then(msg => outputMessage.innerHTML = "<span>" + msg.contents.translated + "</span>").catch(err => {
        console.log(err);
        alert("soory! I messed up please try after one houe");
    });
});