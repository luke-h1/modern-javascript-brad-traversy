export default class Github {
    constructor() {
        this.client_ID = process.env.CLIENT_ID;
        this.client_secret = process.env.CLIENT_SECRET;
    }
    async getUser(user) {
        const API_URL = `https://api.github.com/users/${user}?client_ID=${this.client.ID}&client_secret=${this.client_secret}`;
        const profileResponse = await fetch(API_URL);
        const profile = await profileResponse.json();
        return {
            profile,
        };
    }
}


