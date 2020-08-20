// storage controller

// item controller
const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    // Data State:
    const data = {
        items: [
            // TODO: CALL w/ API in future
            // {
            //     id: 0,
            //     name: 'Steak',
            //     calories: 1100,
            // },
            // {
            //     id: 1,
            //     name: 'chocolate',
            //     calories: 300,
            // },
            // {
            //     id: 2,
            //     name: 'oreos',
            //     calories: 200,
            // },
        ],
        currentItem: null,
        totalCalories: 0,
    };
    return {
        getItems: function () {
            return data.items;
        },
        logData: function () {
            return data; // {items: Array(3), currentItem: null, totalCalories: 0}
        },
        addItem: function (name, calories) {
            let ID;
            // create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1; // increment ID by one each iteration
            } else {
                ID = 0;
            }
            // Calories to numbers:
            calories = parseInt(calories);
            newItem = new Item(ID, name, calories); // create a new item
            data.items.push(newItem); // push to end of item array
            return newItem;
        },
        getTotalCalories: function () {
            let total = 0;
            data.items.forEach((item) => {
                total += item.calories;
            });
            data.totalCalories = total; // set data.totalCalories = to total
            // return
            return data.totalCalories;
        },
    };
})();

// UI controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    };
    // public methods
    return {
        populateItemList: function (items) {
            let html = '';
            items.forEach((item) => {
                html += `
            <li id="item-${item.id}" class="collection-item">
            <strong>${item.name}</strong> <em> ${item.calories} Calories</em> 
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i> 
            </a> 
            </li> 
        `;
            });
            // Insert list items into DOM
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function () {
            return UISelectors;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput)
                    .value,
            };
        },
        addListItem: function (item) {
            document.querySelector(UISelectors.itemList).style.display =
                'block'; // show the list
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = ` <strong>${item.name}</strong> <em> ${item.calories} Calories</em> 
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i> 
            </a> `;
            // insert into DOM
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
        showTotalCalories: function(total){
            document.querySelector(UISelectors.totalCalories).textContent = total;
        }
    };
})();

// App Controller
const AppCtrl = (function (itemCtrl, UICtrl) {
    // load event listeners function
    const loadEventListeners = () => {
        const UISelectors = UICtrl.getSelectors();

        // add item event
        document
            .querySelector(UISelectors.addBtn)
            .addEventListener('click', itemAddSubmit);
    };

    const itemAddSubmit = function (e) {
        e.preventDefault();
        const input = UICtrl.getItemInput(); // get form input from UI controller
        // console.log(input);
        // check for name and calories input
        if (input.name !== '' && input.calories !== '') {
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            // add ITEM TO UI LIST
            UICtrl.addListItem(newItem);
            const totalCalories = ItemCtrl.getTotalCalories(); // get total cals 
            UICtrl.showTotalCalories(totalCalories); // add to ui 
            // clr fields after user enters values
            UICtrl.clearInput();
        }
    };

    // Public methods
    return {
        init: function () {
            const items = itemCtrl.getItems(); // Fetch Items from data struct
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                UICtrl.populateItemList(items); // populate list w/ items
            }
            loadEventListeners(); // load event listeners
        },
    };
})(ItemCtrl, UICtrl);

// init
AppCtrl.init();
