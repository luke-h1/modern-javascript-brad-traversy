// require('dotenv').config();

// class Github {
//     constructor() {
//         this.client_ID = process.env.CLIENT_ID;
//         this.client_secret = process.env.CLIENT_SECRET;
//     }
//     async getUser(user) {
//         const API_URL = `https://api.github.com/users/${user}?client_ID=${this.client.ID}&client_secret=${this.client_secret}`;
//         const profileResponse = await fetch(API_URL);
//         const profile = await profileResponse.json();
//         return {
//             profile,
//         };
//     }
// }

class Github{
  constructor(){
    this.client_id = '08963522b04ef051f1b8' ;
    this.client_secret = 'cef7f16c9a2aeb072032790d125c3dd3ae4ae99e';
  }

  async getUser(user){
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_ID=08963522b04ef051f1b8&client_secret=cef7f16c9a2aeb072032790d125c3dd3ae4ae99e`); 
    
    const profileData = await profileResponse.json(); 
    return {
      profile: profileData 
    }
  }
}