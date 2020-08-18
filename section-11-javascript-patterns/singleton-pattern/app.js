const Singleton = (function(){
  let instance; 
  function createInstance(){
    const object = new Object({name: 'luke'});  
    return object; 
  }
  return{
    getInstance: function(){
      if(!instance){
        instance = createInstance(); 
      }
      return instance; 
    }
  }
})(); 
const instanceA = Singleton.getInstance(); 
const instanceB = Singleton.getInstance(); 

console.log(instanceA === instanceB);

// you can never have more than one instance. 