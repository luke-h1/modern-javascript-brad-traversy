// storage controller 



// item controller 
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data State: 
  const data = {
    items: [
      {
        id: 0,
        name: 'Steak',
        calories: 1100
      },
      {
        id: 1,
        name: 'chocolate',
        calories: 300
      },
      {
        id: 2,
        name: 'oreos',
        calories: 200
      }
    ],
    currentItem: null,
    totalCalories: 0
  }
  return { 
    getItems: function(){
      return data.items; 
    }, 
    logData: function () {
      return data; // {items: Array(3), currentItem: null, totalCalories: 0} 
    }
  }

}()); 





// UI controller 
const UICtrl = (function () {
  // public methods 
  return { 
    populateItemList: function(items){
      let html = ''; 
      
    }

  }
}())



// App Controller 
const AppCtrl = (function (itemCtrl, UICtrl) {
  // Public methods 
  return {
    init: function () {
      const items = itemCtrl.getItems();       // Fetch Items from data struct 
      UICtrl.populateItemList(items);         // populate list w/ items 
      
    }
  }
}(ItemCtrl, UICtrl))

// init 
AppCtrl.init();
