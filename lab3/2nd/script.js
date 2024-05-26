document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('splitForm');
    const inputString = document.getElementById('inputString');
    const resultList = document.getElementById('resultList');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const str = inputString.value;
        const pairs = splitStringIntoPairs(str);
        displayPairs(pairs);
    });

    function splitStringIntoPairs(str) {
        let pairs = [];
        for (let i = 0; i < str.length; i += 2) {
            let pair = str[i];
            if (i + 1 < str.length) {
                pair += str[i + 1];
            } else {
                pair += '_';
            }
            pairs.push(pair);
        }
        return pairs;
    }

    function displayPairs(pairs) {
        resultList.innerHTML = '';
        pairs.forEach(pair => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = pair;
            resultList.appendChild(listItem);
        });
    }
});
