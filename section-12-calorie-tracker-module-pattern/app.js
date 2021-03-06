/* 
========================#
STORAGE CONTROLLER START# 
========================# 
*/

// LS STORES ITEMS AS STRINGS BY DEFAULT
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const StorageCtrl = (function () {
  return {
    storeItem: function (item) {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items)); // CONVERT TO JSON STRING
      } else {
        items = JSON.parse(localStorage.getItem('items')); // CONVERT TO JSON OBJECT
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    },

    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem('items')); 
      items.forEach((item, index) => {
        if(updatedItem.id === item.id){
          items.splice(index, 1, updatedItem); 
        }
      }); 
      localStorage.setItem('items', JSON.stringify(items)); // CONVERT TO JSON STRING

    },
    deleteItemFromStorage: function(id){
      let items = JSON.parse(localStorage.getItem('items')); 
      items.forEach((item, index) => {
        if(id  === item.id){
          items.splice(index, 1); 
        }
      }); 
      localStorage.setItem('items', JSON.stringify(items)); // CONVERT TO JSON STRING
    }, 
    clearItemsFromStorage: function(){
      localStorage.removeItem('items'); 
    }, 
  };
})();

/* 
========================#
STORAGE CONTROLLER END  # 
========================# 
*/

/* 
======================#
ITEM CONTROLLER START # 
======================# 
*/

// IFFY FUNCTION
// IMMEDIATELY INVOKED FUNCTION

const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  const data = {
    //items: [
    // {
    //   id: 0,
    //   name: 'breakfast',
    //   calories: 500,
    // },
    // {
    //   id: 1,
    //   name: 'lunch',
    //   calories: 500,
    // },
    // {
    //   id: 2,
    //   name: 'dinner',
    //   calories: 500,
    // },
    //],
    items: StorageCtrl.getItemsFromStorage(),
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
    getTotalCalories: function () {
      let total = 0;
      data.items.forEach((item) => {
        total += item.calories;
        // total = total + item.calories;
      });
      data.totalCalories = total;
      return data.totalCalories;
    },
    getItemById: function (id) {
      let found = null;
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    updateItem: function (name, calories) {
      calories = parseInt(calories);
      let found = null;
      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function (id) {
      ids = data.items.map(function (item) {
        return item.id;
      });
      const index = ids.indexOf(id);
      data.items.splice(index, 1);
    },

    clearAllItems: function () {
      data.items = [];
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
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories ',
    totalCalories: '.total-calories',
    clearAllBtn: '.clear-btn',
  };
  return {
    populateItemList: function (items) {
      let html = '';
      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}"><strong>${item.name}</strong><em> ${item.calories} Calories</em>
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
    addListItem: function (item) {
      document.querySelector(UISelectors.itemList).style.display = 'block';
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `
      <strong>${item.name}</strong><em>${item.calories} Calories</em>
        <a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a>`;
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function (total) {
      document.querySelector(UISelectors.totalCalories).textContent = total;
    },

    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    addItemToForm: function () {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    showEditState: function () {
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItems = Array.from(listItems); // turn node list into an array
      listItems.forEach((i) => {
        const itemID = i.getAttribute('id');
        if (itemID === `item-${item.id}`) {
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<strong>${item.name}</strong><em>${item.calories} Calories</em>
          <a class="secondary-content" href=""><i class="edit-item fa fa-pencil"></i></a>`;
        }
      });
    },

    deleteListItem: function (id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },

    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItems = Array.from(listItems); // turn node list into array
      listItems.forEach((item) => {
        item.remove();
      });
    },

    getSelectors: function () {
      return UISelectors;
    },
  };
})();
const itemEditClick = function (e) {
  if (e.target.classList.contains('edit-item')) {
    const listId = e.target.parentNode.parentNode.id;
    const listIdArr = listId.split('-');
    const id = parseInt(listIdArr[1]);
    const itemToEdit = ItemCtrl.getItemById(id);
    ItemCtrl.setCurrentItem(itemToEdit);
    UICtrl.addItemToForm();
  }
  e.preventDefault();
};

const itemUpdateSubmit = function (e) {
  const input = UICtrl.getItemInput();
  const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
  UICtrl.updateListItem(updatedItem);
  const totalCalories = ItemCtrl.getTotalCalories();
  UICtrl.showTotalCalories(totalCalories);
  StorageCtrl.updateItemStorage(updatedItem); // UPDATE LS
  UICtrl.clearEditState();
  e.preventDefault();
};

const itemDeleteSubmit = function (e) {
  const currentItem = ItemCtrl.getCurrentItem();
  ItemCtrl.deleteItem(currentItem.id);
  e.preventDefault();
  UICtrl.deleteListItem(currentItem.id);
  const totalCalories = ItemCtrl.getTotalCalories();
  UICtrl.showTotalCalories(totalCalories);
  StorageCtrl.deleteItemFromStorage(currentItem.id);
  UICtrl.clearEditState();
};
const clearAllItems = function () {
  ItemCtrl.clearAllItems();
  const totalCalories = ItemCtrl.getTotalCalories();
  UICtrl.showTotalCalories(totalCalories); 
  UICtrl.removeItems();
  StorageCtrl.clearItemsFromStorage(); 
  UICtrl.hideList();
};

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

const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors();
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);

    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      } else {
        return true;
      }
    });

    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick);

    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);

    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);

    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', UICtrl.clearEditState);

    document
      .querySelector(UISelectors.clearAllBtn)
      .addEventListener('click', clearAllItems);
  };

  const itemAddSubmit = function (event) {
    const input = UICtrl.getItemInput();
    if (input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      event.preventDefault();
      UICtrl.addListItem(newItem);
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      StorageCtrl.storeItem(newItem);
      UICtrl.clearInput();
    }
  };

  return {
    init: function () {
      console.log('INITIALIZING APP.... ✨✅');
      const items = ItemCtrl.getItems();
      UICtrl.populateItemList(items);
      UICtrl.clearEditState();
      loadEventListeners();
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        UICtrl.populateItemList(items);
      }
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
    },
  };
})(ItemCtrl, StorageCtrl, UICtrl);

/* 
===================#
APP CONTROLLER END # 
===================# 
*/

// INITIALIZE APP
App.init();
