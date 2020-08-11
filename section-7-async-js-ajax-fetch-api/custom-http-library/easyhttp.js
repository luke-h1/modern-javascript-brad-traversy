function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET req
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error' + self.http.status);
        }
    };
    this.http.send();
};

// Make an HTTP POST req
easyHTTP.prototype.post = function (url, data, callback) { 
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.send(JSON.stringify(data));
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText); 
    };
};


// Make an HTTP PUT req
easyHTTP.prototype.put = function (url, data, callback) { 
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.send(JSON.stringify(data));
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText); 
    };
};



// Make an HTTP DELETE req
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'post deleted');
        } else {
            callback('Error' + self.http.status);
        }
    };
    this.http.send();
};