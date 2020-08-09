document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();
    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `
                  <li>${joke.joke}</li>               
                `;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.output').innerHTML = output;
        
        }
    };

    xhr.open('GET', `http://api.icnb.com/jokes/random/${number}`, true);
    xhr.send();
}



