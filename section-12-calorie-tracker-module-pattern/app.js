/* 
========================#
STORAGE CONTROLLER START# 
========================# 
*/

/* 
========================#
STORAGE CONTROLLER END# 
========================# 
*/

 




/* 
======================#
ITEM CONTROLLER START # 
======================# 
*/

// IFFY FUNCTION

const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
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
  };

  return {
    getItems: function(){
      return data.items;  
    }, 

    logData: function () {
      return data;
    },


  };
})();
/* 
======================#
ITEM CONTROLLER END   # 
======================# 
*/




/* 
=====================#
UI CONTROLLER START  # 
=====================# 
*/

const UICtrl = (function () {
  return { 
    populateItemList: function(items){
      let html = ''; 
      items.forEach(function(item){
        html += `  <li class="collection-item" id="item-${item.id}"><strong>${item.name}</strong><em> ${item.calories} Calories</em>
        <a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a>
      </li> `;
      });
      document.querySelector('#item-list').innerHTML = html;  
    }
  }



})();


/* 
=====================#
UI CONTROLLER END  # 
=====================# 
*/







/* 
====================#
APP CONTROLLER START# 
====================# 
*/

const App = (function (ItemCtrl, UICtrl) {
return {
  init: function(){
    console.log('INITIALIZING APP.... ✨✅')
    const items = ItemCtrl.getItems();    
    UICtrl.populateItemList(items); 
  }
}




})(ItemCtrl, UICtrl);

/* 
===================#
APP CONTROLLER END # 
===================# 
*/

// INITIALIZE APP 
App.init();