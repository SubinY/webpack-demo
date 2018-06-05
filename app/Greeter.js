var config = require('./config.json');
import style from "./Greeter.css"
module.exports = function(...p) {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  greet.className = style.root;
  console.log(arguments);
  return greet;
};
