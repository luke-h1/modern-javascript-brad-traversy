class User{
  constructor(name){
    this.name = name;
    this.chatroom = null;

  }

  send(message, to){
    this.chatroom.send(message, this, to); // this pertains to the user
  }

  receive(message,from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

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
              to.receive(message, from);
          } else {
              // Mass message
              for (key in users) {
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