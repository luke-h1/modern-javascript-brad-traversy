// getting data from a text file using the fetch API
document.getElementById('button1').addEventListener('click', getTextData);
function getTextData() {
    fetch('test.txt')
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            // catch the promise returned from res.text()
            console.log(data); // console.log() the data returned from res.text()
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}

// getting data from a json file using the fetch API
document.getElementById('button2').addEventListener('click', getJsonData);
function getJsonData() {
    fetch('posts.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            let output = '';
            data.forEach(function (post) {
                // loop over the array and get the details
                output += `
                <li>ID: ${post.id}<br> TITLE: ${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        });
}

// getting data from an API using the fetch API
document.getElementById('button3').addEventListener('click', getApiData);
function getApiData() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json();
        })

        .then(function (data) {
            console.log(data);
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}`;
            });
            document.getElementById('output').innerHTML = output;
        });
}
