class Weather { 
  constructor(city){
    this.apiKey = '2bc352ec1c664850bae161739201208'; 
    this.city = city 
      
  }
  async getWeather(){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2bc352ec1c664850bae161739201208&q=london`); 

    const responseData = await response.json(); 
    return responseData.current ; 
  }

  // change weather location 
  changeLocation(city){
    this.city = city;  
  }

}