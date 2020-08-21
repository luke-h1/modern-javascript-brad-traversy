/* 
===================#
STORAGE CONTROLLER # 
===================# 
*/

/* 
================#
ITEM CONTROLLER # 
================# 
*/

// IFFY FUNCTION

const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  } 
    const data = {
      items: [
        {
          id: 0,
          name: 'breakfast',
          calories: 500,
        },
        {
          id: 1,
          name: 'lunch',
          calories: 500,
        },
        {
          id: 2,
          name: 'dinner',
          calories: 500,
        },
      ],
      currentItem: null,
      totalCalories: 0,
    }

    return { 
      logData: function(){
        return data;
      }
    }
  
    

})();

/* 
================#
UI CONTROLLER ### 
================# 
*/

const UICtrl = (function () {})();

/* 
================#
APP CONTROLLER # 
================# 
*/

const App = (function (ItemCtrl, UICtrl) {})(ItemCtrl, UICtrl);
