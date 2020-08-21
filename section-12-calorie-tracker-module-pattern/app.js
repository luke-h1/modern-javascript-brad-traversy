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
    getItems: function () {
      return data.items;
    },

    addItem: function (name, calories) {
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      calories = parseInt(calories);
      newItem = new Item(ID, name, calories); 
      data.items.push(newItem); // PUSH TO ITEMS ARRAY 
      return newItem; 
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
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories ',
  };
  return {
    populateItemList: function (items) {
      let html = '';
      items.forEach(function (item) {
        html += `  <li class="collection-item" id="item-${item.id}"><strong>${item.name}</strong><em> ${item.calories} Calories</em>
        <a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a>
      </li> `;
      });
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    getSelectors: function () {
      return UISelectors;
    },
  };
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
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors();
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
  };

  const itemAddSubmit = function (event) {
    const input = UICtrl.getItemInput();
    if (input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    } else {
    }
    event.preventDefault();
  };

  return {
    init: function () {
      console.log('INITIALIZING APP.... ✨✅');
      const items = ItemCtrl.getItems();
      UICtrl.populateItemList(items);
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

/* 
===================#
APP CONTROLLER END # 
===================# 
*/

// INITIALIZE APP
App.init();
