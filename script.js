const form = document.getElementById("form");
const wordInput = document.getElementById("word");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const word = wordInput.value.trim();

    if (word === "") {
        output.innerHTML = `<p class="error">Please enter a word</p>`;
        return;
    }

    fetchWord(word);
});

function fetchWord(word) {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then(res => res.json())
        .then(data => {
            if (data.title) {
                output.innerHTML = `<p class="error">Word not found</p>`;
                return;
            }

            const definition = data[0].meanings[0].definitions[0].definition;
            const phonetic = data[0].phonetic || "Not available";

            output.innerHTML = `
                <p class="word"><strong>Word:</strong> ${word}</p>
                <p><strong>Pronunciation:</strong> ${phonetic}</p>
                <p class="definition"><strong>Definition:</strong> ${definition}</p>
            `;
        })
        .catch(() => {
            output.innerHTML = `<p class="error">Error fetching data</p>`;
        });
}
