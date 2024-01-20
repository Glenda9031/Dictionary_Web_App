const submit = document.querySelector('#submit');
const searchedWord = document.querySelector('#searched-word');
const pronounce = document.querySelector('#pronounce');
const errorMsg = document.querySelector('#error-msg');
const content = document.querySelector('#content');
const sourceLink = document.querySelector('#source-link');
const footer = document.querySelector('#footer');
let word = "";
let data;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    word = document.querySelector(#input).value;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(url).then(function (response) {
        data = response.data[0];
        errorMsg.classList.add('remove-display');
        content.classList.remove('remove-display');
        footer.classList.remove('remove-display');

        innerData;

    }).catch(function (error) {
        errorMsg.classList.remove('remove-display');
        content.classList.add('remove-display');
        footer.classList.add('remove-display');
        console.log(content)
        console.log(error) 
    });
})

window.addEventListener('load', () => {
    word = "keyboard";
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    axios.get(url).then(function (response) {
        data = response.data[0];
        errorMsg.classList.add('remove-display');
        content.classList.remove('remove-display');
        footer.classList.remove('remove-display');

        innerData;

    }).catch(function (error) {
       console.log(error) 
    });
})

function innerData() {
     const str = word.charAt(0).toUpperCase() + data.word.slice(1);
     searchedWord.innerHTML = `${str}`
     pronounce.innerHTML = `${data.phonetic}`

     pronounceAudio = undefined;
     getAudio()

     const meaningSection = document.querySelector('#meaning-section');
     const meaning = data.meanings
     const meaningHTML = meaning.map((meaning) => {
        const definitions = meaning.definitions;
        const synonyms = meaning.synonyms;
        const definitionsArr = definitions.map(definition => {return `<li>${definition.definition}</li>`})
        const examples = definitions.map(definition =>  {
            if (typeof definition.example == 'string') {
                return (
                    
                )
            }
        })
     })
}










