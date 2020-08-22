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
// IMMEDIATELY INVOKED FUNCTION

const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  const data = {
    items: [
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
    getTotalCalories: function () {
      let total = 0;
      data.items.forEach((item) => {
        total += item.calories;
        // total = total + item.calories;
      });
      data.totalCalories = total;
      return data.totalCalories;
    },
    getItemById: function(id) { 
      let found = null;  
      data.items.forEach((item) => {
        if(item.id === id){
          found = item; 
        }
      }); 
      return found; 
    },  
    setCurrentItem: function(item){
      data.currentItem = item;
    },   
    getCurrentItem: function(){
       return data.currentItem;  
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
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories ',
    totalCalories: '.total-calories',
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
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories; 
      UICtrl.showEditState();

    },  
     showEditState: function() {
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
     }, 

    getSelectors: function () {
      return UISelectors;
    },
  };
})();
const itemUpdateSubmit = function(e){
  if(e.target.classList.contains('edit-item')){ 
    const listId = e.target.parentNode.parentNode.id;  
    const listIdArr = listId.split('-');  
    const id = parseInt(listIdArr[1]); 
    const itemToEdit = ItemCtrl.getItemById(id);  
    ItemCtrl.setCurrentItem(itemToEdit); 
    UICtrl.addItemToForm(); 
  } 
  e.preventDefault(); 

} 
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

    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);       
  };

  const itemAddSubmit = function (event) {
    const input = UICtrl.getItemInput();
    if (input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      event.preventDefault();
      UICtrl.addListItem(newItem);
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
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
})(ItemCtrl, UICtrl);

/* 
===================#
APP CONTROLLER END # 
===================# 
*/

// INITIALIZE APP
App.init();
