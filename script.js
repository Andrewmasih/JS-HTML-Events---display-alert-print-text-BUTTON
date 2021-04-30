/* HTML Events are actions that triggers events in HTML, it allows us to call a javascript function when an events happen, such as clicking a button */

/*use the 'onclick' attribute

action causes an event!, move of a mouse, or clicking a button. 

All the default evets in HTML start with a "On" like 'onclick' 

use this as a attribute to HTML elements to trigger a function. 
eg <button onclick = "displayAlert ()"> DISPLAYaLERT </button>

*/



function displayAlert () {
  let today = new Date ()
  let time = today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds();
  alert ("hi! the time is now:" + time);
};

function printToConsole() {
  console.log("watch me count to 10...");
  for (let count = 1; count < 10; count ++) {
    console.log(count);
  }

};