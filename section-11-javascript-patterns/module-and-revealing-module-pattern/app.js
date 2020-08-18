// // basic structure of module pattern
// (function(){
//   // declare private variables and functions here

//   return {
//     // Declare public variables and function here
//   }
// })();

// standard module pattern
// const UICtrl = (function(){
//   let text = 'Hello world';
//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }

// })();

// UICtrl.callChangeText();

// revealing module pattern
const ItemCtrl = (function () {
    let data = [];
    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id) {
        return data.find((item) => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get,
    };
})();

ItemCtrl.add({id: 1, name: 'john'}); 
ItemCtrl.add({id: 2, name: 'Luke'}); 

console.log(ItemCtrl.get(1)); 
console.log(ItemCtrl.get(2)); 