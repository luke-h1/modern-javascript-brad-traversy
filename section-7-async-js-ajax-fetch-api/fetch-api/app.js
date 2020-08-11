// get data from a text file using arrow functions & the fetch API
document.getElementById('button1').addEventListener('click', getTextData);
function getTextData() {
    fetch('test.txt')
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });
}

// getting data from a JSON file using arrow functions and the fetch API

document.getElementById('button2').addEventListener('click', getJsonData);
function getJsonData() {
    fetch('posts.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let output = '';
            data.forEach((post) => {
                output += `
      <li>ID: ${post.id}<br> TITLE: ${post.title}</li> 
      `;
            });
            document.getElementById('output').innerHTML = output;
        });
}

// getting data from an API using the fetch API & error function

document.getElementById('button3').addEventListener('click', getApiData);

function getApiData() {
    fetch('https://api.github.com/users')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let output = '';
            data.forEach((user) => {
                output += `
        <li>${user.login}`;
            });
            document.getElementById('output').innerHTML = output;
        });
}
