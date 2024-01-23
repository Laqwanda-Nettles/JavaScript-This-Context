const messageHandler = {
  message1: "The first button was clicked.",
  message2: "The second button was clicked.",
  message3: "The third button was clicked.",
  displayMessage1: function () {
    this.displayMessage(this.message1);
  },
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
};

let btn1 = document.getElementById("btn1");
btn1.addEventListener(
  "click",
  messageHandler.displayMessage1.bind(messageHandler)
);
