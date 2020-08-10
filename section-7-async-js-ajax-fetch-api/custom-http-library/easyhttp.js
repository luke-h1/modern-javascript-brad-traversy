function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET req
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(self.http.responseText);
        }
    };
    this.http.send();
};

// Make an HTTP POST req

// Make an HTTP PUT req

// Make an HTTP DELETE req
