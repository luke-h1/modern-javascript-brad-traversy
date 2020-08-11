const button = document.getElementById('button1');

button.addEventListener('click', getData);

function handleErrors(response) {
    if (!response.ok) throw new Error(response.status);
    return response;
}

const API_URL = `https://jsonplaceholder.typicode.com/todos/1`;

function getData() {
    fetch(API_URL)
        .then(handleErrors)
        .then((response) => JSON.parse(response.json()))
        .then((json) => console.log(json)); 

    const results = document.querySelector('.results');
    results.innerHTML = `<li>${json.title}` 

    .catch((error) => console.log(error))
    }
