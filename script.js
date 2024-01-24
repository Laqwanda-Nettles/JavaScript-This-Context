const messageHandler = {
  message1: "The first button was clicked.",
  message2: "The second button was clicked.",
  message3: "The third button was clicked.",
  displayMessage1: function () {
    this.displayMessage(this.message1);
  },
  // this.displayMessage is refrencing the displayMessage method below. this.message1 refers to the property above. So, the displayMessage1 method is saying it's refrencing this to create a p element and placing the message above inside of that element.
  displayMessage2: function () {
    this.displayMessage(this.message2);
  },
  displayMessage3: function () {
    this.displayMessage(this.message3);
  },
  displayMessage: function (message) {
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  },
  // this method is creating a p element and is used to append the messages from the messHandler object to the body.
};

const btn1 = document.getElementById("btn1");
btn1.addEventListener(
  "click",
  messageHandler.displayMessage1.bind(messageHandler)
);
// assigning the btn1 variable to button 1 & attaching the variable to an eventlistener. binding the click event to the messageHandler's display message.
const btn2 = document.getElementById("btn2");
btn2.addEventListener(
  "click",
  messageHandler.displayMessage2.bind(messageHandler)
);

const btn3 = document.getElementById("btn3");
btn3.addEventListener(
  "click",
  messageHandler.displayMessage3.bind(messageHandler)
);
// to bind is like keeping a copy of a method that can be called later.
