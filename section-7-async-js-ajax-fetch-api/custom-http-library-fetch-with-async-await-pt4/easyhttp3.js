/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable */
class EasyHTTP {
    async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }

    async post(url, data) {}

    async put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => resolve(data))
                .then((err) => reject(err));
        });
    }

    async delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then(() => resolve('Resource now deleted ✅'))
                .catch((err) => reject(err));
        });
    }
}
