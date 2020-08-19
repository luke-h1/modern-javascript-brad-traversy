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
            {
                id: 0,
                name: 'Steak',
                calories: 1100,
            },
            {
                id: 1,
                name: 'chocolate',
                calories: 300,
            },
            {
                id: 2,
                name: 'oreos',
                calories: 200,
            },
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
    };
})();

// UI controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
    };
    // public methods
    return {
        populateItemList: function (items) {
            let html = '';
            items.forEach((item) => {
                html += `
            <li id="item-${item.id}" class="collection-item">
            <strong>${item.name}</strong> <em> ${item.calories} Calories</em> 
            <a href="#" class="secondary-content"><i class="edit-item fa-fapencil"</i> 
            </a> 
            </li> 
        `;
            });
            // Insert list items into DOM
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
    };
})();

// App Controller
const AppCtrl = (function (itemCtrl, UICtrl) {
    // Public methods
    return {
        init: function () {
            const items = itemCtrl.getItems(); // Fetch Items from data struct
            UICtrl.populateItemList(items); // populate list w/ items
        },
    };
})(ItemCtrl, UICtrl);

// init
AppCtrl.init();
