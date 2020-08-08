document.getElementById('button').addEventListener('click', getData);

function getData() {
    const xhr = new XMLHttpRequest(); // Create an XHR object. instantiating the object
    xhr.open('GET', 'data.txt', true); // OPEN (true = async) // REQ, API or FILE, true or false for async
    console.log('READYSTATE AT THE START', xhr.readyState);
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText); 
            document.getElementById('output').innerHTML =
            `${this.responseText}`
 
            console.log('READYSTATE AFTER REQUEST ', xhr.readyState);
        }
    };
    xhr.send(); // have to specify send in order for xhr to make the request
}

// HTTP STATUSES
// 200 OK
// 403 FORBIDDEN
// 404 NOT FOUND

// XHR READYSTATE VALUES
// 0 REQUEST NOT INITIALIAZED
// 1 SEVER CONNECTION ESTABLISHED
// 2 REQUEST RECEIVED
// 3 PROCESSING REQUEST
// 4 REQUEST FINSIHED AND RESPONSE IS READY

// old syntax way  of doing things
xhr.onreadystatechange = function () {
    console.log('READYSTATE AT THE START', xhr.readyState);

    if (this.status === 200 && this.onreadystate === 4) {
        console.log(this.responseText);
        console.log('READYSTATE AFTER REQUEST ', xhr.readyState);
    }
};


// error handler 
xhr.onerror = function(){
  console.log('some error, request failed ')
}