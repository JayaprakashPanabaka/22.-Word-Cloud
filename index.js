let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordCloudContainer");
let userText = document.getElementById("userText");
let addBtn = document.getElementById("addBtn");
let errorMsg = document.getElementById('errorMsg')

let errText = "Please Enter a Word";

function createAndAppendWord(word){
    let randomFontSize = Math.ceil(Math.random() * 40) + 'px';

    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordEl.classList.add('m-3');
    // console.log(randomFontSize);
    wordsContainer.appendChild(wordEl);
}


for(let word of wordCloud) {
    createAndAppendWord(word);
}

addBtn.onclick = function() {
    let userEnteredWord = userText.value;

    if(userEnteredWord !== '') {
        userText.value = '';
        errorMsg.textContent = '';
        createAndAppendWord(userEnteredWord);
    } else {
        errorMsg.textContent = errText;
    }
}





