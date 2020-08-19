// TODO: ADD ES6 VERSION

const User = function (name) {
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to); // this pertains to the user
    },

    receive: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    },
};

const Chatroom = function () {
    let users = {}; // list of users
    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                // to a single user
                to.receive(message, from); // just send to single user 
            } else {
                for (key in users) { // send to every user 
                    if (users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        },
    };
};

const luke = new User('Luke'); 
const john = new User('john'); 
const sara = new User('sara'); 
const chatroom = new Chatroom();

// register users 
chatroom.register(luke);
chatroom.register(john);
chatroom.register(sara);


luke.send('Hello john', john)
sara.send('Hello john', john); 
john.send('Hello everyone!') // send message to all users 8